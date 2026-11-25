import Cursor from './Cursor.js';

const SyncWithCursor = {
  "type": "object",
  "description": "A Blueprint sync with a cursor",
  "required": [
    "sync",
    "cursor"
  ],
  "properties": {
    "sync": {
      "type": "object",
      "required": [
        "id",
        "commit",
        "state"
      ],
      "properties": {
        "id": {
          "type": "string",
          "pattern": "^exe-[0-9a-z]{20}$",
          "examples": [
            "exe-cph1rs3idesc73a2b2mg"
          ]
        },
        "commit": {
          "type": "object",
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "type": "string"
            }
          }
        },
        "startedAt": {
          "type": "string",
          "format": "date-time"
        },
        "completedAt": {
          "type": "string",
          "format": "date-time"
        },
        "state": {
          "type": "string",
          "enum": [
            "created",
            "pending",
            "running",
            "error",
            "success"
          ],
          "description": "`created` `pending` `running` `error` `success`"
        }
      }
    },
    "cursor": Cursor
  },
  "title": "syncWithCursor",
  "x-readme-ref-name": "syncWithCursor"
} as const;
export default SyncWithCursor
