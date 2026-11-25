const ScaleService = {
  "body": {
    "type": "object",
    "required": [
      "numInstances"
    ],
    "properties": {
      "numInstances": {
        "type": "integer",
        "examples": [
          3
        ]
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
  }
} as const;
export default ScaleService
