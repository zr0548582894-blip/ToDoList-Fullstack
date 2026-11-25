import FlowWithCursor from './FlowWithCursor.js';

const ListFlows = {
  "metadata": {
    "allOf": [
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
          "ownerId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The ID of the workspaces to return resources for"
          },
          "flowSlug": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "examples": [
              "my-workflow-slug/my-flow",
              "my-workflow-slug/my-flow:SHA123"
            ],
            "description": "An array of flow slugs in the format workflow-slug/flow-name. An optional version can be appended (workflow-slug/flow-name:version). If no version is provided, the latest version is used."
          },
          "workflowVersionId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "An array of workflow version IDs"
          },
          "workflowId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "An array of workflow IDs"
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "items": FlowWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListFlows
