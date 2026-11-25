const UpdateMaintenance = {
  "body": {
    "type": "object",
    "properties": {
      "scheduledAt": {
        "description": "The date-time at which the maintenance is scheduled to start. This must be before the pendingMaintenanceBy date-time.",
        "type": "string",
        "format": "date-time"
      }
    },
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "maintenanceRunID": {
            "type": "string",
            "pattern": "^mrn-[0-9a-z]{20}$",
            "examples": [
              "mrn-cph1rs3idesc73a2b2mg"
            ]
          }
        },
        "required": [
          "maintenanceRunID"
        ]
      }
    ]
  }
} as const;
export default UpdateMaintenance
