const UpdateBuildSourceEnvVar = {
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
            "description": "The name of the environment variable"
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
export default UpdateBuildSourceEnvVar
