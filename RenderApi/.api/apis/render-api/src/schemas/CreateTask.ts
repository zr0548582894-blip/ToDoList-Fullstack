const CreateTask = {
  "body": {
    "type": "object",
    "required": [
      "task",
      "input"
    ],
    "properties": {
      "task": {
        "type": "string",
        "pattern": "\\S",
        "description": "A task slug in the format workflow-slug/task-name. An optional version can be appended (workflow-slug/task-name:version). If no version is provided, the latest version is used. Cannot be blank.",
        "examples": [
          "my-workflow-slug/my-task, my-workflow-slug/my-task:SHA123"
        ]
      },
      "input": {
        "description": "Input data for a task. Can be either an array (for positional arguments) or an object (for named parameters).",
        "oneOf": [
          {
            "type": "array",
            "items": {},
            "description": "Positional arguments passed to the task function"
          },
          {
            "type": "object",
            "additionalProperties": true,
            "description": "Named parameters passed to the task function as keyword arguments"
          }
        ]
      },
      "idempotencyKey": {
        "type": "string",
        "minLength": 1,
        "maxLength": 255,
        "description": "A client-generated key that makes starting a task run safe to retry. Repeating a request with the same key within 24 hours returns the task run that the first request started instead of starting another one; the repeated request's input is ignored. Keys are scoped to a workflow. Omit the key to always start a new run.",
        "examples": [
          "6b2f1f7a-6a0e-4f6f-9d1a-2b1d0d5f6c11"
        ]
      }
    },
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "response": {
    "202": {
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
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default CreateTask
