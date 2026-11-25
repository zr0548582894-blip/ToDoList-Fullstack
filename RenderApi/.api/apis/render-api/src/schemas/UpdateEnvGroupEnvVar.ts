const UpdateEnvGroupEnvVar = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "envGroupId": {
            "type": "string",
            "description": "Filter for resources that belong to an environment group"
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
export default UpdateEnvGroupEnvVar
