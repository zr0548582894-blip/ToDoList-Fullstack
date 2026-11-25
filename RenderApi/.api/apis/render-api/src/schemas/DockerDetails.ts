import RegistryCredential from './RegistryCredential.js';

const DockerDetails = {
  "type": "object",
  "required": [
    "dockerCommand",
    "dockerContext",
    "dockerfilePath"
  ],
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
    "preDeployCommand": {
      "type": "string"
    },
    "registryCredential": RegistryCredential
  },
  "title": "dockerDetails",
  "x-readme-ref-name": "dockerDetails"
} as const;
export default DockerDetails
