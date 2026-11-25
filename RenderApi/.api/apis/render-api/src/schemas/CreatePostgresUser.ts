const CreatePostgresUser = {
  "body": {
    "type": "object",
    "required": [
      "username"
    ],
    "properties": {
      "username": {
        "description": "Name of the new user.",
        "type": "string"
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
export default CreatePostgresUser
