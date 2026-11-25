const RetrieveSandboxGroupCredential = {
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
          },
          "credentialId": {
            "type": "string",
            "minLength": 1,
            "pattern": "^[A-Za-z0-9._~-]+$",
            "description": "The ID of the credential. Must be unique within this sandbox group.",
            "examples": [
              "my-inference-key"
            ]
          }
        },
        "required": [
          "sandboxGroupId",
          "credentialId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "description": "A credential configured for injection into matching outbound HTTPS requests from sandboxes in one sandbox group. Each credential stores its own secret value. These endpoints do not return secret values, including to admins.\n\nCredential injection supports HTTPS requests on port 443. Avoid overlapping credential configurations for the same hostname. Multiple matching credentials are not combined.\n",
      "required": [
        "id",
        "domain",
        "enabled",
        "methods",
        "paths",
        "injection"
      ],
      "properties": {
        "id": {
          "type": "string",
          "minLength": 1,
          "pattern": "^[A-Za-z0-9._~-]+$",
          "description": "The case-sensitive ID you assign to the credential, unique within its sandbox group. Use only letters, numbers, periods, underscores, tildes, and hyphens. The names `.` and `..` and IDs starting with `rnd-` are reserved.\n",
          "examples": [
            "my-inference-key"
          ]
        },
        "domain": {
          "type": "string",
          "description": "The destination hostname to match for credential injection. Must be a public DNS hostname. Render normalizes it to lowercase and matches it exactly. IP addresses, ports, wildcards, and local or internal hostnames are not supported.\n",
          "examples": [
            "api.render.com"
          ]
        },
        "version": {
          "description": "Metadata for a credential version. These endpoints do not return secret values.",
          "type": "object",
          "required": [
            "id",
            "updatedAt",
            "updatedBy",
            "fingerprint"
          ],
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64",
              "minimum": 1,
              "description": "The ID of the credential version. Each new version receives a higher ID, including versions created by a restore."
            },
            "updatedAt": {
              "description": "The timestamp when this credential version was created, in ISO 8601 format.",
              "type": "string",
              "format": "date-time"
            },
            "updatedBy": {
              "type": "string",
              "description": "The ID of the authenticated identity that created this credential version."
            },
            "fingerprint": {
              "type": "string",
              "pattern": "^[0-9a-f]{64}$",
              "description": "A fingerprint of the routing settings, injection settings, and secret value. Matching fingerprints identify equivalent credential configurations within the same sandbox group. Fingerprints cannot be compared across groups.\n"
            },
            "restoredFromVersionId": {
              "type": "integer",
              "format": "int64",
              "minimum": 1,
              "description": "The ID of the credential version restored to create this version. Omitted for versions created by a create or update request."
            }
          }
        },
        "enabled": {
          "description": "Whether this credential is enabled for injection.",
          "type": "boolean"
        },
        "methods": {
          "type": "array",
          "description": "The HTTP methods to match for credential injection. Supported methods are GET, HEAD, POST, PUT, PATCH, DELETE, and OPTIONS, normalized to uppercase. An empty list matches any method.\n",
          "items": {
            "type": "string"
          }
        },
        "paths": {
          "type": "array",
          "description": "The request path patterns to match for credential injection. Each pattern must match the entire absolute path. Use `*` for one nonempty path segment or `**` for one or more segments. Wildcards must occupy whole segments. For example, `/a/*` matches `/a/b`, and `/a/**` also matches `/a/b/c`. Neither matches `/a`. Patterns do not support query strings, fragments, or escaping. Request query strings do not affect matching. An empty list matches any path.\n",
          "items": {
            "type": "string"
          }
        },
        "injection": {
          "description": "Settings for injecting the secret value into matching outbound HTTPS requests.",
          "type": "object",
          "required": [
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "header",
                "basic",
                "cookie",
                "query"
              ],
              "description": "How Render adds the credential to a matching request. For `basic`, the value after applying `template` must have the form `username:password`. Do not provide `name`.\n\n\n`header` `basic` `cookie` `query`"
            },
            "name": {
              "type": "string",
              "description": "The header, cookie, or query parameter to set. Required for `header`, `cookie`, and `query`. Headers that control routing or connection behavior cannot be used.\n"
            },
            "template": {
              "type": "string",
              "description": "A template containing 1–5 occurrences of `${SECRET}`, such as `Bearer ${SECRET}`. Render replaces each occurrence with the secret value. Omit to use the secret value without a template.\n",
              "examples": [
                "Bearer ${SECRET}"
              ]
            }
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default RetrieveSandboxGroupCredential
