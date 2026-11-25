import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import NetworkIsolationEnabled from './NetworkIsolationEnabled.js';
import ProtectedStatus from './ProtectedStatus.js';

const EnvironmentPatchInput = {
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "networkIsolationEnabled": NetworkIsolationEnabled,
    "protectedStatus": ProtectedStatus,
    "ipAllowList": {
      "type": "array",
      "items": CidrBlockAndDescription
    }
  },
  "title": "environmentPATCHInput",
  "x-readme-ref-name": "environmentPATCHInput",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default EnvironmentPatchInput
