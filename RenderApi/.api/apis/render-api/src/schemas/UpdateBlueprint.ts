const UpdateBlueprint = {
  "body": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "autoSync": {
        "type": "boolean",
        "description": "Configuration value that controls whether or not this blueprint will be re-synced on each git push to the configured branch.\nEven when true, autoSync will not apply when the blueprint has the Created status, which indicates its first sync has not yet been approved.\nOther conditions, such as a locked workspace, can also prevent automatic syncing even when this is true.\n"
      },
      "path": {
        "type": "string",
        "description": "Path to the Blueprint file in the repository",
        "examples": [
          "render.yaml"
        ]
      },
      "branch": {
        "type": "string",
        "minLength": 1,
        "description": "The Git branch to read the Blueprint file from. Requires Blueprint onboarding early access.\nThe branch must contain a Blueprint file at the configured path.\nUpdating this field does not plan a sync.\n"
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
          "blueprintId": {
            "type": "string",
            "pattern": "^exs-[0-9a-z]{20}$",
            "examples": [
              "exs-cph1rs3idesc73a2b2mg"
            ],
            "description": "The ID of the Blueprint"
          }
        },
        "required": [
          "blueprintId"
        ]
      }
    ]
  },
  "response": {
    "200": {
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
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default UpdateBlueprint
