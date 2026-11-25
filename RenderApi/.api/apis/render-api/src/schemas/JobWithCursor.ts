import Cursor from './Cursor.js';

const JobWithCursor = {
  "type": "object",
  "required": [
    "job",
    "cursor"
  ],
  "properties": {
    "job": {
      "type": "object",
      "required": [
        "id",
        "serviceId",
        "startCommand",
        "planId",
        "createdAt"
      ],
      "properties": {
        "id": {
          "type": "string",
          "pattern": "^job-[0-9a-z]{20}$",
          "examples": [
            "job-cph1rs3idesc73a2b2mg"
          ]
        },
        "serviceId": {
          "type": "string",
          "examples": [
            "srv-xxxxx"
          ]
        },
        "startCommand": {
          "type": "string",
          "examples": [
            "echo 'hello world'"
          ]
        },
        "planId": {
          "type": "string",
          "examples": [
            "plan-srv-004"
          ]
        },
        "status": {
          "type": "string",
          "enum": [
            "pending",
            "running",
            "succeeded",
            "failed",
            "canceled"
          ],
          "description": "`pending` `running` `succeeded` `failed` `canceled`"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time",
          "examples": [
            "2021-07-15T07:20:05.777035-07:00"
          ]
        },
        "startedAt": {
          "type": "string",
          "format": "date-time",
          "examples": [
            "2021-07-15T07:20:05.777035-07:00"
          ]
        },
        "finishedAt": {
          "type": "string",
          "format": "date-time",
          "examples": [
            "2021-07-15T07:20:05.777035-07:00"
          ]
        }
      }
    },
    "cursor": Cursor
  },
  "title": "jobWithCursor",
  "x-readme-ref-name": "jobWithCursor"
} as const;
export default JobWithCursor
