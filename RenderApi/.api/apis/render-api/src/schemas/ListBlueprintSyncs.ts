import SyncWithCursor from './SyncWithCursor.js';

const ListBlueprintSyncs = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "blueprintId": {
            "type": "string",
            "pattern": "^exs-[0-9a-z]{20}$",
            "examples": [
              "exs-cph1rs3idesc73a2b2mg"
            ],
            "description": "The ID of the Blueprint"
          }
        },
        "required": [
          "blueprintId"
        ]
      },
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
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "items": SyncWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListBlueprintSyncs
