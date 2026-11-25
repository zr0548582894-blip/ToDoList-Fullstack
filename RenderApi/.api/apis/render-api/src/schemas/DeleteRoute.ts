const DeleteRoute = {
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
          "routeId": {
            "type": "string",
            "description": "The id of the route"
          }
        },
        "required": [
          "serviceId",
          "routeId"
        ]
      }
    ]
  }
} as const;
export default DeleteRoute
