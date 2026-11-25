const LinkEnvGroupToBuildSource = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "buildSourceId": {
            "type": "string"
          },
          "envGroupId": {
            "type": "string",
            "description": "Filter for resources that belong to an environment group"
          }
        },
        "required": [
          "buildSourceId",
          "envGroupId"
        ]
      }
    ]
  }
} as const;
export default LinkEnvGroupToBuildSource
