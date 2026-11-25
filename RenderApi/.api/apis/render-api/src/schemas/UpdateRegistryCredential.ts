import RegistryCredentialRegistry from './RegistryCredentialRegistry.js';

const UpdateRegistryCredential = {
  "body": {
    "type": "object",
    "required": [
      "name",
      "registry",
      "username",
      "authToken"
    ],
    "properties": {
      "registry": RegistryCredentialRegistry,
      "name": {
        "type": "string"
      },
      "username": {
        "type": "string"
      },
      "authToken": {
        "type": "string"
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
          "registryCredentialId": {
            "type": "string",
            "description": "The ID of the registry credential"
          }
        },
        "required": [
          "registryCredentialId"
        ]
      }
    ]
  }
} as const;
export default UpdateRegistryCredential
