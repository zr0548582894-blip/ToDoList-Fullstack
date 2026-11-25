import WorkflowVersionWithCursor from './WorkflowVersionWithCursor.js';

const ListWorkflowVersions = {
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
          "workflowID": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The IDs of the workflows to return resources for"
          },
          "workflowVersionId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The IDs of the workflow versions to return resources for"
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
      "items": WorkflowVersionWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListWorkflowVersions
