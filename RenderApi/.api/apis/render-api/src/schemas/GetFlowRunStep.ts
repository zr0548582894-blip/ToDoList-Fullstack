const GetFlowRunStep = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "flowRunId": {
            "type": "string",
            "examples": [
              "frn-d0hp8fs9c44c73a6f1qg"
            ],
            "description": "The ID of the flow run"
          },
          "stepSeq": {
            "type": "integer",
            "minimum": 0,
            "description": "The sequence number of the step within its flow run"
          }
        },
        "required": [
          "flowRunId",
          "stepSeq"
        ]
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "stepKey": {
            "type": "string",
            "description": "The SDK's key for the step, as `stepKey` reports it in the step listing. Steps that share a sequence number are told apart by it. Omit it for a step the SDK recorded without one."
          },
          "includeAttempts": {
            "type": "boolean"
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "required": [
        "seq",
        "stepKey",
        "type",
        "status",
        "startedAt"
      ],
      "properties": {
        "failedAttempts": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "attempt",
              "flowAttempt",
              "startedAt",
              "completedAt"
            ],
            "properties": {
              "attempt": {
                "type": "integer",
                "format": "int64",
                "minimum": 0,
                "maximum": 4294967295
              },
              "flowAttempt": {
                "type": "integer",
                "format": "int64",
                "minimum": 0,
                "maximum": 4294967295
              },
              "startedAt": {
                "type": "string",
                "format": "date-time"
              },
              "completedAt": {
                "type": "string",
                "format": "date-time"
              },
              "retryAt": {
                "type": "string",
                "format": "date-time"
              }
            }
          }
        },
        "seq": {
          "type": "integer",
          "minimum": 0,
          "description": "The step's position in the flow run. Steps are numbered densely in the order the flow started them."
        },
        "stepKey": {
          "type": "string",
          "description": "The SDK's key for the step."
        },
        "name": {
          "type": "string",
          "description": "For inline steps, the function's name. For detached steps, the task's registered name. Omitted for sleep steps."
        },
        "type": {
          "type": "string",
          "description": "The kind of step. `inline` runs a function inside the flow's process and retries in place. `detached` runs a registered task as its own task run. `sleep` is a durable sleep.\n\n`inline` `detached` `sleep`",
          "enum": [
            "inline",
            "detached",
            "sleep"
          ],
          "x-enum-varnames": [
            "FlowRunStepTypeInline",
            "FlowRunStepTypeDetached",
            "FlowRunStepTypeSleep"
          ]
        },
        "status": {
          "type": "string",
          "description": "`running` until the step records an outcome, then `succeeded` or `failed`.\n\n`running` `succeeded` `failed`",
          "enum": [
            "running",
            "succeeded",
            "failed"
          ],
          "x-enum-varnames": [
            "FlowRunStepStatusRunning",
            "FlowRunStepStatusSucceeded",
            "FlowRunStepStatusFailed"
          ]
        },
        "startedAt": {
          "type": "string",
          "format": "date-time"
        },
        "completedAt": {
          "type": "string",
          "format": "date-time"
        },
        "wakeAt": {
          "type": "string",
          "format": "date-time",
          "description": "For sleep steps, when the sleep ends."
        },
        "childTaskRunId": {
          "type": "string",
          "description": "For detached steps, the ID of the task run the step started.",
          "examples": [
            "trn-d0hp8fs9c44c73a6f1qg"
          ]
        },
        "input": {
          "description": "The step's input. For detached steps, the input of the child task run."
        },
        "result": {
          "description": "The step's result. Present only when the step succeeded; null when the step returned no value.",
          "nullable": true,
          "x-go-type": "json.RawMessage"
        },
        "error": {
          "type": "string",
          "description": "Error message if the step failed."
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetFlowRunStep
