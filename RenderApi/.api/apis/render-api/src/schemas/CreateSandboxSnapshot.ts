const CreateSandboxSnapshot = {
  "body": {
    "description": "The settings for the sandbox snapshot to capture.",
    "type": "object",
    "properties": {
      "kind": {
        "description": "The state to capture in the snapshot. Defaults to `runtime`.",
        "default": "runtime",
        "type": "string",
        "enum": [
          "filesystem",
          "runtime"
        ]
      },
      "name": {
        "type": "string",
        "minLength": 1,
        "maxLength": 64,
        "description": "A case-sensitive name for snapshots in a sandbox group, up to 64 characters. Must not start with `snp-`. Multiple snapshots can share a name. When creating a sandbox by snapshot name, Render uses the most recently created snapshot with that name that is `available` and unexpired.\n",
        "examples": [
          "gold"
        ]
      },
      "ttlSeconds": {
        "type": "integer",
        "minimum": 0,
        "x-go-name": "TTLSeconds",
        "description": "The snapshot's lifetime after its last use, in seconds. Creating a sandbox from this snapshot resets its remaining lifetime to this duration. Use 0 to keep the snapshot until you delete it. Defaults to Render's snapshot lifetime. Cannot be combined with `expiresAt`.\n"
      },
      "expiresAt": {
        "type": "string",
        "format": "date-time",
        "deprecated": true,
        "x-deprecated-reason": "Use ttlSeconds instead.",
        "description": "The expiration timestamp, in ISO 8601 format. Deprecated; use `ttlSeconds` instead. Must be in the future. Render sets the snapshot lifetime to the duration between the request and this timestamp.\n"
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
          "sandboxId": {
            "description": "The ID of the sandbox.",
            "type": "string",
            "pattern": "^sbx-[0-9a-v]{25}$",
            "examples": [
              "sbx-1cd4gcph1rs3idesc73a2b2mg"
            ]
          }
        },
        "required": [
          "sandboxId"
        ]
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "string",
            "description": "The ID of the workspace the sandbox belongs to. If provided, it must match the sandbox's workspace. If omitted, Render determines the workspace from the sandbox ID."
          }
        }
      }
    ]
  },
  "response": {
    "202": {
      "description": "A saved filesystem or runtime state that can be used to create another sandbox.",
      "type": "object",
      "required": [
        "id",
        "sandboxGroupId",
        "sourceSandboxId",
        "kind",
        "status",
        "plan",
        "requestedAt",
        "expiresAt"
      ],
      "properties": {
        "id": {
          "description": "The ID of the sandbox snapshot.",
          "type": "string",
          "pattern": "^snp-[0-9a-v]{20}$",
          "examples": [
            "snp-cph1rs3idesc73a2b2mg"
          ]
        },
        "sandboxGroupId": {
          "description": "The ID of the sandbox group.",
          "type": "string",
          "pattern": "^sbg-[0-9a-v]{20}$",
          "examples": [
            "sbg-cph1rs3idesc73a2b2mg"
          ]
        },
        "sourceSandboxId": {
          "description": "The ID of the sandbox this snapshot was captured from, recorded for reference.",
          "type": "string",
          "pattern": "^sbx-[0-9a-v]{25}$",
          "examples": [
            "sbx-1cd4gcph1rs3idesc73a2b2mg"
          ]
        },
        "name": {
          "description": "The name assigned when the snapshot was created. Cannot be changed. Null if no name was provided.",
          "type": [
            "string",
            "null"
          ],
          "minLength": 1,
          "maxLength": 64,
          "examples": [
            "gold"
          ]
        },
        "kind": {
          "type": "string",
          "enum": [
            "filesystem",
            "runtime"
          ],
          "description": "The state to capture. A `filesystem` snapshot captures the writable filesystem and can be restored to any plan. A `runtime` snapshot also captures memory and CPU state and must be restored to the source sandbox plan.\n\n\n`filesystem` `runtime`"
        },
        "status": {
          "description": "The snapshot's current status.\n\n`creating` `available` `failed`",
          "type": "string",
          "enum": [
            "creating",
            "available",
            "failed"
          ]
        },
        "plan": {
          "anyOf": [
            {
              "type": "string",
              "enum": [
                "starter",
                "standard",
                "pro",
                "1c-2g",
                "2c-4g",
                "4c-8g",
                "8c-16g"
              ],
              "x-enum-varnames": [
                "Starter",
                "Standard",
                "Pro",
                "SandboxPlan1c2g",
                "SandboxPlan2c4g",
                "SandboxPlan4c8g",
                "SandboxPlan8c16g"
              ],
              "description": "The compute plan for the sandbox. The `starter`, `standard`, and `pro` plans are deprecated.\n\n`starter` `standard` `pro` `1c-2g` `2c-4g` `4c-8g` `8c-16g`"
            },
            {
              "type": "string"
            }
          ],
          "x-go-type": "SandboxPlan",
          "description": "The source sandbox's compute plan when the snapshot was captured. See `sandboxPlan` for known values."
        },
        "requestedAt": {
          "description": "The timestamp when the snapshot was requested, in ISO 8601 format.",
          "type": "string",
          "format": "date-time"
        },
        "capturedAt": {
          "type": [
            "string",
            "null"
          ],
          "format": "date-time",
          "description": "The timestamp when capture completed, in ISO 8601 format. Null until the snapshot is `available`."
        },
        "expiresAt": {
          "type": "string",
          "format": "date-time",
          "description": "The timestamp after which the snapshot can no longer be retrieved or restored, in ISO 8601 format. Each time you create a sandbox from this snapshot, Render resets its expiration to `ttlSeconds` seconds after that use. For snapshots with no expiration (`ttlSeconds: 0`), this is `9999-12-31T23:59:59Z`.\n"
        },
        "ttlSeconds": {
          "type": "integer",
          "minimum": 0,
          "x-go-name": "TTLSeconds",
          "description": "The snapshot's lifetime after its last use, in seconds. A value of 0 means the snapshot does not expire. If omitted, Render's default snapshot lifetime applies.\n"
        },
        "sizeBytes": {
          "type": [
            "integer",
            "null"
          ],
          "format": "int64",
          "description": "The size of the snapshot, in bytes. Null until the snapshot is `available`."
        },
        "error": {
          "type": [
            "string",
            "null"
          ],
          "description": "The reason the snapshot failed. Null unless its status is `failed`."
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default CreateSandboxSnapshot
