const GetResourceLogStream = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "resourceId": {
            "type": "string",
            "description": "The ID of the resource (server, cron job, postgres, or redis) to return log stream override information for"
          }
        },
        "required": [
          "resourceId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "description": "Resource log stream overrides",
      "properties": {
        "resourceId": {
          "description": "The ID of the resource.",
          "type": "string"
        },
        "endpoint": {
          "description": "The endpoint to stream logs to. Must be present if setting is send. Cannot be present if setting is drop.",
          "type": "string"
        },
        "setting": {
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
export default GetResourceLogStream
