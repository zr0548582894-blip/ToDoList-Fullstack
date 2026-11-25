const GetFlowRun = {
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
          }
        },
        "required": [
          "flowRunId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "required": [
        "id",
        "flowId",
        "status",
        "input",
        "results",
        "attempts"
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
        },
        "input": {
          "description": "Input data for a flow. Can be either an array (for positional arguments) or an object (for named parameters).",
          "oneOf": [
            {
              "type": "array",
              "items": {},
              "description": "Positional arguments passed to the flow function"
            },
            {
              "type": "object",
              "additionalProperties": true,
              "description": "Named parameters passed to the flow function as keyword arguments"
            }
          ]
        },
        "results": {
          "type": "array",
          "items": {}
        },
        "error": {
          "type": "string",
          "description": "Error message if the flow run failed."
        },
        "errorDetails": {
          "type": "object",
          "required": [
            "code",
            "message"
          ],
          "properties": {
            "code": {
              "type": "string",
              "enum": [
                "flow_determinism_error",
                "flow_step_limit_exceeded",
                "flow_payload_too_large",
                "flow_history_too_large"
              ],
              "description": "`flow_determinism_error` `flow_step_limit_exceeded` `flow_payload_too_large` `flow_history_too_large`"
            },
            "message": {
              "type": "string"
            },
            "seq": {
              "type": "integer"
            },
            "subKey": {
              "type": "string"
            },
            "flowAttempt": {
              "type": "integer"
            },
            "kind": {
              "type": "string",
              "enum": [
                "input_hash",
                "type",
                "unknown_type"
              ],
              "description": "`input_hash` `type` `unknown_type`"
            },
            "expected": {
              "type": "string"
            },
            "actual": {
              "type": "string"
            },
            "limit": {
              "type": "integer",
              "format": "int64"
            },
            "value": {
              "type": "integer",
              "format": "int64"
            }
          }
        },
        "attempts": {
          "type": "array",
          "description": "The flow run's attempts. A flow run gets a new attempt when it resumes after its process is interrupted; it replays completed steps instead of rerunning them.",
          "items": {
            "type": "object",
            "required": [
              "attempt",
              "status"
            ],
            "properties": {
              "attempt": {
                "type": "integer",
                "description": "The 0-indexed attempt number."
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
              },
              "error": {
                "type": "string",
                "description": "Error message if the attempt failed."
              }
            }
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetFlowRun
