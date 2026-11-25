const StreamTaskRunsEvents = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "taskRunIds": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "examples": [
              "trn-1234",
              "trn-5678"
            ],
            "description": "Filter to a subset of task run IDs."
          }
        },
        "required": [
          "taskRunIds"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "string",
      "description": "Stream of SSE frames. Each event may include `id`, `event`, `data`,\nand optional `retry`. Frames are separated by a blank line.\n",
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default StreamTaskRunsEvents
