const GetTaskRun = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "taskRunId": {
            "type": "string",
            "description": "The ID of the task run"
          }
        },
        "required": [
          "taskRunId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "required": [
        "id",
        "taskId",
        "status",
        "results",
        "input",
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
        "results": {
          "type": "array",
          "items": {}
        },
        "error": {
          "type": "string",
          "description": "Error message if the task run failed."
        },
        "startedAt": {
          "type": "string",
          "format": "date-time"
        },
        "completedAt": {
          "type": "string",
          "format": "date-time"
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
              },
              "error": {
                "type": "string",
                "description": "Error message if the task attempt failed."
              },
              "results": {
                "type": "array",
                "items": {}
              }
            }
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetTaskRun
