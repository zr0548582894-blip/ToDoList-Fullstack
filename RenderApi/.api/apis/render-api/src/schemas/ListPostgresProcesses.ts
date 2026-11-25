const ListPostgresProcesses = {
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
        "processes"
      ],
      "properties": {
        "processes": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "pid": {
                "type": "integer"
              },
              "databaseName": {
                "type": "string"
              },
              "username": {
                "type": "string"
              },
              "applicationName": {
                "type": "string"
              },
              "clientAddr": {
                "type": "string"
              },
              "backendStart": {
                "type": "string",
                "format": "date-time"
              },
              "queryStart": {
                "type": "string",
                "format": "date-time"
              },
              "state": {
                "type": "string"
              },
              "waitEvent": {
                "type": "string"
              },
              "waitEventType": {
                "type": "string"
              },
              "query": {
                "type": "string"
              },
              "duration": {
                "type": "number",
                "description": "Duration of the query, in seconds."
              },
              "isLeader": {
                "type": "boolean",
                "description": "Whether this process is running against the primary instance of a highly available database."
              }
            },
            "description": "A single live process from pg_stat_activity."
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListPostgresProcesses
