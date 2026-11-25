const AddOrUpdateBuildSourceSecretFile = {
  "body": {
    "properties": {
      "content": {
        "type": "string"
      }
    },
    "type": "object",
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
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
export default AddOrUpdateBuildSourceSecretFile
