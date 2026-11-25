const CronJobRun = {
  "type": "object",
  "description": "A run of a cron job",
  "required": [
    "id",
    "status"
  ],
  "properties": {
    "id": {
      "description": "The ID of the run",
      "type": "string"
    },
    "status": {
      "type": "string",
      "enum": [
        "pending",
        "successful",
        "unsuccessful",
        "canceled"
      ],
      "description": "`pending` `successful` `unsuccessful` `canceled`"
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
    },
    "triggeredBy": {
      "type": "string",
      "description": "user who triggered the cron job run"
    },
    "canceledBy": {
      "type": "string",
      "description": "user who canceled the cron job run"
    }
  },
  "title": "cronJobRun",
  "x-readme-ref-name": "cronJobRun",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default CronJobRun
