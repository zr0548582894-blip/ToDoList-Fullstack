const GetOwnerLogStream = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "string",
            "description": "The ID of the workspace to return log stream information for"
          }
        },
        "required": [
          "ownerId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "description": "Owner log stream settings",
      "properties": {
        "ownerId": {
          "description": "The ID of the owner.",
          "type": "string"
        },
        "endpoint": {
          "description": "The endpoint to stream logs to.",
          "type": "string"
        },
        "preview": {
          "type": "string",
          "description": "Whether to send logs or drop them.\n\n`send` `drop`",
          "enum": [
            "send",
            "drop"
          ]
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetOwnerLogStream
