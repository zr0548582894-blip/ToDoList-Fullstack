const CancelDeploy = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "serviceId": {
            "type": "string",
            "description": "The ID of the service"
          },
          "deployId": {
            "type": "string",
            "description": "The ID of the deploy"
          }
        },
        "required": [
          "serviceId",
          "deployId"
        ]
      }
    ]
  }
} as const;
export default CancelDeploy
