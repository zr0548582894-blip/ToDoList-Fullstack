const AuditLogActor = {
  "type": "object",
  "required": [
    "type"
  ],
  "properties": {
    "type": {
      "type": "string",
      "description": "The type of actor that performed the action\n\n`user` `rest_api` `system`",
      "enum": [
        "user",
        "rest_api",
        "system"
      ],
      "examples": [
        "user"
      ]
    },
    "email": {
      "type": "string",
      "description": "Email address of the actor (if applicable)",
      "examples": [
        "user@example.com"
      ]
    },
    "id": {
      "type": "string",
      "description": "Unique identifier of the actor (if applicable)",
      "examples": [
        "usr-123456789"
      ]
    }
  },
  "title": "auditLogActor",
  "x-readme-ref-name": "auditLogActor"
} as const;
export default AuditLogActor
