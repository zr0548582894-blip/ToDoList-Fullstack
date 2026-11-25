import TaskRunWithCursor from './TaskRunWithCursor.js';

const ListTaskRuns = {
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
          "taskSlug": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "examples": [
              "my-workflow-slug/my-task",
              "my-workflow-slug/my-task:SHA123"
            ],
            "description": "An array of task slugs in the format workflow-slug/task-name. An optional version can be appended (workflow-slug/task-name:version). If no version is provided, the latest version is used."
          },
          "rootTaskRunId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "An array of root task run IDs to filter on"
          },
          "ownerId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The ID of the workspaces to return resources for"
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
      "items": TaskRunWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListTaskRuns
