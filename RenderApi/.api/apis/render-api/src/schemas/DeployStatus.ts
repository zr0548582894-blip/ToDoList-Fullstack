const DeployStatus = {
  "type": "string",
  "enum": [
    "created",
    "queued",
    "build_in_progress",
    "update_in_progress",
    "live",
    "deactivated",
    "build_failed",
    "update_failed",
    "canceled",
    "pre_deploy_in_progress",
    "pre_deploy_failed"
  ],
  "title": "deployStatus",
  "x-readme-ref-name": "deployStatus"
} as const;
export default DeployStatus
