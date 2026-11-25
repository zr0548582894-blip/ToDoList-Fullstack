const RetrieveSandbox = {
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
    "200": {
      "description": "An isolated compute environment for running code, executing commands, and transferring files.",
      "type": "object",
      "required": [
        "id",
        "status",
        "plan",
        "networkPolicy",
        "region",
        "timeoutSeconds",
        "idleTimeoutSeconds",
        "createdAt"
      ],
      "properties": {
        "id": {
          "description": "The ID of the sandbox.",
          "type": "string",
          "pattern": "^sbx-[0-9a-v]{25}$",
          "examples": [
            "sbx-1cd4gcph1rs3idesc73a2b2mg"
          ]
        },
        "name": {
          "type": [
            "string",
            "null"
          ],
          "description": "The label set when the sandbox was created."
        },
        "sandboxGroupId": {
          "description": "The ID of the sandbox group this sandbox belongs to.",
          "type": "string",
          "pattern": "^sbg-[0-9a-v]{20}$",
          "examples": [
            "sbg-cph1rs3idesc73a2b2mg"
          ]
        },
        "status": {
          "description": "The sandbox's current status.\n\n`creating` `running` `suspending` `suspended` `resuming` `errored` `terminated`",
          "type": "string",
          "enum": [
            "creating",
            "running",
            "suspending",
            "suspended",
            "resuming",
            "errored",
            "terminated"
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
          "description": "The sandbox's compute plan. See `sandboxPlan` for known values."
        },
        "networkPolicy": {
          "description": "The policy that controls outbound traffic from the sandbox.",
          "type": "object",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "description": "How Render handles outbound traffic from the sandbox. The `allow-list` policy requires `rules`.\n\n`allow-all` `deny-all` `allow-list`",
              "type": "string",
              "enum": [
                "allow-all",
                "deny-all",
                "allow-list"
              ]
            },
            "default": {
              "deprecated": true,
              "description": "A deprecated alias for `type`, returned with the same value. Read `type` instead.\n\n`allow-all` `deny-all` `allow-list`",
              "type": "string",
              "enum": [
                "allow-all",
                "deny-all",
                "allow-list"
              ]
            },
            "rules": {
              "type": "array",
              "maxItems": 100,
              "description": "Destinations the sandbox may reach, present when `type` is `allow-list` and absent otherwise. Each domain may be listed once.\n",
              "items": {
                "description": "A destination that sandboxes can access when the network policy is `allow-list`.",
                "type": "object",
                "required": [
                  "domain"
                ],
                "properties": {
                  "domain": {
                    "type": "string",
                    "maxLength": 253,
                    "description": "The hostname this rule allows, up to 253 characters. Matching is exact: `foo.local` does not match `api.foo.local`. Use a separate rule or `*.foo.local` for subdomains. A wildcard is allowed only as the leftmost label.\n",
                    "examples": [
                      "*.bar.local"
                    ]
                  },
                  "protocol": {
                    "type": "string",
                    "enum": [
                      "https"
                    ],
                    "default": "https",
                    "description": "The protocol allowed for this destination. Defaults to `https`. The `allow-list` policy blocks outbound traffic that uses other protocols.\n\n`https`"
                  }
                }
              }
            }
          }
        },
        "region": {
          "type": "string",
          "description": "The Render region where the sandbox runs.",
          "examples": [
            "oregon"
          ]
        },
        "timeoutSeconds": {
          "type": "integer",
          "description": "The maximum time the sandbox can run continuously, in seconds. The sandbox terminates when this time elapses. If the sandbox is suspended and later resumed, this timeout restarts. A value of 0 disables the runtime timeout.\n",
          "examples": [
            86400
          ]
        },
        "idleTimeoutSeconds": {
          "type": "integer",
          "description": "The number of seconds of inactivity before Render suspends the sandbox. A value of 0 disables automatic idle suspension.",
          "examples": [
            900
          ]
        },
        "createdAt": {
          "description": "The timestamp when the sandbox was created, in ISO 8601 format.",
          "type": "string",
          "format": "date-time",
          "examples": [
            "2026-04-01T18:30:00Z"
          ]
        },
        "terminatedAt": {
          "type": [
            "string",
            "null"
          ],
          "format": "date-time",
          "description": "The timestamp when the sandbox was terminated, in ISO 8601 format. Null if the sandbox has not been terminated."
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default RetrieveSandbox
