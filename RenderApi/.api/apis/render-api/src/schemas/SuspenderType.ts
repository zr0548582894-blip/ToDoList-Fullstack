const SuspenderType = {
  "type": "string",
  "enum": [
    "admin",
    "billing",
    "user",
    "parent_service",
    "stuck_crashlooping",
    "hipaa_enablement",
    "unknown"
  ],
  "title": "suspenderType",
  "x-readme-ref-name": "suspenderType",
  "description": "`admin` `billing` `user` `parent_service` `stuck_crashlooping` `hipaa_enablement` `unknown`"
} as const;
export default SuspenderType
