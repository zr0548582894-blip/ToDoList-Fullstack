const DedicatedIpStatus = {
  "type": "string",
  "description": "Current status of a dedicated IP set.\n\n`UNKNOWN` `CREATING` `PENDING` `RUNNING` `FAILED` `DELETING` `DELETED`",
  "enum": [
    "UNKNOWN",
    "CREATING",
    "PENDING",
    "RUNNING",
    "FAILED",
    "DELETING",
    "DELETED"
  ],
  "title": "dedicatedIPStatus",
  "x-readme-ref-name": "dedicatedIPStatus"
} as const;
export default DedicatedIpStatus
