const GetWorkflow = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "workflowId": {
            "type": "string",
            "description": "The ID of the workflow"
          }
        },
        "required": [
          "workflowId"
        ]
      }
    ]
  },
  "response": {
    "200": {
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
export default GetWorkflow
