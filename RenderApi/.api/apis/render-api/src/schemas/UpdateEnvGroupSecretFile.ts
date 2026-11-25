const UpdateEnvGroupSecretFile = {
  "body": {
    "type": "object",
    "properties": {
      "content": {
        "type": "string"
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
          "envGroupId": {
            "type": "string"
          },
          "envVarKey": {
            "type": "string"
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
export default UpdateEnvGroupSecretFile
