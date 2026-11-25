import HeaderWithCursor from './HeaderWithCursor.js';

const ListHeaders = {
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
          "path": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter for specific paths that headers apply to"
          },
          "name": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter for header names"
          },
          "value": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter for header values"
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
      "items": HeaderWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListHeaders
