const DeleteEnvVar = {
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
          "envVarKey": {
            "type": "string",
            "description": "The name of the environment variable"
          }
        },
        "required": [
          "serviceId",
          "envVarKey"
        ]
      }
    ]
  }
} as const;
export default DeleteEnvVar
