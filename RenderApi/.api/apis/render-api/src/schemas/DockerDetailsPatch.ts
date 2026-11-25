const DockerDetailsPatch = {
  "type": "object",
  "properties": {
    "dockerCommand": {
      "type": "string"
    },
    "dockerContext": {
      "type": "string"
    },
    "dockerfilePath": {
      "type": "string"
    },
    "registryCredentialId": {
      "type": "string",
      "description": "Optional reference to the registry credential for this build. Omit the field to leave the stored credential unchanged; send an empty string to clear it."
    }
  },
  "title": "dockerDetailsPATCH",
  "x-readme-ref-name": "dockerDetailsPATCH"
} as const;
export default DockerDetailsPatch
