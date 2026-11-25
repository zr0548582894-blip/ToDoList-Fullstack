const StartFlowRun = {
  "body": {
    "type": "object",
    "required": [
      "flow",
      "input"
    ],
    "properties": {
      "flow": {
        "type": "string",
        "pattern": "\\S",
        "description": "A flow slug in the format workflow-slug/flow-name. An optional version can be appended (workflow-slug/flow-name:version). If no version is provided, the latest version is used. Cannot be blank.",
        "examples": [
          "my-workflow-slug/my-flow"
        ]
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
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default StartFlowRun
