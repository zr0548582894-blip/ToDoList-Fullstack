import InstanceId from './InstanceId.js';

const DiskSnapshot = {
  "type": "object",
  "properties": {
    "createdAt": {
      "type": "string",
      "format": "date-time"
    },
    "snapshotKey": {
      "type": "string"
    },
    "instanceId": InstanceId
  },
  "title": "diskSnapshot",
  "x-readme-ref-name": "diskSnapshot"
} as const;
export default DiskSnapshot
