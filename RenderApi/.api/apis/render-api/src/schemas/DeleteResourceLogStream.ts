const DeleteResourceLogStream = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "resourceId": {
            "type": "string",
            "description": "The ID of the resource (server, cron job, postgres, or redis) whose log streams should be returned"
          }
        },
        "required": [
          "resourceId"
        ]
      }
    ]
  }
} as const;
export default DeleteResourceLogStream
