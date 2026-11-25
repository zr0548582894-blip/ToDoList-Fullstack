const DeleteWebhook = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "webhookId": {
            "type": "string",
            "pattern": "^whk-[0-9a-z]{20}$",
            "examples": [
              "whk-d04m9b1r0fns73ckp94f"
            ],
            "description": "Unique identifier for the webhook"
          }
        },
        "required": [
          "webhookId"
        ]
      }
    ]
  }
} as const;
export default DeleteWebhook
