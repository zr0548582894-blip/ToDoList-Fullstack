const TriggerBuildSourceBuild = {
  "body": {
    "type": "object",
    "properties": {
      "clearCache": {
        "type": "string",
        "enum": [
          "clear",
          "do_not_clear"
        ],
        "default": "do_not_clear",
        "description": "If `clear`, Render clears the build source's build cache before building. This can be useful if you're experiencing issues with your build."
      },
      "deploy": {
        "type": "object",
        "required": [
          "serviceScope"
        ],
        "properties": {
          "serviceScope": {
            "type": "string",
            "enum": [
              "autodeploy_only",
              "none",
              "custom"
            ],
            "description": "Which linked services the build deploys to:\n\n- `autodeploy_only`: every linked service with autodeploy on, including services set to deploy after CI checks pass. Services with autodeploy off do not get a deploy.\n- `none`: no services. The build runs and deploys nothing.\n- `custom`: the linked services in `serviceIds`, regardless of their autodeploy setting.\n"
          },
          "serviceIds": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "IDs of the linked services to deploy to. Required when `serviceScope` is `custom`, and not allowed with the other scopes. You must be authorized to trigger a deploy for each service that you include in this list.\n"
          }
        }
      }
    },
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "buildSourceId": {
            "type": "string"
          }
        },
        "required": [
          "buildSourceId"
        ]
      }
    ]
  },
  "response": {
    "201": {
      "type": "object",
      "required": [
        "buildSourceId",
        "createdAt",
        "deploys",
        "id",
        "skippedServices",
        "updatedAt"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "buildSourceId": {
          "type": "string"
        },
        "buildRun": {
          "type": "object",
          "required": [
            "id"
          ],
          "description": "The Render build run that produced this build. Present when the build source is currently build-based. Mutually exclusive with `image`.\n",
          "properties": {
            "id": {
              "type": "string"
            },
            "status": {
              "type": "string",
              "enum": [
                "created",
                "inProgress",
                "succeeded",
                "failed",
                "canceled",
                "unknown"
              ],
              "description": "`created` `inProgress` `succeeded` `failed` `canceled` `unknown`"
            },
            "buildStartedAt": {
              "type": "string",
              "format": "date-time"
            },
            "buildFinishedAt": {
              "type": "string",
              "format": "date-time"
            },
            "runtime": {
              "type": "string",
              "enum": [
                "docker",
                "elixir",
                "go",
                "node",
                "python",
                "ruby",
                "rust"
              ],
              "description": "`docker` `elixir` `go` `node` `python` `ruby` `rust`"
            },
            "commitId": {
              "type": "string"
            },
            "commitUrl": {
              "type": "string"
            }
          }
        },
        "image": {
          "type": "object",
          "description": "Present when the build source is currently image-based. Mutually exclusive with `buildRun`.\n",
          "properties": {
            "imageVersionId": {
              "type": "string"
            },
            "SHA": {
              "type": "string"
            },
            "ref": {
              "type": "string"
            },
            "imageUrl": {
              "type": "string"
            },
            "registryCredentialId": {
              "type": "string"
            }
          }
        },
        "createdAt": {
          "type": "string",
          "format": "date-time"
        },
        "updatedAt": {
          "type": "string",
          "format": "date-time"
        },
        "assetsDeletedAt": {
          "type": "string",
          "format": "date-time"
        },
        "deploys": {
          "type": "array",
          "description": "The deploys that the build started, one for each service.",
          "items": {
            "type": "object",
            "required": [
              "serviceId",
              "deployId"
            ],
            "properties": {
              "serviceId": {
                "type": "string"
              },
              "deployId": {
                "type": "string"
              }
            }
          }
        },
        "skippedServices": {
          "type": "array",
          "description": "Services in `deploy.serviceScope` that did not get a deploy, with the reason for each. The build still runs for the other services. For `autodeploy_only`, suspended services are not listed.\n",
          "items": {
            "type": "object",
            "required": [
              "serviceId",
              "reason"
            ],
            "properties": {
              "serviceId": {
                "type": "string"
              },
              "reason": {
                "type": "string",
                "enum": [
                  "suspended",
                  "deploys_shut_off"
                ],
                "description": "Why the service did not get a deploy:\n\n- `suspended`: the service is suspended.\n- `deploys_shut_off`: Render has temporarily paused deploys for the service's plan tier.\n\n\n`suspended` `deploys_shut_off`"
              }
            }
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default TriggerBuildSourceBuild
