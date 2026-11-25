import Route from './Route.js';

const PatchRoute = {
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
  },
  "response": {
    "200": {
      "type": "object",
      "properties": {
        "headers": Route
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default PatchRoute
