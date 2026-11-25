import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import NetworkIsolationEnabled from './NetworkIsolationEnabled.js';
import ProtectedStatus from './ProtectedStatus.js';

const EnvironmentPostInput = {
  "type": "object",
  "required": [
    "name",
    "projectId"
  ],
  "properties": {
    "name": {
      "type": "string"
    },
    "projectId": {
      "type": "string"
    },
    "protectedStatus": ProtectedStatus,
    "networkIsolationEnabled": NetworkIsolationEnabled,
    "ipAllowList": {
      "type": "array",
      "items": CidrBlockAndDescription
    }
  },
  "title": "environmentPOSTInput",
  "x-readme-ref-name": "environmentPOSTInput",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default EnvironmentPostInput
