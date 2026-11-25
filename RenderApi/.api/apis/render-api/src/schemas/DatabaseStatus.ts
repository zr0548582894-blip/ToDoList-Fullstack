const DatabaseStatus = {
  "type": "string",
  "enum": [
    "creating",
    "available",
    "unavailable",
    "config_restart",
    "suspended",
    "maintenance_scheduled",
    "maintenance_in_progress",
    "recovery_failed",
    "recovery_in_progress",
    "unknown",
    "updating_instance"
  ],
  "title": "databaseStatus",
  "x-readme-ref-name": "databaseStatus",
  "description": "`creating` `available` `unavailable` `config_restart` `suspended` `maintenance_scheduled` `maintenance_in_progress` `recovery_failed` `recovery_in_progress` `unknown` `updating_instance`"
} as const;
export default DatabaseStatus
