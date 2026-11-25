import SandboxBuildWithCursor from './SandboxBuildWithCursor.js';

const ListSandboxBuilds = {
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
          "name": {
            "type": "string",
            "description": "Filter for builds with exactly this image name."
          },
          "status": {
            "type": "array",
            "items": {
              "description": "The sandbox build's current status.",
              "type": "string",
              "enum": [
                "pending",
                "running",
                "succeeded",
                "failed"
              ]
            },
            "description": "Filter for builds with the specified statuses."
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "items": SandboxBuildWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListSandboxBuilds
