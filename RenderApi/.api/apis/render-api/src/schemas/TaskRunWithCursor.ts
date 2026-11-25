import Cursor from './Cursor.js';

const TaskRunWithCursor = {
  "type": "object",
  "required": [
    "taskRun",
    "cursor"
  ],
  "properties": {
    "taskRun": {
      "type": "object",
      "required": [
        "id",
        "taskId",
        "status",
        "parentTaskRunId",
        "rootTaskRunId",
        "retries",
        "attempts"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "taskId": {
          "type": "string"
        },
        "status": {
          "type": "string",
          "enum": [
            "pending",
            "running",
            "completed",
            "succeeded",
            "failed",
            "canceled",
            "paused",
            "suspended",
            "sleeping"
          ],
          "description": "`pending` `running` `completed` `succeeded` `failed` `canceled` `paused` `suspended` `sleeping`"
        },
        "startedAt": {
          "type": "string",
          "format": "date-time"
        },
        "completedAt": {
          "type": "string",
          "format": "date-time"
        },
        "parentTaskRunId": {
          "type": "string"
        },
        "parentTaskAttempt": {
          "type": "integer",
          "description": "The 0-indexed attempt of the parent task run that spawned this task run. Omitted for root task runs and for task runs created before this field was introduced."
        },
        "rootTaskRunId": {
          "type": "string"
        },
        "retries": {
          "type": "integer"
        },
        "attempts": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "status",
              "startedAt",
              "attempt"
            ],
            "properties": {
              "taskRunId": {
                "type": "string",
                "description": "The ID of the task run this attempt belongs to."
              },
              "attempt": {
                "type": "integer",
                "description": "The 0-indexed attempt number."
              },
              "status": {
                "type": "string",
                "enum": [
                  "pending",
                  "running",
                  "completed",
                  "succeeded",
                  "failed",
                  "canceled",
                  "paused",
                  "suspended",
                  "sleeping"
                ],
                "description": "`pending` `running` `completed` `succeeded` `failed` `canceled` `paused` `suspended` `sleeping`"
              },
              "enqueuedAt": {
                "type": "string",
                "format": "date-time"
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
          }
        }
      }
    },
    "cursor": Cursor
  },
  "title": "taskRunWithCursor",
  "x-readme-ref-name": "taskRunWithCursor"
} as const;
export default TaskRunWithCursor
