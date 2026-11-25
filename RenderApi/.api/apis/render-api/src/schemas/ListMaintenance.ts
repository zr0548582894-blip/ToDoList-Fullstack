const ListMaintenance = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "resourceId": {
            "type": "array",
            "items": {
              "type": "string",
              "description": "The Id of a resource that can undergo maintenance (Id of a service, a Postgres instance, or a Redis instance)"
            }
          },
          "ownerId": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "description": "The ID of the workspaces to return resources for"
          },
          "state": {
            "type": "array",
            "items": {
              "type": "string",
              "enum": [
                "scheduled",
                "in_progress",
                "user_fix_required",
                "cancelled",
                "succeeded",
                "failed"
              ]
            }
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "id",
          "type",
          "scheduledAt",
          "state",
          "resourceId"
        ],
        "properties": {
          "id": {
            "type": "string",
            "pattern": "^mrn-[0-9a-z]{20}$",
            "examples": [
              "mrn-cph1rs3idesc73a2b2mg"
            ]
          },
          "type": {
            "type": "string"
          },
          "scheduledAt": {
            "type": "string",
            "format": "date-time"
          },
          "pendingMaintenanceBy": {
            "type": "string",
            "format": "date-time",
            "description": "If present, the maintenance run cannot be scheduled for later than this date-time."
          },
          "state": {
            "type": "string",
            "enum": [
              "scheduled",
              "in_progress",
              "user_fix_required",
              "cancelled",
              "succeeded",
              "failed"
            ],
            "description": "`scheduled` `in_progress` `user_fix_required` `cancelled` `succeeded` `failed`"
          },
          "resourceId": {
            "type": "string",
            "description": "The Id of a resource that can undergo maintenance (Id of a service, a Postgres instance, or a Redis instance)"
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListMaintenance
