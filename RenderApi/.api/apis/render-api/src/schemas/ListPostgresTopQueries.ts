const ListPostgresTopQueries = {
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
        "topQueries"
      ],
      "properties": {
        "topQueries": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "queryId": {
                "type": "string"
              },
              "query": {
                "type": "string"
              },
              "calls": {
                "type": "integer"
              },
              "totalTimeMs": {
                "type": "number"
              },
              "minTimeMs": {
                "type": "number"
              },
              "maxTimeMs": {
                "type": "number"
              },
              "meanTimeMs": {
                "type": "number"
              },
              "stddevTimeMs": {
                "type": "number"
              },
              "rows": {
                "type": "integer"
              },
              "sharedBlocksHit": {
                "type": "integer"
              },
              "sharedBlocksRead": {
                "type": "integer"
              },
              "sharedBlocksDirtied": {
                "type": "integer"
              },
              "sharedBlocksWritten": {
                "type": "integer"
              },
              "localBlocksHit": {
                "type": "integer"
              },
              "localBlocksRead": {
                "type": "integer"
              },
              "localBlocksDirtied": {
                "type": "integer"
              },
              "localBlocksWritten": {
                "type": "integer"
              },
              "tempBlocksRead": {
                "type": "integer"
              },
              "tempBlocksWritten": {
                "type": "integer"
              }
            },
            "description": "A single query from pg_stat_statements."
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListPostgresTopQueries
