const RegistryCredentialRegistry = {
  "type": "string",
  "enum": [
    "GITHUB",
    "GITLAB",
    "DOCKER",
    "GOOGLE_ARTIFACT",
    "AWS_ECR"
  ],
  "description": "The registry to use this credential with",
  "title": "registryCredentialRegistry",
  "x-readme-ref-name": "registryCredentialRegistry"
} as const;
export default RegistryCredentialRegistry
