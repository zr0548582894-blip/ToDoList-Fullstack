const DeleteEnvGroup = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "envGroupId": {
            "type": "string"
          }
        },
        "required": [
          "envGroupId"
        ]
      }
    ]
  }
} as const;
export default DeleteEnvGroup
