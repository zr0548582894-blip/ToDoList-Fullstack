const RegistryCredentialSummary = {
  "type": "object",
  "required": [
    "id",
    "name"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    }
  },
  "title": "registryCredentialSummary",
  "x-readme-ref-name": "registryCredentialSummary"
} as const;
export default RegistryCredentialSummary
