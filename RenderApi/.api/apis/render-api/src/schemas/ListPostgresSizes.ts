const ListPostgresSizes = {
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
        "sizes"
      ],
      "properties": {
        "sizes": {
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
              "Index": {
                "type": "string"
              },
              "Bytes": {
                "type": "integer"
              }
            },
            "description": "The size of an index, table, or database."
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListPostgresSizes
