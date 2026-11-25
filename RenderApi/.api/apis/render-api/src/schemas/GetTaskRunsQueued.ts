const GetTaskRunsQueued = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "startTime": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:15:30Z"
            ],
            "description": "Epoch/Unix timestamp of start of time range to return. Defaults to `now() - 1 hour`."
          },
          "endTime": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:30:30Z"
            ],
            "description": "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`."
          },
          "resolutionSeconds": {
            "type": "number",
            "minimum": 30,
            "default": 60,
            "examples": [
              60
            ],
            "description": "The resolution of the returned data"
          },
          "resource": {
            "type": "string",
            "examples": [
              "tsk-xxxxx"
            ],
            "description": "Task ID to query. When multiple task IDs are provided, they are ORed together"
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "description": "A collection of time series",
      "required": [
        "items"
      ],
      "items": {
        "type": "object",
        "description": "A time series data point",
        "required": [
          "labels",
          "values",
          "unit"
        ],
        "properties": {
          "labels": {
            "type": "array",
            "description": "List of labels describing the time series",
            "items": {
              "type": "object",
              "description": "A time series datapoint label",
              "required": [
                "field",
                "value"
              ],
              "properties": {
                "field": {
                  "type": "string",
                  "examples": [
                    "service"
                  ]
                },
                "value": {
                  "type": "string",
                  "examples": [
                    "srv-xxxxx"
                  ]
                }
              }
            }
          },
          "values": {
            "type": "array",
            "description": "The values of the time series",
            "items": {
              "description": "A time series datapoint value",
              "type": "object",
              "required": [
                "timestamp",
                "value"
              ],
              "properties": {
                "timestamp": {
                  "type": "string",
                  "format": "date-time",
                  "examples": [
                    "2021-06-17T08:15:30Z"
                  ]
                },
                "value": {
                  "type": "number",
                  "examples": [
                    1
                  ]
                }
              }
            }
          },
          "unit": {
            "type": "string",
            "examples": [
              "GB"
            ]
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default GetTaskRunsQueued
