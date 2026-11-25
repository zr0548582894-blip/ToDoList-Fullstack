const EnvGroupPostInput = {
  "type": "object",
  "required": [
    "name",
    "ownerId",
    "envVars"
  ],
  "properties": {
    "name": {
      "type": "string"
    },
    "ownerId": {
      "type": "string"
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
      }
    },
    "serviceIds": {
      "type": "array",
      "items": {
        "description": "List of serviceIds to link the envGroup to",
        "type": "string"
      }
    },
    "environmentId": {
      "type": "string"
    }
  },
  "title": "envGroupPOSTInput",
  "x-readme-ref-name": "envGroupPOSTInput",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default EnvGroupPostInput
