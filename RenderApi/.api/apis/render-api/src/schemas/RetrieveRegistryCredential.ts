const RetrieveRegistryCredential = {
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
export default RetrieveRegistryCredential
