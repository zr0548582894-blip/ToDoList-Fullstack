import WebhookWithCursor from './WebhookWithCursor.js';

const ListWebhooks = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
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
          },
          "ownerId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The ID of the workspaces to return resources for"
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "items": WebhookWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListWebhooks
