const DeleteSandboxBuild = {
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
          "buildId": {
            "description": "The ID of the sandbox build.",
            "type": "string",
            "pattern": "^sbb-[0-9a-v]{20}$",
            "examples": [
              "sbb-cph1rs3idesc73a2b2mg"
            ]
          }
        },
        "required": [
          "sandboxGroupId",
          "buildId"
        ]
      }
    ]
  }
} as const;
export default DeleteSandboxBuild
