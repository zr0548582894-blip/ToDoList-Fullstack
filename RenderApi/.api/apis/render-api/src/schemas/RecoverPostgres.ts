const RecoverPostgres = {
  "body": {
    "type": "object",
    "properties": {
      "restoreName": {
        "description": "Name of the new database.",
        "type": "string"
      },
      "restoreTime": {
        "type": "string",
        "format": "date-time",
        "description": "The point in time to restore the database to. See `/recovery-info` for restore availability"
      },
      "datadogApiKey": {
        "type": "string",
        "description": "Datadog API key to use for monitoring the new database. Defaults to the API key of the original database. Use an empty string to prevent copying of the API key to the new database."
      },
      "datadogSite": {
        "type": "string",
        "description": "Datadog region code to use for monitoring the new database. Defaults to the region code of the original database. Use an empty string to prevent copying of the region code to the new database."
      },
      "plan": {
        "type": "string",
        "description": "The plan to use for the new database. Defaults to the same plan as the original database. Cannot be a lower tier plan than the original database."
      },
      "environmentId": {
        "type": "string",
        "description": "The environment to create the new database in. Defaults to the environment of the original database."
      }
    },
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "postgresId": {
            "type": "string"
          }
        },
        "required": [
          "postgresId"
        ]
      }
    ]
  }
} as const;
export default RecoverPostgres
