const ConnectSandboxRun = {
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
          },
          "operation": {
            "type": "string",
            "enum": [
              "sync",
              "stream"
            ],
            "description": "The command run operation to authorize. Use `sync` for a buffered response or `stream` for server-sent events."
          }
        },
        "required": [
          "sandboxId",
          "operation"
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
    "201": {
      "type": "object",
      "description": "A short-lived connect token and the URL to use it with. Send the request to `uri` using `method`, with `token` as the bearer token. Include a request body if the operation requires one.\n",
      "required": [
        "executionId",
        "token",
        "uri",
        "method",
        "expiresAt"
      ],
      "properties": {
        "executionId": {
          "type": "string",
          "description": "The ID of the sandbox execution.",
          "examples": [
            "exe-cph1rs3idesc73a2b2mg"
          ]
        },
        "token": {
          "type": "string",
          "description": "A short-lived bearer token that authorizes only the requested operation on this sandbox."
        },
        "uri": {
          "type": "string",
          "format": "uri",
          "description": "The URL to send the authorized command run or file transfer request to.",
          "examples": [
            "https://sbx-abc123.oregon.sandbox.onrender.com/runs/stream"
          ]
        },
        "method": {
          "type": "string",
          "description": "The HTTP method to use when sending the request to `uri`.",
          "examples": [
            "POST"
          ]
        },
        "expiresAt": {
          "type": "string",
          "format": "date-time",
          "description": "The timestamp when the token expires, in ISO 8601 format. Start the authorized operation before this time.",
          "examples": [
            "2026-07-10T12:00:00Z"
          ]
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ConnectSandboxRun
