import SandboxSnapshotWithCursor from './SandboxSnapshotWithCursor.js';

const ListSandboxSnapshots = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "sandboxGroupId": {
            "description": "The ID of the sandbox group.",
            "type": "string",
            "pattern": "^sbg-[0-9a-v]{20}$",
            "examples": [
              "sbg-cph1rs3idesc73a2b2mg"
            ]
          }
        },
        "required": [
          "sandboxGroupId"
        ]
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "string",
            "description": "The ID of the workspace whose snapshots to return."
          },
          "name": {
            "type": "string",
            "description": "Filter for snapshots with exactly this name. Multiple snapshots can share a name; results include each version, newest first. When creating a sandbox with `snapshotName`, Render uses the most recently created snapshot with that name that is `available` and unexpired.\n"
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
              "description": "The snapshot's current status.",
              "type": "string",
              "enum": [
                "creating",
                "available",
                "failed"
              ]
            },
            "description": "Filter for snapshots with the specified statuses."
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
      "items": SandboxSnapshotWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListSandboxSnapshots
