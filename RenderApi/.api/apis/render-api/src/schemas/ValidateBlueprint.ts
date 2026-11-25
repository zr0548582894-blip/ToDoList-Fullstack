const ValidateBlueprint = {
  "body": {
    "type": "object",
    "required": [
      "ownerId",
      "file"
    ],
    "properties": {
      "ownerId": {
        "type": "string",
        "description": "The ID of the workspace to validate against. Obtain your workspace ID from its Settings page in the Render Dashboard.",
        "examples": [
          "tea-cjnxpkdhshc73d12t9i0"
        ]
      },
      "file": {
        "type": "string",
        "format": "binary",
        "description": "The render.yaml file to validate, as a binary file."
      }
    },
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "response": {
    "200": {
      "type": "object",
      "required": [
        "valid"
      ],
      "properties": {
        "valid": {
          "type": "boolean",
          "description": "If `true`, the Blueprint validated successfully. If `false`, at least one validation error occurred."
        },
        "errors": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "error"
            ],
            "properties": {
              "path": {
                "type": "string",
                "description": "The path to the field with the error (e.g., `services[0].plan`)"
              },
              "error": {
                "type": "string",
                "description": "The error message"
              },
              "line": {
                "type": "integer",
                "description": "The line number in the YAML file (1-indexed)"
              },
              "column": {
                "type": "integer",
                "description": "The column number in the YAML file (1-indexed)"
              }
            }
          },
          "description": "A list of validation errors. Only present if `valid` is `false`."
        },
        "plan": {
          "description": "A summary of the resources that would be created as part of the Blueprint. Only present if `valid` is `true`.",
          "type": "object",
          "properties": {
            "services": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "The names of services that would be created as part of the Blueprint."
            },
            "databases": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "The names of Render Postgres databases that would be created as part of the Blueprint."
            },
            "keyValue": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "The names of Render Key Value instances that would be created as part of the Blueprint."
            },
            "envGroups": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "The names of environment groups that would be created as part of the Blueprint."
            },
            "workflows": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "The names of workflows that would be created as part of the Blueprint."
            },
            "totalActions": {
              "type": "integer",
              "description": "The total number of actions that would be performed by the Blueprint. In addition to created resources, this includes modifications to individual configuration fields."
            }
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ValidateBlueprint
