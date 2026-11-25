const ListSandboxGroupCredentialVersions = {
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
      "type": "array",
      "items": {
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
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListSandboxGroupCredentialVersions
