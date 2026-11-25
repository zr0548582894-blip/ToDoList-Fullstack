import RegistryCredentialRegistry from './RegistryCredentialRegistry.js';

const RegistryCredential = {
  "type": "object",
  "required": [
    "id",
    "name",
    "username",
    "registry",
    "updatedAt"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Unique identifier for this credential"
    },
    "name": {
      "type": "string",
      "description": "Descriptive name for this credential"
    },
    "registry": RegistryCredentialRegistry,
    "username": {
      "type": "string",
      "description": "The username associated with the credential"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time",
      "description": "Last updated time for the credential"
    }
  },
  "title": "registryCredential",
  "x-readme-ref-name": "registryCredential"
} as const;
export default RegistryCredential
