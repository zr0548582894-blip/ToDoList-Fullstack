const DeleteSandboxGroupCredential = {
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
  }
} as const;
export default DeleteSandboxGroupCredential
