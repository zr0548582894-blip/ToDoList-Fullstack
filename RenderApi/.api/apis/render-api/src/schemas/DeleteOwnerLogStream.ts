const DeleteOwnerLogStream = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "string",
            "description": "The ID of the workspace to delete the log stream for"
          }
        },
        "required": [
          "ownerId"
        ]
      }
    ]
  }
} as const;
export default DeleteOwnerLogStream
