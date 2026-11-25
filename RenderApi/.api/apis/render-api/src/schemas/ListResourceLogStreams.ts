const ListResourceLogStreams = {
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
          "logStreamId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter log streams by their id."
          },
          "resourceId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "IDs of resources (server, cron job, postgres, or redis) to filter by"
          },
          "setting": {
            "type": "array",
            "items": {
              "type": "string",
              "description": "Whether to send logs or drop them.",
              "enum": [
                "send",
                "drop"
              ]
            },
            "description": "Filter log streams by their setting."
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
      "items": {
        "type": "object",
        "description": "Resource log stream overrides",
        "properties": {
          "resourceId": {
            "description": "The ID of the resource.",
            "type": "string"
          },
          "endpoint": {
            "description": "The endpoint to stream logs to. Must be present if setting is send. Cannot be present if setting is drop.",
            "type": "string"
          },
          "setting": {
            "type": "string",
            "description": "Whether to send logs or drop them.\n\n`send` `drop`",
            "enum": [
              "send",
              "drop"
            ]
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListResourceLogStreams
