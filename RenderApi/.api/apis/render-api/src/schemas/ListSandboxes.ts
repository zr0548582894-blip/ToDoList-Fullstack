import SandboxWithCursor from './SandboxWithCursor.js';

const ListSandboxes = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "string",
            "description": "The ID of the workspace whose sandboxes to return."
          },
          "sandboxGroupId": {
            "description": "Filter for sandboxes in this group. The group must belong to the workspace specified by `ownerId`.",
            "type": "string",
            "pattern": "^sbg-[0-9a-v]{20}$",
            "examples": [
              "sbg-cph1rs3idesc73a2b2mg"
            ]
          },
          "name": {
            "type": "string",
            "description": "Filter for sandboxes with exactly this name. Names are not unique, so multiple sandboxes can match."
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
          },
          "status": {
            "type": "array",
            "items": {
              "description": "The sandbox's current status.",
              "type": "string",
              "enum": [
                "creating",
                "running",
                "suspending",
                "suspended",
                "resuming",
                "errored",
                "terminated"
              ]
            },
            "description": "Filter for sandboxes with the specified statuses. By default, returns all statuses except `terminated`. Include `terminated` explicitly to return terminated sandboxes.\n"
          }
        },
        "required": [
          "ownerId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "items": SandboxWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListSandboxes
