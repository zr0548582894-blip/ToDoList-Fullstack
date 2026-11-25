const RetrieveOwnerNotificationSettings = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "string",
            "description": "The ID of the workspace to return resources for"
          }
        },
        "required": [
          "ownerId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "required": [
        "ownerId",
        "slackEnabled",
        "emailEnabled",
        "previewNotificationsEnabled",
        "notificationsToSend"
      ],
      "properties": {
        "ownerId": {
          "type": "string"
        },
        "slackEnabled": {
          "type": "boolean"
        },
        "emailEnabled": {
          "type": "boolean"
        },
        "previewNotificationsEnabled": {
          "type": "boolean"
        },
        "notificationsToSend": {
          "type": "string",
          "enum": [
            "none",
            "failure",
            "all"
          ],
          "description": "`none` `failure` `all`"
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default RetrieveOwnerNotificationSettings
