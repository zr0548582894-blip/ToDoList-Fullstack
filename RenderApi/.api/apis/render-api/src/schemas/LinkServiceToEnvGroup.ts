const LinkServiceToEnvGroup = {
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
          "serviceId": {
            "type": "string",
            "description": "The ID of the service"
          }
        },
        "required": [
          "envGroupId",
          "serviceId"
        ]
      }
    ]
  }
} as const;
export default LinkServiceToEnvGroup
