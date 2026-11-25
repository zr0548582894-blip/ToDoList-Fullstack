const ListBuildSources = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "name": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter by name"
          },
          "ownerId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The ID of the workspaces to return resources for"
          },
          "projectId": {
            "type": "string"
          },
          "includePreviews": {
            "type": "boolean",
            "default": true,
            "description": "Include previews in the response"
          },
          "createdBefore": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:15:30Z"
            ],
            "description": "Filter for resources created before a certain time (specified as an ISO 8601 timestamp)"
          },
          "createdAfter": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-02-17T08:15:30Z"
            ],
            "description": "Filter for resources created after a certain time (specified as an ISO 8601 timestamp)"
          },
          "updatedBefore": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:15:30Z"
            ],
            "description": "Filter for resources updated before a certain time (specified as an ISO 8601 timestamp)"
          },
          "updatedAfter": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:15:30Z"
            ],
            "description": "Filter for resources updated after a certain time (specified as an ISO 8601 timestamp)"
          },
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
          "buildSource",
          "cursor"
        ],
        "properties": {
          "buildSource": {
            "type": "object",
            "required": [
              "id",
              "name",
              "ownerId",
              "createdAt",
              "updatedAt",
              "serviceLinks"
            ],
            "properties": {
              "id": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "ownerId": {
                "type": "string",
                "description": "ID of the workspace this build source belongs to."
              },
              "projectId": {
                "type": "string",
                "description": "ID of the project this build source is scoped to, if any."
              },
              "git": {
                "description": "Present when the build source is currently build-based. Mutually exclusive with `image`.\n",
                "type": "object",
                "required": [
                  "runtime"
                ],
                "properties": {
                  "branch": {
                    "type": "string"
                  },
                  "buildCommand": {
                    "type": "string"
                  },
                  "buildFilter": {
                    "type": "object",
                    "description": "Glob patterns matched against files changed by a commit. When set, a commit only triggers a build when at least one changed file matches `paths` and none match `ignoredPaths`. Useful for monorepos where a single repo backs many services.\n",
                    "required": [
                      "paths",
                      "ignoredPaths"
                    ],
                    "properties": {
                      "paths": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      },
                      "ignoredPaths": {
                        "type": "array",
                        "items": {
                          "type": "string"
                        }
                      }
                    }
                  },
                  "dockerContext": {
                    "type": "string",
                    "description": "Directory passed to `docker build` as the build context, relative to the repository root. Only valid for the `docker` runtime. Defaults to \".\".\n"
                  },
                  "dockerfilePath": {
                    "type": "string"
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
                    "description": "Build runtime for the build source. Static sites are not supported for build sources.\n\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust`"
                  },
                  "registryCredentialId": {
                    "type": "string"
                  },
                  "region": {
                    "type": "string",
                    "enum": [
                      "frankfurt",
                      "oregon",
                      "ohio",
                      "singapore",
                      "virginia"
                    ],
                    "default": "oregon",
                    "description": "Defaults to \"oregon\"\n\n`frankfurt` `oregon` `ohio` `singapore` `virginia`"
                  },
                  "repoUrl": {
                    "type": "string"
                  },
                  "rootDir": {
                    "type": "string"
                  }
                }
              },
              "image": {
                "description": "Present when the build source is currently image-based. Mutually exclusive with `git`.\n",
                "type": "object",
                "required": [
                  "ownerId",
                  "imageUrl"
                ],
                "properties": {
                  "ownerId": {
                    "type": "string"
                  },
                  "registryCredentialId": {
                    "type": "string"
                  },
                  "imageUrl": {
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
              "serviceLinks": {
                "type": "array",
                "items": {
                  "type": "object",
                  "required": [
                    "id",
                    "name"
                  ],
                  "properties": {
                    "id": {
                      "type": "string"
                    },
                    "name": {
                      "type": "string"
                    }
                  }
                },
                "description": "Services currently linked to this build source."
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
export default ListBuildSources
