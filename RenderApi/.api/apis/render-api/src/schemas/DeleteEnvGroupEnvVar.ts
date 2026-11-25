const DeleteEnvGroupEnvVar = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "envGroupId": {
            "type": "string"
          },
          "envVarKey": {
            "type": "string",
            "description": "The name of the environment variable"
          }
        },
        "required": [
          "envGroupId",
          "envVarKey"
        ]
      }
    ]
  }
} as const;
export default DeleteEnvGroupEnvVar
