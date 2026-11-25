const PatchServiceNotificationOverrides = {
  "body": {
    "type": "object",
    "properties": {
      "previewNotificationsEnabled": {
        "type": "string",
        "enum": [
          "default",
          "false",
          "true"
        ]
      },
      "notificationsToSend": {
        "type": "string",
        "enum": [
          "default",
          "none",
          "failure",
          "all"
        ]
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
          "serviceId": {
            "type": "string",
            "description": "The ID of the service"
          }
        },
        "required": [
          "serviceId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "required": [
        "serviceId",
        "previewNotificationsEnabled",
        "notificationsToSend"
      ],
      "properties": {
        "serviceId": {
          "type": "string"
        },
        "previewNotificationsEnabled": {
          "type": "string",
          "enum": [
            "default",
            "false",
            "true"
          ],
          "description": "`default` `false` `true`"
        },
        "notificationsToSend": {
          "type": "string",
          "enum": [
            "default",
            "none",
            "failure",
            "all"
          ],
          "description": "`default` `none` `failure` `all`"
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default PatchServiceNotificationOverrides
