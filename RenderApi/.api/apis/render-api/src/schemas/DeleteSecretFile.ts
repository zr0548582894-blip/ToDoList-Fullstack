const DeleteSecretFile = {
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
            "description": "The file name of the secret file"
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
export default DeleteSecretFile
