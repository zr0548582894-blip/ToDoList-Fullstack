const DockerDetailsPost = {
  "type": "object",
  "properties": {
    "dockerCommand": {
      "type": "string"
    },
    "dockerContext": {
      "type": "string"
    },
    "dockerfilePath": {
      "type": "string",
      "description": "Defaults to \"./Dockerfile\""
    },
    "registryCredentialId": {
      "type": "string"
    }
  },
  "title": "dockerDetailsPOST",
  "x-readme-ref-name": "dockerDetailsPOST"
} as const;
export default DockerDetailsPost
