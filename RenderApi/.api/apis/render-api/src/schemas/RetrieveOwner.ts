const RetrieveOwner = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "string",
            "description": "The ID of the user or team"
          }
        },
        "required": [
          "ownerId"
        ]
      }
    ]
  }
} as const;
export default RetrieveOwner
