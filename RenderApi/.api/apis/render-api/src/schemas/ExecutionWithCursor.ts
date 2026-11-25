import Cursor from './Cursor.js';

const ExecutionWithCursor = {
  "type": "object",
  "description": "A sandbox execution with a cursor for fetching the next page of results.",
  "required": [
    "execution",
    "cursor"
  ],
  "properties": {
    "execution": {
      "type": "object",
      "description": "A record of a command run or file transfer in a sandbox. `startedAt` records when the connect token was created. The command can appear while the execution is running. `stoppedAt` and `exitCode` are omitted until Render receives the result or finalizes the execution when the sandbox stops.\n",
      "required": [
        "id",
        "sandboxId",
        "type",
        "operation",
        "userId",
        "startedAt"
      ],
      "properties": {
        "id": {
          "description": "The ID of the sandbox execution.",
          "type": "string",
          "pattern": "^exe-[0-9a-v]{20}$",
          "examples": [
            "exe-cph1rs3idesc73a2b2mg"
          ]
        },
        "sandboxId": {
          "description": "The ID of the sandbox.",
          "type": "string",
          "pattern": "^sbx-[0-9a-v]{25}$",
          "examples": [
            "sbx-1cd4gcph1rs3idesc73a2b2mg"
          ]
        },
        "type": {
          "description": "Whether the execution is a command run or a file transfer.\n\n`runs` `files`",
          "type": "string",
          "enum": [
            "runs",
            "files"
          ]
        },
        "operation": {
          "description": "The command run or file transfer operation authorized by the connect token.\n\n`sync` `stream` `upload` `download`",
          "type": "string",
          "enum": [
            "sync",
            "stream",
            "upload",
            "download"
          ]
        },
        "command": {
          "type": "string",
          "description": "The command run in the sandbox, or the target path for a file transfer. Command text may be redacted or truncated. Omitted if you do not have permission to view execution commands.\n"
        },
        "userId": {
          "type": "string",
          "description": "The ID of the user the execution token was created for.",
          "examples": [
            "usr-cph1rs3idesc73a2b2mg"
          ]
        },
        "startedAt": {
          "description": "The timestamp when the execution token was created, in ISO 8601 format.",
          "type": "string",
          "format": "date-time",
          "examples": [
            "2026-08-01T10:00:00Z"
          ]
        },
        "stoppedAt": {
          "description": "The timestamp when the execution stopped, in ISO 8601 format. Omitted until a result is available.",
          "type": "string",
          "format": "date-time",
          "examples": [
            "2026-08-01T10:05:00Z"
          ]
        },
        "exitCode": {
          "description": "The execution exit code. Omitted until a result is available.",
          "type": "integer",
          "examples": [
            0
          ]
        }
      }
    },
    "cursor": Cursor
  },
  "title": "executionWithCursor",
  "x-readme-ref-name": "executionWithCursor"
} as const;
export default ExecutionWithCursor
