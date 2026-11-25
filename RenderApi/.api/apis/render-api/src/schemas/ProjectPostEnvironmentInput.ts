import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import NetworkIsolationEnabled from './NetworkIsolationEnabled.js';
import ProtectedStatus from './ProtectedStatus.js';

const ProjectPostEnvironmentInput = {
  "type": "object",
  "required": [
    "name"
  ],
  "properties": {
    "name": {
      "type": "string"
    },
    "protectedStatus": ProtectedStatus,
    "networkIsolationEnabled": NetworkIsolationEnabled,
    "ipAllowList": {
      "type": "array",
      "items": CidrBlockAndDescription
    }
  },
  "title": "projectPOSTEnvironmentInput",
  "x-readme-ref-name": "projectPOSTEnvironmentInput"
} as const;
export default ProjectPostEnvironmentInput
