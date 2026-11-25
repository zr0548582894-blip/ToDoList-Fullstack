const CreateWorkflow = {
  "body": {
    "type": "object",
    "required": [
      "name",
      "ownerId",
      "region",
      "runCommand",
      "buildConfig"
    ],
    "properties": {
      "name": {
        "type": "string"
      },
      "ownerId": {
        "type": "string"
      },
      "buildConfig": {
        "type": "object",
        "required": [
          "buildCommand",
          "repo",
          "runtime"
        ],
        "properties": {
          "branch": {
            "type": "string",
            "description": "The branch to use for the build, if applicable."
          },
          "buildCommand": {
            "type": "string",
            "description": "The command to run to build the workflow. Required for every runtime except docker, which builds from its Dockerfile."
          },
          "repo": {
            "type": "string",
            "pattern": "\\S",
            "description": "The repository URL to use for the build. Cannot be blank."
          },
          "rootDir": {
            "type": "string",
            "description": "The root directory of the repository to use for the build, if applicable."
          },
          "runtime": {
            "type": "string",
            "enum": [
              "elixir",
              "go",
              "node",
              "python",
              "ruby"
            ],
            "description": "The runtime environment for the workflow (e.g., node, python, etc.)."
          }
        }
      },
      "runCommand": {
        "type": "string",
        "pattern": "\\S",
        "description": "The command to run the workflow. Cannot be blank."
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
      "autoDeployTrigger": {
        "type": "string",
        "enum": [
          "commit",
          "off",
          "checksPass"
        ],
        "default": "commit",
        "description": "Controls autodeploy behavior. \"commit\" deploys when a commit is pushed to the branch. \"checksPass\" waits for CI checks to pass before deploying. \"off\" disables autodeploy."
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
        "createdAt",
        "updatedAt",
        "ownerId",
        "region",
        "runCommand",
        "buildConfig"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "ownerId": {
          "type": "string"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time"
        },
        "updatedAt": {
          "type": "string",
          "format": "date-time"
        },
        "buildConfig": {
          "type": "object",
          "required": [
            "buildCommand",
            "repo",
            "runtime"
          ],
          "properties": {
            "branch": {
              "type": "string",
              "description": "The branch to use for the build, if applicable."
            },
            "buildCommand": {
              "type": "string",
              "description": "The command to run to build the workflow. Required for every runtime except docker, which builds from its Dockerfile."
            },
            "repo": {
              "type": "string",
              "pattern": "\\S",
              "description": "The repository URL to use for the build. Cannot be blank."
            },
            "rootDir": {
              "type": "string",
              "description": "The root directory of the repository to use for the build, if applicable."
            },
            "runtime": {
              "type": "string",
              "enum": [
                "elixir",
                "go",
                "node",
                "python",
                "ruby"
              ],
              "description": "The runtime environment for the workflow (e.g., node, python, etc.).\n\n`elixir` `go` `node` `python` `ruby`"
            }
          }
        },
        "runCommand": {
          "type": "string",
          "description": "Command to run the workflow."
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
        "environmentId": {
          "type": "string"
        },
        "slug": {
          "type": "string"
        },
        "autoDeployTrigger": {
          "type": "string",
          "enum": [
            "commit",
            "off",
            "checksPass"
          ],
          "default": "commit",
          "description": "Controls autodeploy behavior. \"commit\" deploys when a commit is pushed to the branch. \"checksPass\" waits for CI checks to pass before deploying. \"off\" disables autodeploy.\n\n`commit` `off` `checksPass`"
        },
        "defaultVersionId": {
          "type": "string",
          "description": "ID of the workflow version that new task runs use by default. Omitted until a version has been registered."
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default CreateWorkflow
