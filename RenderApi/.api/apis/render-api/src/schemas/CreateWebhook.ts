const CreateWebhook = {
  "body": {
    "type": "object",
    "required": [
      "ownerId",
      "name",
      "url",
      "enabled",
      "eventFilter"
    ],
    "properties": {
      "ownerId": {
        "type": "string",
        "description": "The ID of the owner (team or personal user) whose resources should be returned"
      },
      "url": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "enabled": {
        "type": "boolean"
      },
      "eventFilter": {
        "type": "array",
        "description": "The event types that will trigger the webhook. An empty list means all event types will trigger the webhook.",
        "items": {
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
          ]
        }
      }
    },
    "$schema": "http://json-schema.org/draft-04/schema#"
  },
  "response": {
    "201": {
      "type": "object",
      "required": [
        "id",
        "name",
        "url",
        "secret",
        "enabled",
        "eventFilter"
      ],
      "properties": {
        "id": {
          "type": "string",
          "pattern": "^whk-[0-9a-z]{20}$",
          "examples": [
            "whk-d04m9b1r0fns73ckp94f"
          ]
        },
        "url": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "secret": {
          "type": "string"
        },
        "enabled": {
          "type": "boolean"
        },
        "eventFilter": {
          "type": "array",
          "description": "The event types that will trigger the webhook. An empty list means all event types will trigger the webhook.",
          "items": {
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
          }
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default CreateWebhook
