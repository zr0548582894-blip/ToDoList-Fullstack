import SecretFileWithCursor from './SecretFileWithCursor.js';

const UpdateSecretFilesForService = {
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
          "serviceId": {
            "type": "string",
            "description": "The ID of the service"
          }
        },
        "required": [
          "serviceId"
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
export default UpdateSecretFilesForService
