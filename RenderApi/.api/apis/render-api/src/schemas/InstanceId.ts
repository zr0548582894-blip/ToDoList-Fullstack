const InstanceId = {
  "description": "When a service with a disk is scaled, the instanceId is used to identify the instance that the disk is attached to. Each instance's disks get their own snapshots, and can be restored separately.",
  "type": "string",
  "title": "instanceId",
  "x-readme-ref-name": "instanceId"
} as const;
export default InstanceId
