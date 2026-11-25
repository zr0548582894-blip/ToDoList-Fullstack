import Cursor from './Cursor.js';

const WorkflowVersionWithCursor = {
  "type": "object",
  "required": [
    "workflowVersion",
    "cursor"
  ],
  "properties": {
    "workflowVersion": {
      "type": "object",
      "required": [
        "id",
        "workflowId",
        "name",
        "createdAt",
        "status"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "workflowId": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time"
        },
        "status": {
          "type": "string",
          "enum": [
            "created",
            "building",
            "registering",
            "build_failed",
            "registration_failed",
            "ready"
          ],
          "description": "`created` `building` `registering` `build_failed` `registration_failed` `ready`"
        }
      }
    },
    "cursor": Cursor
  },
  "title": "workflowVersionWithCursor",
  "x-readme-ref-name": "workflowVersionWithCursor"
} as const;
export default WorkflowVersionWithCursor
