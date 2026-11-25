import SecretFileWithCursor from './SecretFileWithCursor.js';

const UpdateSecretFilesForBuildSource = {
  "body": {
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
      "items": SecretFileWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default UpdateSecretFilesForBuildSource
