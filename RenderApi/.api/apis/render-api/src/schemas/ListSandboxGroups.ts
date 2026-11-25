import SandboxGroupWithCursor from './SandboxGroupWithCursor.js';

const ListSandboxGroups = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "string",
            "description": "The ID of the workspace whose sandbox groups to return."
          },
          "cursor": {
            "type": "string",
            "description": "The position in the result list to start from when fetching paginated results. For details, see [Pagination](https://api-docs.render.com/reference/pagination)."
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "maximum": 100,
            "description": "The maximum number of sandbox groups to return, between 1 and 100. Defaults to 20."
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
      "items": SandboxGroupWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListSandboxGroups
