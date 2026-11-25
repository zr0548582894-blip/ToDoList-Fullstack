const UnlinkServiceFromEnvGroup = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "envGroupId": {
            "type": "string"
          },
          "serviceId": {
            "type": "string"
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
export default UnlinkServiceFromEnvGroup
