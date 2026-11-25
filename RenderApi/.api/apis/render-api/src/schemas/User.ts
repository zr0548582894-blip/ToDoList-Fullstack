const User = {
  "type": "object",
  "required": [
    "id",
    "email",
    "name"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "The authenticated user's ID."
    },
    "email": {
      "type": "string"
    },
    "name": {
      "type": "string"
    }
  },
  "title": "user",
  "x-readme-ref-name": "user",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default User
