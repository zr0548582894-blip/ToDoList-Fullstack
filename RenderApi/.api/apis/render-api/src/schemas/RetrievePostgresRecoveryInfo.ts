const RetrievePostgresRecoveryInfo = {
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
  },
  "response": {
    "200": {
      "type": "object",
      "required": [
        "recoveryStatus"
      ],
      "properties": {
        "recoveryStatus": {
          "type": "string",
          "description": "Availability of point-in-time recovery.\n\n`AVAILABLE` `BACKUP_NOT_READY` `NOT_AVAILABLE`",
          "enum": [
            "AVAILABLE",
            "BACKUP_NOT_READY",
            "NOT_AVAILABLE"
          ]
        },
        "startsAt": {
          "type": "string",
          "format": "date-time"
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default RetrievePostgresRecoveryInfo
