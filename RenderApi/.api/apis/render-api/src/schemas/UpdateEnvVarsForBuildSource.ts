import EnvVarWithCursor from './EnvVarWithCursor.js';

const UpdateEnvVarsForBuildSource = {
  "body": {
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
    "200": {
      "type": "array",
      "items": EnvVarWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default UpdateEnvVarsForBuildSource
