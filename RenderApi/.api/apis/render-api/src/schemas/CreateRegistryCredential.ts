import RegistryCredentialRegistry from './RegistryCredentialRegistry.js';

const CreateRegistryCredential = {
  "body": {
    "type": "object",
    "required": [
      "name",
      "registry",
      "username",
      "authToken",
      "ownerId"
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
      },
      "ownerId": {
        "type": "string"
      }
    },
    "$schema": "http://json-schema.org/draft-04/schema#"
  }
} as const;
export default CreateRegistryCredential
