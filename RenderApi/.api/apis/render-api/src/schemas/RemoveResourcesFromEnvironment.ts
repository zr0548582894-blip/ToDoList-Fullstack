const RemoveResourcesFromEnvironment = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "environmentId": {
            "type": "string"
          }
        },
        "required": [
          "environmentId"
        ]
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "resourceIds": {
            "type": "array",
            "items": {
              "type": "string",
              "description": "The ID of an env group, a service, a Postgres database, or a Redis instance"
            }
          }
        },
        "required": [
          "resourceIds"
        ]
      }
    ]
  }
} as const;
export default RemoveResourcesFromEnvironment
