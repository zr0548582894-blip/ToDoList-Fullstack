import InstanceId from './InstanceId.js';

const SnapshotRestorePost = {
  "type": "object",
  "required": [
    "snapshotKey"
  ],
  "properties": {
    "snapshotKey": {
      "type": "string"
    },
    "instanceId": InstanceId
  },
  "title": "snapshotRestorePOST",
  "x-readme-ref-name": "snapshotRestorePOST",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default SnapshotRestorePost
