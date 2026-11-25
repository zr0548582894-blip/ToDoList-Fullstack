import WebhookEventWithCursor from './WebhookEventWithCursor.js';

const ListWebhookEvents = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "webhookId": {
            "type": "string",
            "pattern": "^whk-[0-9a-z]{20}$",
            "examples": [
              "whk-d04m9b1r0fns73ckp94f"
            ],
            "description": "Unique identifier for the webhook"
          }
        },
        "required": [
          "webhookId"
        ]
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "sentBefore": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:15:30Z"
            ],
            "description": "Filter events sent before this time (specified as an ISO 8601 timestamp)"
          },
          "sentAfter": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-02-17T08:15:30Z"
            ],
            "description": "Filter for resources sent after a certain time (specified as an ISO 8601 timestamp)"
          },
          "limit": {
            "type": "integer",
            "default": 20,
            "minimum": 1,
            "maximum": 100,
            "description": "The maximum number of items to return. For details, see [Pagination](https://api-docs.render.com/reference/pagination)."
          },
          "cursor": {
            "type": "string",
            "description": "The position in the result list to start from when fetching paginated results. For details, see [Pagination](https://api-docs.render.com/reference/pagination)."
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "items": WebhookEventWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListWebhookEvents
