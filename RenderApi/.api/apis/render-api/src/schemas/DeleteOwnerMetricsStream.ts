const DeleteOwnerMetricsStream = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "string",
            "description": "The ID of the workspace to return metrics stream information for"
          }
        },
        "required": [
          "ownerId"
        ]
      }
    ]
  }
} as const;
export default DeleteOwnerMetricsStream
