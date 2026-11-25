import ServiceEventWithCursor from './ServiceEventWithCursor.js';

const ListEvents = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "serviceId": {
            "type": "string",
            "description": "The ID of the service"
          }
        },
        "required": [
          "serviceId"
        ]
      },
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "type": {
            "anyOf": [
              {
                "type": "string",
                "enum": [
                  "artifact_fetch_failed",
                  "artifact_source_changed",
                  "autoscaling_config_changed",
                  "autoscaling_ended",
                  "autoscaling_started",
                  "branch_deleted",
                  "build_ended",
                  "build_started",
                  "commit_ignored",
                  "cron_job_run_ended",
                  "cron_job_run_started",
                  "deploy_ended",
                  "deploy_started",
                  "disk_created",
                  "disk_updated",
                  "disk_deleted",
                  "disk_snapshot_restored",
                  "service_disk_usage_high",
                  "service_disk_usage_recovered",
                  "image_pull_failed",
                  "initial_deploy_hook_ended",
                  "initial_deploy_hook_started",
                  "instance_count_changed",
                  "job_run_ended",
                  "maintenance_mode_enabled",
                  "maintenance_mode_uri_updated",
                  "maintenance_ended",
                  "maintenance_started",
                  "pipeline_minutes_exhausted",
                  "plan_changed",
                  "pre_deploy_ended",
                  "pre_deploy_started",
                  "server_available",
                  "server_failed",
                  "server_hardware_failure",
                  "server_restarted",
                  "service_resumed",
                  "service_suspended",
                  "suspender_added",
                  "suspender_removed",
                  "zero_downtime_redeploy_ended",
                  "zero_downtime_redeploy_started",
                  "auto_deploy_disabled",
                  "auto_deploy_enabled"
                ]
              }
            ],
            "description": "The type of event to filter to"
          },
          "startTime": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:15:30Z"
            ],
            "description": "Epoch/Unix timestamp of start of time range to return. Defaults to `now() - 1 hour`."
          },
          "endTime": {
            "type": "string",
            "format": "date-time",
            "examples": [
              "2021-06-17T08:30:30Z"
            ],
            "description": "Epoch/Unix timestamp of end of time range to return. Defaults to `now()`."
          },
          "cursor": {
            "type": "string",
            "description": "The position in the result list to start from when fetching paginated results. For details, see [Pagination](https://api-docs.render.com/reference/pagination)."
          },
          "limit": {
            "type": "integer",
            "default": 20,
            "minimum": 1,
            "maximum": 100,
            "description": "The maximum number of items to return. For details, see [Pagination](https://api-docs.render.com/reference/pagination)."
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "items": ServiceEventWithCursor,
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default ListEvents
