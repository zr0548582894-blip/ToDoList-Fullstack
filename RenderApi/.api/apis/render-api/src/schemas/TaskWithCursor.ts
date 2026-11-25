import Cursor from './Cursor.js';

const TaskWithCursor = {
  "type": "object",
  "required": [
    "task",
    "cursor"
  ],
  "properties": {
    "task": {
      "type": "object",
      "required": [
        "id",
        "name",
        "createdAt"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time"
        },
        "workflowId": {
          "type": "string"
        },
        "workflowVersionId": {
          "type": "string"
        }
      }
    },
    "cursor": Cursor
  },
  "title": "taskWithCursor",
  "x-readme-ref-name": "taskWithCursor"
} as const;
export default TaskWithCursor
