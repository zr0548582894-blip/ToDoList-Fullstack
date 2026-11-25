const ListPostgresTableScans = {
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
        "tableScans"
      ],
      "properties": {
        "tableScans": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "Database": {
                "type": "string"
              },
              "Schema": {
                "type": "string"
              },
              "Table": {
                "type": "string"
              },
              "Scans": {
                "type": "integer"
              }
            },
            "description": "The number of sequential scans performed against a table."
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListPostgresTableScans
