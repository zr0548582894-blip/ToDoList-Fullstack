const ListBuildsInBuildSource = {
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
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "cursor": {
            "type": "string",
            "description": "The position in the result list to start from when fetching paginated results. For details, see [Pagination](https://api-docs.render.com/reference/pagination)."
          },
          "limit": {
            "type": "integer",
            "default": 20,
            "minimum": 1,
            "maximum": 100,
            "description": "The maximum number of items to return. For details, see [Pagination](https://api-docs.render.com/reference/pagination)."
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "build",
          "cursor"
        ],
        "properties": {
          "build": {
            "type": "object",
            "required": [
              "id",
              "buildSourceId",
              "createdAt",
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
                },
                "description": "The Render build run that produced this build. Present when the build source is currently build-based. Mutually exclusive with `image`.\n"
              },
              "image": {
                "type": "object",
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
                },
                "description": "Present when the build source is currently image-based. Mutually exclusive with `buildRun`.\n"
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
              }
            }
          },
          "cursor": {
            "type": "string"
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListBuildsInBuildSource
