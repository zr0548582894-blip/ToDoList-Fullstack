const DeleteHeader = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "serviceId": {
            "type": "string",
            "description": "The ID of the service"
          },
          "headerId": {
            "type": "string",
            "description": "The id of the header"
          }
        },
        "required": [
          "serviceId",
          "headerId"
        ]
      }
    ]
  }
} as const;
export default DeleteHeader
