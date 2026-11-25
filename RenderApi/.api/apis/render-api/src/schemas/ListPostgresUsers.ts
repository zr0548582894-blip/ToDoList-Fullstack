const ListPostgresUsers = {
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
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "username": {
            "type": "string"
          },
          "default": {
            "type": "boolean"
          },
          "createdAt": {
            "type": "string"
          },
          "openConnections": {
            "type": "integer"
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListPostgresUsers
