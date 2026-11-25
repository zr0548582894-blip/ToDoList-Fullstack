const UpdateSandboxGroup = {
  "body": {
    "description": "The sandbox group's concurrency settings to update.",
    "type": "object",
    "required": [
      "concurrencyLimit"
    ],
    "properties": {
      "concurrencyLimit": {
        "type": "integer",
        "minimum": 1,
        "description": "The maximum number of active sandboxes allowed in this group. Must be at least 1. Render caps this value at the workspace's limit and returns the effective limit. Lowering the limit does not stop existing sandboxes.\n",
        "examples": [
          10
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
          "sandboxGroupId": {
            "description": "The ID of the sandbox group.",
            "type": "string",
            "pattern": "^sbg-[0-9a-v]{20}$",
            "examples": [
              "sbg-cph1rs3idesc73a2b2mg"
            ]
          }
        },
        "required": [
          "sandboxGroupId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "description": "A group of sandboxes in a workspace that share a region, concurrency limit, and credentials.",
      "type": "object",
      "required": [
        "id",
        "ownerId",
        "name",
        "region",
        "isDefault",
        "concurrencyLimit",
        "createdAt",
        "updatedAt"
      ],
      "properties": {
        "id": {
          "description": "The ID of the sandbox group.",
          "type": "string",
          "pattern": "^sbg-[0-9a-v]{20}$",
          "examples": [
            "sbg-cph1rs3idesc73a2b2mg"
          ]
        },
        "ownerId": {
          "type": "string",
          "description": "The ID of the workspace this group belongs to.",
          "examples": [
            "tea-cph1rs3idesc73a2b2mg"
          ]
        },
        "name": {
          "type": "string",
          "description": "The sandbox group's name.",
          "examples": [
            "Default"
          ]
        },
        "region": {
          "type": "string",
          "description": "The Render region where the group's sandboxes run.",
          "examples": [
            "oregon"
          ]
        },
        "isDefault": {
          "type": "boolean",
          "description": "Whether this is the workspace's default sandbox group. Create requests that omit `sandboxGroupId` use this group."
        },
        "environmentId": {
          "type": [
            "string",
            "null"
          ],
          "description": "The ID of the environment that contains this group. Null if the group isn't in a project. To move a group, add it to or remove it from an environment with `/environments/{environmentId}/resources`."
        },
        "concurrencyLimit": {
          "type": "integer",
          "minimum": 1,
          "description": "The maximum number of active sandboxes allowed in this group, capped by Render's limit for the workspace."
        },
        "createdAt": {
          "description": "The timestamp when the sandbox group was created, in ISO 8601 format.",
          "type": "string",
          "format": "date-time",
          "examples": [
            "2026-07-02T18:30:00Z"
          ]
        },
        "updatedAt": {
          "description": "The timestamp when the sandbox group was last updated, in ISO 8601 format.",
          "type": "string",
          "format": "date-time",
          "examples": [
            "2026-07-02T18:30:00Z"
          ]
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default UpdateSandboxGroup
