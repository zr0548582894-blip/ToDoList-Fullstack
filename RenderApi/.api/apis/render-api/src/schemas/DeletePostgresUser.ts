const DeletePostgresUser = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "postgresId": {
            "type": "string"
          },
          "username": {
            "type": "string"
          }
        },
        "required": [
          "postgresId",
          "username"
        ]
      }
    ]
  }
} as const;
export default DeletePostgresUser
