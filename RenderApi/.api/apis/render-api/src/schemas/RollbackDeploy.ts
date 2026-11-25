const RollbackDeploy = {
  "body": {
    "type": "object",
    "required": [
      "deployId"
    ],
    "properties": {
      "deployId": {
        "type": "string",
        "description": "The ID of the deploy to roll back to"
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
export default RollbackDeploy
