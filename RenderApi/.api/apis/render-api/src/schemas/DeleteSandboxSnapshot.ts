const DeleteSandboxSnapshot = {
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
          "snapshotId": {
            "description": "The ID of the sandbox snapshot.",
            "type": "string",
            "pattern": "^snp-[0-9a-v]{20}$",
            "examples": [
              "snp-cph1rs3idesc73a2b2mg"
            ]
          }
        },
        "required": [
          "sandboxGroupId",
          "snapshotId"
        ]
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "ownerId": {
            "type": "string",
            "description": "The ID of the workspace the sandbox group belongs to."
          }
        }
      }
    ]
  }
} as const;
export default DeleteSandboxSnapshot
