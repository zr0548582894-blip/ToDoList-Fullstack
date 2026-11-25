const RetrieveEnvironment = {
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
      }
    ]
  }
} as const;
export default RetrieveEnvironment
