const CancelTaskRun = {
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
  }
} as const;
export default CancelTaskRun
