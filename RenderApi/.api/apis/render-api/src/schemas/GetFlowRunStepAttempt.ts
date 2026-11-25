const GetFlowRunStepAttempt = {
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
          },
          "attempt": {
            "type": "integer",
            "format": "int64",
            "minimum": 0,
            "maximum": 4294967295
          }
        },
        "required": [
          "flowRunId",
          "stepSeq",
          "attempt"
        ]
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "stepKey": {
            "type": "string",
            "description": "The SDK's key for the step, as `stepKey` reports it in the step listing. Steps that share a sequence number are told apart by it. Omit it for a step the SDK recorded without one."
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "required": [
        "attempt",
        "completedAt",
        "error",
        "flowAttempt",
        "startedAt"
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
        },
        "error": {
          "type": "string"
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetFlowRunStepAttempt
