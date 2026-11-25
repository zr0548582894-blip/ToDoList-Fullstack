const CreateBuildSource = {
  "body": {
    "type": "object",
    "required": [
      "ownerId",
      "name"
    ],
    "properties": {
      "ownerId": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "projectId": {
        "type": "string"
      },
      "git": {
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
            "description": "Build runtime for the build source. Static sites are not supported for build sources.\n"
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
            "description": "Defaults to \"oregon\""
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
      "serviceIds": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "envVars": {
        "type": "array",
        "items": {
          "type": "object",
          "oneOf": [
            {
              "type": "object",
              "required": [
                "key",
                "value"
              ],
              "properties": {
                "key": {
                  "type": "string"
                },
                "value": {
                  "type": "string"
                }
              }
            },
            {
              "type": "object",
              "required": [
                "key",
                "generateValue"
              ],
              "properties": {
                "key": {
                  "type": "string"
                },
                "generateValue": {
                  "type": "boolean",
                  "description": "If true, Render generates a strong random value for this environment variable on creation. Cannot be combined with `value`."
                }
              }
            }
          ]
        }
      },
      "secretFiles": {
        "type": "array",
        "items": {
          "type": "object",
          "required": [
            "name",
            "content"
          ],
          "properties": {
            "name": {
              "type": "string"
            },
            "content": {
              "type": "string"
            }
          }
        },
        "description": "Secret files for the build source's build. Only valid for `git` sources.\n"
      },
      "envGroupIds": {
        "type": "array",
        "items": {
          "type": "string"
        },
        "description": "IDs of env groups to link to the build source. Only valid for `git` sources; env groups must belong to the same workspace and must not be scoped to an environment.\n"
      }
    },
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "response": {
    "201": {
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
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default CreateBuildSource
