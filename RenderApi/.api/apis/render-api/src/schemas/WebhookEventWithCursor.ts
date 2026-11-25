import Cursor from './Cursor.js';

const WebhookEventWithCursor = {
  "type": "object",
  "required": [
    "webhookEvent",
    "cursor"
  ],
  "properties": {
    "webhookEvent": {
      "type": "object",
      "required": [
        "id",
        "eventId",
        "eventType",
        "sentAt"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "the id of the webhook event"
        },
        "eventId": {
          "type": "string",
          "description": "the id of the event that triggered the webhook"
        },
        "eventType": {
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
            "image_pull_failed",
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
            "zero_downtime_redeploy_ended",
            "zero_downtime_redeploy_started",
            "edge_cache_enabled",
            "edge_cache_disabled",
            "edge_cache_purged",
            "auto_deploy_disabled",
            "auto_deploy_enabled",
            "postgres_available",
            "postgres_backup_completed",
            "postgres_backup_failed",
            "postgres_backup_started",
            "postgres_cluster_leader_changed",
            "postgres_connection_pool_changed",
            "postgres_connection_pool_enabled_changed",
            "postgres_created",
            "postgres_disk_size_changed",
            "postgres_disk_autoscaling_enabled_changed",
            "postgres_ha_status_changed",
            "postgres_restarted",
            "postgres_unavailable",
            "postgres_upgrade_failed",
            "postgres_upgrade_started",
            "postgres_upgrade_succeeded",
            "postgres_restore_failed",
            "postgres_restore_succeeded",
            "postgres_read_replicas_changed",
            "postgres_pitr_checkpoint_started",
            "postgres_pitr_checkpoint_failed",
            "postgres_pitr_checkpoint_completed",
            "postgres_read_replica_stale",
            "postgres_wal_archive_failed",
            "key_value_available",
            "key_value_config_restart",
            "key_value_unhealthy"
          ],
          "description": "`artifact_fetch_failed` `artifact_source_changed` `autoscaling_config_changed` `autoscaling_ended` `autoscaling_started` `branch_deleted` `build_ended` `build_started` `commit_ignored` `cron_job_run_ended` `cron_job_run_started` `deploy_ended` `deploy_started` `disk_created` `disk_updated` `disk_deleted` `disk_snapshot_restored` `image_pull_failed` `instance_count_changed` `job_run_ended` `maintenance_mode_enabled` `maintenance_mode_uri_updated` `maintenance_ended` `maintenance_started` `pipeline_minutes_exhausted` `plan_changed` `pre_deploy_ended` `pre_deploy_started` `server_available` `server_failed` `server_hardware_failure` `server_restarted` `service_resumed` `service_suspended` `zero_downtime_redeploy_ended` `zero_downtime_redeploy_started` `edge_cache_enabled` `edge_cache_disabled` `edge_cache_purged` `auto_deploy_disabled` `auto_deploy_enabled` `postgres_available` `postgres_backup_completed` `postgres_backup_failed` `postgres_backup_started` `postgres_cluster_leader_changed` `postgres_connection_pool_changed` `postgres_connection_pool_enabled_changed` `postgres_created` `postgres_disk_size_changed` `postgres_disk_autoscaling_enabled_changed` `postgres_ha_status_changed` `postgres_restarted` `postgres_unavailable` `postgres_upgrade_failed` `postgres_upgrade_started` `postgres_upgrade_succeeded` `postgres_restore_failed` `postgres_restore_succeeded` `postgres_read_replicas_changed` `postgres_pitr_checkpoint_started` `postgres_pitr_checkpoint_failed` `postgres_pitr_checkpoint_completed` `postgres_read_replica_stale` `postgres_wal_archive_failed` `key_value_available` `key_value_config_restart` `key_value_unhealthy`"
        },
        "sentAt": {
          "type": "string",
          "format": "date-time"
        },
        "statusCode": {
          "type": "integer"
        },
        "responseBody": {
          "type": "string"
        },
        "error": {
          "type": "string",
          "description": "error is populated when an error occurs without a response such as a timeout"
        }
      }
    },
    "cursor": Cursor
  },
  "title": "webhookEventWithCursor",
  "x-readme-ref-name": "webhookEventWithCursor"
} as const;
export default WebhookEventWithCursor
