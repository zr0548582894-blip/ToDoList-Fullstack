import ExecutionWithCursor from './ExecutionWithCursor.js';

const ListSandboxExecutions = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "sandboxId": {
            "description": "The ID of the sandbox.",
            "type": "string",
            "pattern": "^sbx-[0-9a-v]{25}$",
            "examples": [
              "sbx-1cd4gcph1rs3idesc73a2b2mg"
            ]
          }
        },
        "required": [
          "sandboxId"
        ]
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "string",
            "description": "The ID of the workspace the sandbox belongs to. If provided, it must match the sandbox's workspace. If omitted, Render determines the workspace from the sandbox ID."
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
      "items": ExecutionWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListSandboxExecutions
