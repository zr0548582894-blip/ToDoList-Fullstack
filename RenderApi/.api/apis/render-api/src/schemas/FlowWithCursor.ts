import Cursor from './Cursor.js';

const FlowWithCursor = {
  "type": "object",
  "required": [
    "flow",
    "cursor"
  ],
  "properties": {
    "flow": {
      "type": "object",
      "required": [
        "id",
        "name",
        "createdAt"
      ],
      "properties": {
        "id": {
          "type": "string",
          "examples": [
            "flw-d0hp8fs9c44c73a6f1qg"
          ]
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
  "title": "flowWithCursor",
  "x-readme-ref-name": "flowWithCursor"
} as const;
export default FlowWithCursor
