const RetrieveBuildSourceSecretFile = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "buildSourceId": {
            "type": "string"
          },
          "envVarKey": {
            "type": "string",
            "description": "The file name of the secret file"
          }
        },
        "required": [
          "buildSourceId",
          "envVarKey"
        ]
      }
    ]
  }
} as const;
export default RetrieveBuildSourceSecretFile
