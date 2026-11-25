import PostgresWithCursor from './PostgresWithCursor.js';
import Region from './Region.js';

const ListPostgres = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "name": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter by name"
          },
          "region": {
            "type": "array",
            "items": Region,
            "description": "Filter by resource region"
          },
          "suspended": {
            "type": "array",
            "items": {
              "type": "string",
              "enum": [
                "suspended",
                "not_suspended"
              ]
            },
            "description": "Filter resources based on whether they're suspended or not suspended"
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
          "ownerId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The ID of the workspaces to return resources for"
          },
          "environmentId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter for resources that belong to an environment"
          },
          "includeReplicas": {
            "type": "boolean",
            "default": true,
            "description": "Include replicas in the response"
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
      "items": PostgresWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListPostgres
