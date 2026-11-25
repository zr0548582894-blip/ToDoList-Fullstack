import WorkflowWithCursor from './WorkflowWithCursor.js';

const ListWorkflows = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "name": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter by name"
          },
          "ownerId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The ID of the workspaces to return resources for"
          },
          "workflowID": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The IDs of the workflows to return resources for"
          },
          "environmentId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter for resources that belong to an environment"
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
      "items": WorkflowWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListWorkflows
