import JobWithCursor from './JobWithCursor.js';

const ListJob = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "serviceId": {
            "type": "string",
            "description": "The ID of the service"
          }
        },
        "required": [
          "serviceId"
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
          },
          "status": {
            "type": "array",
            "items": {
              "type": "string",
              "enum": [
                "pending",
                "running",
                "succeeded",
                "failed",
                "canceled"
              ]
            },
            "description": "Filter for the status of the job (`pending`, `running`, `succeeded`, `failed`, or `canceled`)"
          },
          "createdBefore": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:15:30Z"
            ],
            "description": "Filter for jobs created before a certain time (specified as an ISO 8601 timestamp)"
          },
          "createdAfter": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-02-17T08:15:30Z"
            ],
            "description": "Filter for jobs created after a certain time (specified as an ISO 8601 timestamp)"
          },
          "startedBefore": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:15:30Z"
            ],
            "description": "Filter for jobs started before a certain time (specified as an ISO 8601 timestamp)"
          },
          "startedAfter": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-02-17T08:15:30Z"
            ],
            "description": "Filter for jobs started after a certain time (specified as an ISO 8601 timestamp)"
          },
          "finishedBefore": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:15:30Z"
            ],
            "description": "Filter for jobs finished before a certain time (specified as an ISO 8601 timestamp)"
          },
          "finishedAfter": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-02-17T08:15:30Z"
            ],
            "description": "Filter for jobs finished after a certain time (specified as an ISO 8601 timestamp)"
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "items": JobWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListJob
