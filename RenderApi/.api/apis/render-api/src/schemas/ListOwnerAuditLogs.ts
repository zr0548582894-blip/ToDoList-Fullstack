import AuditLogWithCursor from './AuditLogWithCursor.js';

const ListOwnerAuditLogs = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "string",
            "description": "The ID of the workspace to return resources for"
          }
        },
        "required": [
          "ownerId"
        ]
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "startTime": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2023-01-01T00:00:00Z"
            ],
            "description": "Start time for filtering audit logs (ISO 8601 format)"
          },
          "endTime": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2023-12-31T23:59:59Z"
            ],
            "description": "End time for filtering audit logs (ISO 8601 format)"
          },
          "direction": {
            "default": "backward",
            "type": "string",
            "enum": [
              "forward",
              "backward"
            ],
            "description": "The direction to query logs for. Backward will return most recent logs first.\nForward will start with the oldest logs in the time range.\n"
          },
          "cursor": {
            "type": "string",
            "description": "The position in the result list to start from when fetching paginated results. For details, see [Pagination](https://api-docs.render.com/reference/pagination)."
          },
          "limit": {
            "type": "integer",
            "default": 20,
            "minimum": 1,
            "maximum": 1000,
            "description": "The maximum number of audit log items to return. For details, see [Pagination](https://api-docs.render.com/reference/pagination)."
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "items": AuditLogWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListOwnerAuditLogs
