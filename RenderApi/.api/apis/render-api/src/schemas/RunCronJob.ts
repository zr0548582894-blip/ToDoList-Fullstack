const RunCronJob = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "cronJobId": {
            "type": "string",
            "description": "The ID of the cron job"
          }
        },
        "required": [
          "cronJobId"
        ]
      }
    ]
  }
} as const;
export default RunCronJob
