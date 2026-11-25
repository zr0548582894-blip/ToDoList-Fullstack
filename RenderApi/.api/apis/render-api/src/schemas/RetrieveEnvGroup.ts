const RetrieveEnvGroup = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "envGroupId": {
            "type": "string",
            "description": "Filter for resources that belong to an environment group"
          }
        },
        "required": [
          "envGroupId"
        ]
      }
    ]
  }
} as const;
export default RetrieveEnvGroup
