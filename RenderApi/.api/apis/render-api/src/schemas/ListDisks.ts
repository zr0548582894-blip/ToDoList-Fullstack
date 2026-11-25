import DiskWithCursor from './DiskWithCursor.js';

const ListDisks = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The ID of the workspaces to return resources for"
          },
          "diskId": {
            "type": "array",
            "items": {
              "type": "string",
              "pattern": "^dsk-[0-9a-z]{20}$",
              "examples": [
                "dsk-cph1rs3idesc73a2b2mg"
              ]
            },
            "description": "Filter by disk IDs"
          },
          "name": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter by name"
          },
          "createdBefore": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:15:30Z"
            ],
            "description": "Filter for resources created before a certain time (specified as an ISO 8601 timestamp)"
          },
          "createdAfter": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-02-17T08:15:30Z"
            ],
            "description": "Filter for resources created after a certain time (specified as an ISO 8601 timestamp)"
          },
          "updatedBefore": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:15:30Z"
            ],
            "description": "Filter for resources updated before a certain time (specified as an ISO 8601 timestamp)"
          },
          "updatedAfter": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:15:30Z"
            ],
            "description": "Filter for resources updated after a certain time (specified as an ISO 8601 timestamp)"
          },
          "serviceId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter for resources by service ID"
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
      "items": DiskWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListDisks
