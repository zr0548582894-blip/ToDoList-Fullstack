import Cursor from './Cursor.js';

const DiskWithCursor = {
  "required": [
    "disk",
    "cursor"
  ],
  "type": "object",
  "properties": {
    "disk": {
      "type": "object",
      "required": [
        "id",
        "name",
        "sizeGB",
        "mountPath",
        "createdAt",
        "updatedAt"
      ],
      "properties": {
        "id": {
          "type": "string",
          "pattern": "^dsk-[0-9a-z]{20}$",
          "examples": [
            "dsk-cph1rs3idesc73a2b2mg"
          ]
        },
        "name": {
          "type": "string"
        },
        "sizeGB": {
          "type": "integer"
        },
        "mountPath": {
          "type": "string"
        },
        "serviceId": {
          "type": "string"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time"
        },
        "updatedAt": {
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "cursor": Cursor
  },
  "title": "diskWithCursor",
  "x-readme-ref-name": "diskWithCursor"
} as const;
export default DiskWithCursor
