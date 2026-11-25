import Cursor from './Cursor.js';

const BlueprintWithCursor = {
  "type": "object",
  "description": "A Blueprint with a cursor",
  "required": [
    "blueprint",
    "cursor"
  ],
  "properties": {
    "blueprint": {
      "type": "object",
      "required": [
        "id",
        "ownerId",
        "name",
        "status",
        "autoSync",
        "repo",
        "branch",
        "path"
      ],
      "properties": {
        "id": {
          "type": "string",
          "pattern": "^exs-[0-9a-z]{20}$",
          "examples": [
            "exs-cph1rs3idesc73a2b2mg"
          ]
        },
        "ownerId": {
          "type": "string",
          "description": "ID of the workspace that owns this Blueprint."
        },
        "name": {
          "type": "string"
        },
        "status": {
          "type": "string",
          "description": "A Blueprint has status `created` until its first Sync is approved.\n\n`created` `paused` `in_sync` `syncing` `error`",
          "enum": [
            "created",
            "paused",
            "in_sync",
            "syncing",
            "error"
          ]
        },
        "autoSync": {
          "type": "boolean",
          "description": "Configuration value that controls whether or not this blueprint will be re-synced on each git push to the configured branch.\nEven when true, autoSync will not apply when the blueprint has the Created status, which indicates its first sync has not yet been approved.\nOther conditions, such as a locked workspace, can also prevent automatic syncing even when this is true.\n"
        },
        "repo": {
          "type": "string"
        },
        "branch": {
          "type": "string"
        },
        "path": {
          "type": "string",
          "description": "Path to the Blueprint file in the repository",
          "examples": [
            "render.yaml"
          ]
        },
        "lastSync": {
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "cursor": Cursor
  },
  "title": "blueprintWithCursor",
  "x-readme-ref-name": "blueprintWithCursor"
} as const;
export default BlueprintWithCursor
