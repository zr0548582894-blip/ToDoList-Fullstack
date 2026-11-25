const RetrieveOwnerMembers = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "string",
            "description": "The ID of the team"
          }
        },
        "required": [
          "ownerId"
        ]
      }
    ]
  }
} as const;
export default RetrieveOwnerMembers
