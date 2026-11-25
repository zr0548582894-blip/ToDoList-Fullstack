const TriggerMaintenance = {
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
export default TriggerMaintenance
