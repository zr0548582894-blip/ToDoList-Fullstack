const ListFlowRunSteps = {
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
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "cursor": {
            "type": "string",
            "description": "The position in the result list to start from when fetching paginated results. For details, see [Pagination](https://api-docs.render.com/reference/pagination)."
          },
          "limit": {
            "type": "integer",
            "default": 20,
            "minimum": 1,
            "maximum": 100,
            "description": "The maximum number of items to return. For details, see [Pagination](https://api-docs.render.com/reference/pagination)."
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "required": [
        "steps",
        "hasMore"
      ],
      "properties": {
        "steps": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "seq",
              "stepKey",
              "type",
              "status",
              "startedAt"
            ],
            "properties": {
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
              }
            }
          }
        },
        "cursor": {
          "type": "string",
          "description": "Pass as the `cursor` query parameter to fetch the next page. Absent on the last page."
        },
        "hasMore": {
          "type": "boolean",
          "description": "Whether another page of steps follows this one."
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListFlowRunSteps
