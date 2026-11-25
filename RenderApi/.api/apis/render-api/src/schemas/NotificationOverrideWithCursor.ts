import Cursor from './Cursor.js';

const NotificationOverrideWithCursor = {
  "required": [
    "override",
    "cursor"
  ],
  "type": "object",
  "properties": {
    "override": {
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
      }
    },
    "cursor": Cursor
  },
  "title": "notificationOverrideWithCursor",
  "x-readme-ref-name": "notificationOverrideWithCursor"
} as const;
export default NotificationOverrideWithCursor
