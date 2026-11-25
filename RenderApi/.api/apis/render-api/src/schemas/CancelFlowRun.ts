const CancelFlowRun = {
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
  }
} as const;
export default CancelFlowRun
