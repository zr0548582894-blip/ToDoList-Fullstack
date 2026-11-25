const SubscribeLogs = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "string",
            "description": "The ID of the workspace to return logs for"
          },
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
          "direction": {
            "default": "backward",
            "type": "string",
            "enum": [
              "forward",
              "backward"
            ],
            "description": "The direction to query logs for. Backward will return most recent logs first.\nForward will start with the oldest logs in the time range.\n"
          },
          "resource": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter logs by their resource. A resource is the id of a server, cronjob, job, postgres, redis, workflow, or sandbox group. Required unless `project` is provided."
          },
          "project": {
            "type": "string",
            "description": "The ID of a project to return logs for. The query covers the project's services, cron jobs, Postgres databases, and Key Value instances. Combine with `resource` to narrow the query to specific resources in the project."
          },
          "environment": {
            "type": "string",
            "description": "The ID of an environment in the project to return logs for. Requires `project`."
          },
          "region": {
            "type": "string",
            "description": "The region to return logs for, such as `oregon`. Requires `project`. Required when the project's or environment's resources are in more than one region."
          },
          "instance": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter logs by the instance they were emitted from. An instance is the id of a specific running server."
          },
          "host": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter request logs by their host. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported."
          },
          "statusCode": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter request logs by their status code. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported."
          },
          "method": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter request logs by their requests method. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported."
          },
          "task": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter logs by their task(s)"
          },
          "taskRun": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter logs by their task run id(s)"
          },
          "sandbox": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter logs by sandbox ID."
          },
          "build": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter logs by build ID, such as a service build or a sandbox image build."
          },
          "level": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter logs by their severity level. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported."
          },
          "type": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter logs by their type. Types include `app` for application logs, `request` for request logs, and `build` for build logs. You can find the full set of types available for a query by using the `GET /logs/values` endpoint."
          },
          "text": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter by the text of the logs. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported."
          },
          "path": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "Filter request logs by their path. [Wildcards and regex](https://render.com/docs/logging#wildcards-and-regular-expressions) are supported."
          },
          "limit": {
            "type": "integer",
            "default": 20,
            "minimum": 1,
            "maximum": 100,
            "description": "The maximum number of items to return. For details, see [Pagination](https://api-docs.render.com/reference/pagination)."
          }
        },
        "required": [
          "ownerId"
        ]
      }
    ]
  },
  "response": {
    "101": {
      "type": "object",
      "description": "A log entry with metadata",
      "required": [
        "id",
        "message",
        "timestamp",
        "labels"
      ],
      "properties": {
        "id": {
          "description": "A unique ID of the log entry",
          "type": "string"
        },
        "message": {
          "description": "The message of the log entry",
          "type": "string"
        },
        "timestamp": {
          "description": "The timestamp of the log entry",
          "type": "string",
          "format": "date-time"
        },
        "labels": {
          "type": "array",
          "items": {
            "type": "object",
            "description": "A log label",
            "required": [
              "name",
              "value"
            ],
            "properties": {
              "name": {
                "description": "The name of the log label\n\n`resource` `instance` `host` `statusCode` `method` `level` `workflowService` `workflowVeresion` `task` `taskRun` `sandbox` `build` `type` `text` `path` `blocked`",
                "type": "string",
                "enum": [
                  "resource",
                  "instance",
                  "host",
                  "statusCode",
                  "method",
                  "level",
                  "workflowService",
                  "workflowVeresion",
                  "task",
                  "taskRun",
                  "sandbox",
                  "build",
                  "type",
                  "text",
                  "path",
                  "blocked"
                ]
              },
              "value": {
                "description": "The value of the log label",
                "type": "string"
              }
            }
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default SubscribeLogs
