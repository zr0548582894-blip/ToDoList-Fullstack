import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import NetworkIsolationEnabled from './NetworkIsolationEnabled.js';
import ProtectedStatus from './ProtectedStatus.js';

const Environment = {
  "type": "object",
  "required": [
    "id",
    "name",
    "projectId",
    "databasesIds",
    "redisIds",
    "serviceIds",
    "envGroupIds",
    "protectedStatus",
    "networkIsolationEnabled"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "projectId": {
      "type": "string"
    },
    "databasesIds": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "ipAllowList": {
      "type": "array",
      "items": CidrBlockAndDescription
    },
    "redisIds": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "serviceIds": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "envGroupIds": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "protectedStatus": ProtectedStatus,
    "networkIsolationEnabled": NetworkIsolationEnabled
  },
  "title": "environment",
  "x-readme-ref-name": "environment",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default Environment
