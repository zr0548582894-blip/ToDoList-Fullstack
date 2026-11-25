import RouteWithCursor from './RouteWithCursor.js';

const ListRoutes = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "serviceId": {
            "type": "string",
            "description": "The ID of the service"
          }
        },
        "required": [
          "serviceId"
        ]
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "type": {
            "type": "array",
            "items": {
              "type": "string",
              "enum": [
                "redirect",
                "rewrite"
              ]
            },
            "description": "Filter for the type of route rule"
          },
          "source": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter for the source path of the route"
          },
          "destination": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter for the destination path of the route"
          },
          "cursor": {
            "type": "string",
            "description": "The position in the result list to start from when fetching paginated results. For details, see [Pagination](https://api-docs.render.com/reference/pagination)."
          },
          "limit": {
            "type": "integer",
            "default": 20,
            "minimum": 1,
            "maximum": 100,
            "description": "The maximum number of items to return. For details, see [Pagination](https://api-docs.render.com/reference/pagination)."
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "items": RouteWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListRoutes
