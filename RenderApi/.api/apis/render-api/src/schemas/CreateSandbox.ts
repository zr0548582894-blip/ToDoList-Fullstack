const CreateSandbox = {
  "body": {
    "description": "The sandbox to create, including its compute plan, network policy, and optional source build or snapshot.",
    "type": "object",
    "required": [
      "ownerId"
    ],
    "properties": {
      "ownerId": {
        "type": "string",
        "description": "The ID of the workspace the sandbox belongs to.",
        "examples": [
          "tea-cph1rs3idesc73a2b2mg"
        ]
      },
      "sandboxGroupId": {
        "description": "The ID of the sandbox group to create the sandbox in. Defaults to the workspace's default group.",
        "type": "string",
        "pattern": "^sbg-[0-9a-v]{20}$",
        "examples": [
          "sbg-cph1rs3idesc73a2b2mg"
        ]
      },
      "name": {
        "type": "string",
        "maxLength": 64,
        "description": "A label for the sandbox, such as `my-agent`, up to 64 characters. Names do not have to be unique; use the sandbox ID to identify a specific sandbox. Must not start with `sbx-`.\n"
      },
      "networkPolicy": {
        "type": "object",
        "description": "The outbound traffic policy to apply to the sandbox. Provide `type` or its deprecated alias `default`. If both are provided, they must match.\n",
        "properties": {
          "type": {
            "description": "How Render handles outbound traffic from the sandbox. The `allow-list` policy requires `rules`. Required unless `default` is provided. If `networkPolicy` is omitted, defaults to `allow-all`, or to the source sandbox's policy when creating a sandbox from a snapshot.\n",
            "type": "string",
            "enum": [
              "allow-all",
              "deny-all",
              "allow-list"
            ],
            "examples": [
              "deny-all"
            ]
          },
          "default": {
            "deprecated": true,
            "description": "A deprecated alias for `type`. Use `type` instead.",
            "type": "string",
            "enum": [
              "allow-all",
              "deny-all",
              "allow-list"
            ]
          },
          "rules": {
            "type": "array",
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
                  "description": "The protocol allowed for this destination. Defaults to `https`. The `allow-list` policy blocks outbound traffic that uses other protocols."
                }
              }
            },
            "maxItems": 100,
            "description": "Destinations the sandbox may reach, required when the policy is `allow-list` and rejected otherwise. Each domain may be listed once.\n"
          }
        }
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
            "description": "The compute plan for the sandbox. The `starter`, `standard`, and `pro` plans are deprecated."
          },
          {
            "type": "string"
          }
        ],
        "x-go-type": "SandboxPlan",
        "description": "The compute plan for the sandbox. See `sandboxPlan` for known values.",
        "examples": [
          "standard"
        ]
      },
      "timeoutSeconds": {
        "type": "integer",
        "description": "The maximum time the sandbox can run continuously, in seconds. The sandbox terminates when this time elapses. If the sandbox is suspended and later resumed, this timeout restarts.\n\nUse 0 to disable the runtime timeout. Positive values must be between 60 and 2592000 (30 days). Defaults to 86400, or to the source sandbox's runtime timeout when creating a sandbox from a snapshot.\n",
        "examples": [
          7200
        ]
      },
      "idleTimeoutSeconds": {
        "type": "integer",
        "minimum": 0,
        "maximum": 86400,
        "description": "The number of seconds of inactivity before Render suspends the sandbox. Use 0 to disable automatic idle suspension. Positive values must be between 300 and 86400. Defaults to 900, or to the source sandbox's idle timeout when creating a sandbox from a snapshot.\n",
        "examples": [
          900
        ]
      },
      "env": {
        "type": "object",
        "additionalProperties": {
          "type": "string"
        },
        "description": "The environment variables to set when creating the sandbox."
      },
      "snapshotId": {
        "description": "The ID of the snapshot to create the sandbox from instead of the base image. The snapshot must be `available` and belong to the same sandbox group. For a `runtime` snapshot, `plan` must match the snapshot's plan. The new sandbox inherits the source sandbox's network policy, timeout, and idle timeout. Provide `networkPolicy`, `timeoutSeconds`, or `idleTimeoutSeconds` to override these settings.\n",
        "type": "string",
        "pattern": "^snp-[0-9a-v]{20}$",
        "examples": [
          "snp-cph1rs3idesc73a2b2mg"
        ]
      },
      "snapshotName": {
        "description": "The name of the snapshot to create the sandbox from. Uses the most recently created snapshot with this name in the sandbox group that is `available` and unexpired. Cannot be combined with `snapshotId`. The same restore requirements as `snapshotId` apply.\n",
        "type": "string",
        "minLength": 1,
        "maxLength": 64,
        "examples": [
          "gold"
        ]
      },
      "buildId": {
        "description": "The ID of the build to create the sandbox from instead of the base image. The build must have succeeded and belong to the same sandbox group. Cannot be combined with `buildName`, `snapshotId`, or `snapshotName`.\n",
        "type": "string",
        "pattern": "^sbb-[0-9a-v]{20}$",
        "examples": [
          "sbb-cph1rs3idesc73a2b2mg"
        ]
      },
      "buildName": {
        "type": "string",
        "minLength": 1,
        "maxLength": 255,
        "description": "The name of the build to create the sandbox from instead of the base image. Uses the newest successful build with this name in the sandbox group. Cannot be combined with `buildId`, `snapshotId`, or `snapshotName`.\n"
      }
    },
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "response": {
    "201": {
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
export default CreateSandbox
