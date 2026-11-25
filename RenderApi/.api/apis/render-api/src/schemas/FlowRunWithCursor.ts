import Cursor from './Cursor.js';

const FlowRunWithCursor = {
  "type": "object",
  "required": [
    "flowRun",
    "cursor"
  ],
  "properties": {
    "flowRun": {
      "type": "object",
      "required": [
        "id",
        "flowId",
        "status"
      ],
      "properties": {
        "id": {
          "type": "string",
          "examples": [
            "frn-d0hp8fs9c44c73a6f1qg"
          ]
        },
        "flowId": {
          "type": "string",
          "examples": [
            "flw-d0hp8fs9c44c73a6f1qg"
          ]
        },
        "status": {
          "description": "The status of a flow run.\n\n`pending` `running` `succeeded` `failed` `canceled` `paused` `suspended` `sleeping`",
          "type": "string",
          "enum": [
            "pending",
            "running",
            "succeeded",
            "failed",
            "canceled",
            "paused",
            "suspended",
            "sleeping"
          ],
          "x-enum-varnames": [
            "FlowRunStatusPending",
            "FlowRunStatusRunning",
            "FlowRunStatusSucceeded",
            "FlowRunStatusFailed",
            "FlowRunStatusCanceled",
            "FlowRunStatusPaused",
            "FlowRunStatusSuspended",
            "FlowRunStatusSleeping"
          ]
        },
        "startedAt": {
          "type": "string",
          "format": "date-time"
        },
        "completedAt": {
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "cursor": Cursor
  },
  "title": "flowRunWithCursor",
  "x-readme-ref-name": "flowRunWithCursor"
} as const;
export default FlowRunWithCursor
