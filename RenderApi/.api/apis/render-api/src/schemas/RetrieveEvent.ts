const RetrieveEvent = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "eventId": {
            "type": "string",
            "pattern": "^evt-[0-9a-z]{20}$",
            "examples": [
              "evt-cph1rs3idesc73a2b2mg"
            ],
            "description": "The ID of the event"
          }
        },
        "required": [
          "eventId"
        ]
      }
    ]
  },
  "response": {
    "200": {
      "type": "object",
      "required": [
        "id",
        "timestamp",
        "serviceId",
        "type",
        "details"
      ],
      "properties": {
        "id": {
          "type": "string",
          "pattern": "^evt-[0-9a-z]{20}$",
          "examples": [
            "evt-cph1rs3idesc73a2b2mg"
          ]
        },
        "timestamp": {
          "type": "string",
          "format": "date-time"
        },
        "serviceId": {
          "type": "string"
        },
        "type": {
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
        "details": {
          "oneOf": [
            {
              "title": "Service Event Details",
              "oneOf": [
                {
                  "title": "Artifact Fetch Failed",
                  "type": "object",
                  "required": [
                    "buildId",
                    "message"
                  ],
                  "properties": {
                    "buildId": {
                      "type": "string",
                      "description": "The build published by the build source that could not be fetched."
                    },
                    "message": {
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Artifact Source Changed",
                  "type": "object",
                  "properties": {
                    "fromBuildSourceId": {
                      "type": "string",
                      "description": "The previously linked build source. Absent when the service was newly attached."
                    },
                    "toBuildSourceId": {
                      "type": "string",
                      "description": "The newly linked build source. Absent when the service was detached."
                    }
                  }
                },
                {
                  "title": "Autoscaling Config Changed",
                  "type": "object",
                  "required": [
                    "toConfig"
                  ],
                  "properties": {
                    "fromConfig": {
                      "type": "object",
                      "required": [
                        "enabled",
                        "min",
                        "max",
                        "criteria"
                      ],
                      "properties": {
                        "enabled": {
                          "type": "boolean",
                          "default": false
                        },
                        "min": {
                          "type": "integer",
                          "description": "The minimum number of instances for the service"
                        },
                        "max": {
                          "type": "integer",
                          "description": "The maximum number of instances for the service"
                        },
                        "criteria": {
                          "type": "object",
                          "required": [
                            "cpu",
                            "memory"
                          ],
                          "properties": {
                            "cpu": {
                              "type": "object",
                              "required": [
                                "enabled",
                                "percentage"
                              ],
                              "properties": {
                                "enabled": {
                                  "type": "boolean",
                                  "default": false
                                },
                                "percentage": {
                                  "type": "integer",
                                  "description": "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n"
                                }
                              }
                            },
                            "memory": {
                              "type": "object",
                              "required": [
                                "enabled",
                                "percentage"
                              ],
                              "properties": {
                                "enabled": {
                                  "type": "boolean",
                                  "default": false
                                },
                                "percentage": {
                                  "type": "integer",
                                  "description": "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n"
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "toConfig": {
                      "type": "object",
                      "required": [
                        "enabled",
                        "min",
                        "max",
                        "criteria"
                      ],
                      "properties": {
                        "enabled": {
                          "type": "boolean",
                          "default": false
                        },
                        "min": {
                          "type": "integer",
                          "description": "The minimum number of instances for the service"
                        },
                        "max": {
                          "type": "integer",
                          "description": "The maximum number of instances for the service"
                        },
                        "criteria": {
                          "type": "object",
                          "required": [
                            "cpu",
                            "memory"
                          ],
                          "properties": {
                            "cpu": {
                              "type": "object",
                              "required": [
                                "enabled",
                                "percentage"
                              ],
                              "properties": {
                                "enabled": {
                                  "type": "boolean",
                                  "default": false
                                },
                                "percentage": {
                                  "type": "integer",
                                  "description": "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n"
                                }
                              }
                            },
                            "memory": {
                              "type": "object",
                              "required": [
                                "enabled",
                                "percentage"
                              ],
                              "properties": {
                                "enabled": {
                                  "type": "boolean",
                                  "default": false
                                },
                                "percentage": {
                                  "type": "integer",
                                  "description": "Determines when your service will be scaled. If the average resource utilization is significantly above/below the target, we will increase/decrease the number of instances.\n"
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                {
                  "title": "Autoscaling Ended",
                  "type": "object",
                  "required": [
                    "fromInstances",
                    "toInstances"
                  ],
                  "properties": {
                    "fromInstances": {
                      "type": "integer"
                    },
                    "toInstances": {
                      "type": "integer"
                    }
                  }
                },
                {
                  "title": "Autoscaling Started",
                  "type": "object",
                  "required": [
                    "fromInstances",
                    "toInstances"
                  ],
                  "properties": {
                    "fromInstances": {
                      "type": "integer"
                    },
                    "toInstances": {
                      "type": "integer"
                    },
                    "currentCPU": {
                      "type": "integer",
                      "x-go-type": "int64"
                    },
                    "targetCPU": {
                      "type": "integer",
                      "x-go-type": "int64"
                    },
                    "currentMemory": {
                      "type": "integer",
                      "x-go-type": "int64"
                    },
                    "targetMemory": {
                      "type": "integer",
                      "x-go-type": "int64"
                    }
                  }
                },
                {
                  "title": "Branch Deleted",
                  "type": "object",
                  "required": [
                    "deletedBranch",
                    "newBranch"
                  ],
                  "properties": {
                    "deletedBranch": {
                      "type": "string"
                    },
                    "newBranch": {
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Build Ended",
                  "type": "object",
                  "required": [
                    "buildId",
                    "status",
                    "reason",
                    "buildStatus"
                  ],
                  "properties": {
                    "buildId": {
                      "type": "string"
                    },
                    "buildStatus": {
                      "type": "string",
                      "enum": [
                        "succeeded",
                        "failed",
                        "canceled"
                      ],
                      "description": "`succeeded` `failed` `canceled`"
                    },
                    "reason": {
                      "type": "object",
                      "properties": {
                        "buildFailed": {
                          "type": "object",
                          "required": [
                            "id"
                          ],
                          "properties": {
                            "id": {
                              "type": "string"
                            }
                          }
                        },
                        "newBuild": {
                          "type": "object",
                          "required": [
                            "id"
                          ],
                          "properties": {
                            "id": {
                              "type": "string"
                            }
                          }
                        },
                        "newDeploy": {
                          "type": "object",
                          "required": [
                            "id"
                          ],
                          "properties": {
                            "id": {
                              "type": "string"
                            }
                          }
                        },
                        "failure": {
                          "type": "object",
                          "required": [
                            "evicted"
                          ],
                          "properties": {
                            "evicted": {
                              "type": "boolean"
                            },
                            "evictionReason": {
                              "type": "string",
                              "description": "Details about why the application was evicted."
                            },
                            "nonZeroExit": {
                              "type": "integer",
                              "description": "If present, the application exited with the specified non-zero status."
                            },
                            "earlyExit": {
                              "type": "boolean",
                              "description": "If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render."
                            },
                            "oomKilled": {
                              "type": "object",
                              "required": [
                                "memoryLimit"
                              ],
                              "properties": {
                                "memoryLimit": {
                                  "type": "string"
                                }
                              }
                            },
                            "timedOutSeconds": {
                              "type": "integer",
                              "format": "int64"
                            },
                            "unhealthy": {
                              "type": "string"
                            },
                            "timedOutReason": {
                              "type": "string"
                            }
                          }
                        }
                      }
                    },
                    "status": {
                      "deprecated": true,
                      "type": "integer"
                    }
                  }
                },
                {
                  "title": "Build Started",
                  "type": "object",
                  "required": [
                    "buildId",
                    "trigger"
                  ],
                  "properties": {
                    "buildId": {
                      "type": "string"
                    },
                    "trigger": {
                      "type": "object",
                      "required": [
                        "firstBuild",
                        "envUpdated",
                        "manual",
                        "deployedByRender",
                        "clearCache",
                        "rollback"
                      ],
                      "properties": {
                        "firstBuild": {
                          "description": "Deploy was triggered by service creation",
                          "type": "boolean"
                        },
                        "envUpdated": {
                          "description": "Deploy was triggered by an environment update",
                          "type": "boolean"
                        },
                        "manual": {
                          "description": "Deploy was triggered manually from the dashboard",
                          "type": "boolean"
                        },
                        "user": {
                          "type": "object",
                          "description": "User who triggered the action",
                          "required": [
                            "id",
                            "email"
                          ],
                          "properties": {
                            "id": {
                              "type": "string"
                            },
                            "email": {
                              "type": "string"
                            }
                          }
                        },
                        "updatedProperty": {
                          "description": "Updated property that triggered the deploy",
                          "type": "string"
                        },
                        "newCommit": {
                          "description": "Commit that triggered the deploy",
                          "type": "string"
                        },
                        "deployedByRender": {
                          "description": "Deploy was triggered by Render",
                          "type": "boolean"
                        },
                        "clearCache": {
                          "description": "Whether the cache was cleared for the deploy",
                          "type": "boolean"
                        },
                        "rollback": {
                          "description": "Whether the deploy was triggered by a rollback",
                          "type": "boolean"
                        },
                        "rollbackTargetDeployId": {
                          "description": "Deploy ID that was rolled back to",
                          "type": "string"
                        }
                      }
                    }
                  }
                },
                {
                  "title": "Commit Ignored",
                  "type": "object",
                  "required": [
                    "id",
                    "url"
                  ],
                  "properties": {
                    "id": {
                      "description": "the commit id",
                      "type": "string"
                    },
                    "url": {
                      "description": "the commit url",
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Cron Job Run Ended",
                  "type": "object",
                  "required": [
                    "cronJobRunId",
                    "status"
                  ],
                  "properties": {
                    "cronJobRunId": {
                      "type": "string"
                    },
                    "status": {
                      "type": "string",
                      "enum": [
                        "canceled",
                        "pending",
                        "successful",
                        "unsuccessful"
                      ],
                      "description": "`canceled` `pending` `successful` `unsuccessful`"
                    },
                    "reason": {
                      "type": "object",
                      "required": [
                        "evicted"
                      ],
                      "properties": {
                        "evicted": {
                          "type": "boolean"
                        },
                        "evictionReason": {
                          "type": "string",
                          "description": "Details about why the application was evicted."
                        },
                        "nonZeroExit": {
                          "type": "integer",
                          "description": "If present, the application exited with the specified non-zero status."
                        },
                        "earlyExit": {
                          "type": "boolean",
                          "description": "If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render."
                        },
                        "oomKilled": {
                          "type": "object",
                          "required": [
                            "memoryLimit"
                          ],
                          "properties": {
                            "memoryLimit": {
                              "type": "string"
                            }
                          }
                        },
                        "timedOutSeconds": {
                          "type": "integer",
                          "format": "int64"
                        },
                        "unhealthy": {
                          "type": "string"
                        },
                        "timedOutReason": {
                          "type": "string"
                        }
                      }
                    },
                    "user": {
                      "type": "object",
                      "description": "User who triggered the action",
                      "required": [
                        "id",
                        "email"
                      ],
                      "properties": {
                        "id": {
                          "type": "string"
                        },
                        "email": {
                          "type": "string"
                        }
                      }
                    }
                  }
                },
                {
                  "title": "Cron Job Run Started",
                  "type": "object",
                  "required": [
                    "cronJobRunId"
                  ],
                  "properties": {
                    "cronJobRunId": {
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Deploy Ended",
                  "type": "object",
                  "required": [
                    "deployId",
                    "reason",
                    "status",
                    "deployStatus"
                  ],
                  "properties": {
                    "deployId": {
                      "type": "string"
                    },
                    "reason": {
                      "type": "object",
                      "properties": {
                        "buildFailed": {
                          "type": "object",
                          "required": [
                            "id"
                          ],
                          "properties": {
                            "id": {
                              "type": "string"
                            }
                          }
                        },
                        "newBuild": {
                          "type": "object",
                          "required": [
                            "id"
                          ],
                          "properties": {
                            "id": {
                              "type": "string"
                            }
                          }
                        },
                        "newDeploy": {
                          "type": "object",
                          "required": [
                            "id"
                          ],
                          "properties": {
                            "id": {
                              "type": "string"
                            }
                          }
                        },
                        "failure": {
                          "type": "object",
                          "required": [
                            "evicted"
                          ],
                          "properties": {
                            "evicted": {
                              "type": "boolean"
                            },
                            "evictionReason": {
                              "type": "string",
                              "description": "Details about why the application was evicted."
                            },
                            "nonZeroExit": {
                              "type": "integer",
                              "description": "If present, the application exited with the specified non-zero status."
                            },
                            "earlyExit": {
                              "type": "boolean",
                              "description": "If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render."
                            },
                            "oomKilled": {
                              "type": "object",
                              "required": [
                                "memoryLimit"
                              ],
                              "properties": {
                                "memoryLimit": {
                                  "type": "string"
                                }
                              }
                            },
                            "timedOutSeconds": {
                              "type": "integer",
                              "format": "int64"
                            },
                            "unhealthy": {
                              "type": "string"
                            },
                            "timedOutReason": {
                              "type": "string"
                            }
                          }
                        }
                      }
                    },
                    "deployStatus": {
                      "type": "string",
                      "enum": [
                        "succeeded",
                        "failed",
                        "canceled"
                      ],
                      "description": "`succeeded` `failed` `canceled`"
                    },
                    "status": {
                      "deprecated": true,
                      "type": "integer"
                    },
                    "buildId": {
                      "type": "string",
                      "description": "Set when the deploy shipped a build published by the service's linked build source."
                    }
                  }
                },
                {
                  "title": "Deploy Started",
                  "type": "object",
                  "required": [
                    "deployId",
                    "trigger"
                  ],
                  "properties": {
                    "deployId": {
                      "type": "string"
                    },
                    "trigger": {
                      "type": "object",
                      "required": [
                        "firstBuild",
                        "envUpdated",
                        "manual",
                        "deployedByRender",
                        "clearCache",
                        "rollback"
                      ],
                      "properties": {
                        "firstBuild": {
                          "description": "Deploy was triggered by service creation",
                          "type": "boolean"
                        },
                        "envUpdated": {
                          "description": "Deploy was triggered by an environment update",
                          "type": "boolean"
                        },
                        "manual": {
                          "description": "Deploy was triggered manually from the dashboard",
                          "type": "boolean"
                        },
                        "user": {
                          "type": "object",
                          "description": "User who triggered the action",
                          "required": [
                            "id",
                            "email"
                          ],
                          "properties": {
                            "id": {
                              "type": "string"
                            },
                            "email": {
                              "type": "string"
                            }
                          }
                        },
                        "updatedProperty": {
                          "description": "Updated property that triggered the deploy",
                          "type": "string"
                        },
                        "newCommit": {
                          "description": "Commit that triggered the deploy",
                          "type": "string"
                        },
                        "deployedByRender": {
                          "description": "Deploy was triggered by Render",
                          "type": "boolean"
                        },
                        "clearCache": {
                          "description": "Whether the cache was cleared for the deploy",
                          "type": "boolean"
                        },
                        "rollback": {
                          "description": "Whether the deploy was triggered by a rollback",
                          "type": "boolean"
                        },
                        "rollbackTargetDeployId": {
                          "description": "Deploy ID that was rolled back to",
                          "type": "string"
                        }
                      }
                    },
                    "buildId": {
                      "type": "string",
                      "description": "Set when the deploy ships a build published by the service's linked build source."
                    }
                  }
                },
                {
                  "title": "Disk Created",
                  "type": "object",
                  "required": [
                    "diskId",
                    "sizeGB"
                  ],
                  "properties": {
                    "diskId": {
                      "type": "string",
                      "pattern": "^dsk-[0-9a-z]{20}$",
                      "examples": [
                        "dsk-cph1rs3idesc73a2b2mg"
                      ]
                    },
                    "sizeGB": {
                      "type": "integer"
                    }
                  }
                },
                {
                  "title": "Disk Updated",
                  "type": "object",
                  "required": [
                    "diskId",
                    "fromSizeGB",
                    "toSizeGB"
                  ],
                  "properties": {
                    "diskId": {
                      "type": "string",
                      "pattern": "^dsk-[0-9a-z]{20}$",
                      "examples": [
                        "dsk-cph1rs3idesc73a2b2mg"
                      ]
                    },
                    "fromSizeGB": {
                      "type": "integer"
                    },
                    "toSizeGB": {
                      "type": "integer"
                    }
                  }
                },
                {
                  "title": "Disk Deleted",
                  "type": "object",
                  "required": [
                    "diskId"
                  ],
                  "properties": {
                    "diskId": {
                      "type": "string",
                      "pattern": "^dsk-[0-9a-z]{20}$",
                      "examples": [
                        "dsk-cph1rs3idesc73a2b2mg"
                      ]
                    }
                  }
                },
                {
                  "title": "Disk Snapshot Restored",
                  "type": "object",
                  "required": [
                    "diskId",
                    "triggeredByUser"
                  ],
                  "properties": {
                    "diskId": {
                      "type": "string",
                      "pattern": "^dsk-[0-9a-z]{20}$",
                      "examples": [
                        "dsk-cph1rs3idesc73a2b2mg"
                      ]
                    },
                    "instanceId": {
                      "description": "The instance whose disk was restored, when the restore named one. A service instance ID, or the service ID for an older single disk.",
                      "type": "string"
                    },
                    "snapshotCreatedAt": {
                      "description": "When the restored snapshot was taken",
                      "type": "string",
                      "format": "date-time"
                    },
                    "triggeredByUser": {
                      "type": [
                        "string",
                        "null"
                      ]
                    }
                  }
                },
                {
                  "title": "Service Disk Usage High",
                  "type": "object",
                  "required": [
                    "diskId",
                    "diskName",
                    "mountPath",
                    "usagePercent",
                    "thresholdPercent"
                  ],
                  "properties": {
                    "diskId": {
                      "type": "string",
                      "pattern": "^dsk-[0-9a-z]{20}$",
                      "examples": [
                        "dsk-cph1rs3idesc73a2b2mg"
                      ]
                    },
                    "diskName": {
                      "type": "string"
                    },
                    "mountPath": {
                      "type": "string"
                    },
                    "usagePercent": {
                      "type": "number",
                      "format": "double"
                    },
                    "thresholdPercent": {
                      "type": "number",
                      "format": "double"
                    }
                  }
                },
                {
                  "title": "Service Disk Usage Recovered",
                  "type": "object",
                  "required": [
                    "diskId",
                    "diskName",
                    "mountPath",
                    "usagePercent",
                    "thresholdPercent"
                  ],
                  "properties": {
                    "diskId": {
                      "type": "string",
                      "pattern": "^dsk-[0-9a-z]{20}$",
                      "examples": [
                        "dsk-cph1rs3idesc73a2b2mg"
                      ]
                    },
                    "diskName": {
                      "type": "string"
                    },
                    "mountPath": {
                      "type": "string"
                    },
                    "usagePercent": {
                      "type": "number",
                      "format": "double"
                    },
                    "thresholdPercent": {
                      "type": "number",
                      "format": "double"
                    }
                  }
                },
                {
                  "title": "Image Pull Failed",
                  "type": "object",
                  "required": [
                    "message",
                    "imageURL"
                  ],
                  "properties": {
                    "message": {
                      "type": "string"
                    },
                    "imageURL": {
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Initial Deploy Hook Started",
                  "type": "object",
                  "required": [
                    "deployId"
                  ],
                  "properties": {
                    "deployId": {
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Initial Deploy Hook Ended",
                  "type": "object",
                  "required": [
                    "deployId"
                  ],
                  "properties": {
                    "deployId": {
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Instance Count Changed",
                  "type": "object",
                  "required": [
                    "fromInstances",
                    "toInstances"
                  ],
                  "properties": {
                    "fromInstances": {
                      "type": "integer"
                    },
                    "toInstances": {
                      "type": "integer"
                    }
                  }
                },
                {
                  "title": "Job Run Ended",
                  "type": "object",
                  "required": [
                    "jobId",
                    "status"
                  ],
                  "properties": {
                    "jobId": {
                      "type": "string",
                      "pattern": "^job-[0-9a-z]{20}$",
                      "examples": [
                        "job-cph1rs3idesc73a2b2mg"
                      ]
                    },
                    "status": {
                      "type": "string",
                      "enum": [
                        "pending",
                        "running",
                        "succeeded",
                        "failed",
                        "canceled"
                      ],
                      "description": "`pending` `running` `succeeded` `failed` `canceled`"
                    },
                    "reason": {
                      "type": "object",
                      "required": [
                        "evicted"
                      ],
                      "properties": {
                        "evicted": {
                          "type": "boolean"
                        },
                        "evictionReason": {
                          "type": "string",
                          "description": "Details about why the application was evicted."
                        },
                        "nonZeroExit": {
                          "type": "integer",
                          "description": "If present, the application exited with the specified non-zero status."
                        },
                        "earlyExit": {
                          "type": "boolean",
                          "description": "If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render."
                        },
                        "oomKilled": {
                          "type": "object",
                          "required": [
                            "memoryLimit"
                          ],
                          "properties": {
                            "memoryLimit": {
                              "type": "string"
                            }
                          }
                        },
                        "timedOutSeconds": {
                          "type": "integer",
                          "format": "int64"
                        },
                        "unhealthy": {
                          "type": "string"
                        },
                        "timedOutReason": {
                          "type": "string"
                        }
                      }
                    }
                  }
                },
                {
                  "title": "Maintenance Mode Enabled",
                  "type": "object",
                  "required": [
                    "enabled"
                  ],
                  "properties": {
                    "enabled": {
                      "type": "boolean"
                    }
                  }
                },
                {
                  "title": "Maintenance Mode URI Updated",
                  "type": "object",
                  "required": [
                    "fromURI",
                    "toURI"
                  ],
                  "properties": {
                    "fromURI": {
                      "type": "string"
                    },
                    "toURI": {
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Maintenance Ended",
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "title": "Maintenance Started",
                  "type": "object",
                  "required": [
                    "trigger"
                  ],
                  "properties": {
                    "trigger": {
                      "type": "object",
                      "required": [
                        "manual",
                        "startedByRender"
                      ],
                      "properties": {
                        "user": {
                          "type": "object",
                          "description": "User who triggered the action",
                          "required": [
                            "id",
                            "email"
                          ],
                          "properties": {
                            "id": {
                              "type": "string"
                            },
                            "email": {
                              "type": "string"
                            }
                          }
                        },
                        "manual": {
                          "description": "Maintenance was triggered manually",
                          "type": "boolean"
                        },
                        "startedByRender": {
                          "description": "Maintenance was triggered by Render",
                          "type": "boolean"
                        }
                      }
                    }
                  }
                },
                {
                  "title": "Pipeline Minutes Exhausted",
                  "type": "object",
                  "required": [
                    "buildId",
                    "trigger"
                  ],
                  "properties": {
                    "buildId": {
                      "type": "string"
                    },
                    "trigger": {
                      "type": "object",
                      "required": [
                        "firstBuild",
                        "envUpdated",
                        "manual",
                        "deployedByRender",
                        "clearCache",
                        "rollback"
                      ],
                      "properties": {
                        "firstBuild": {
                          "description": "Deploy was triggered by service creation",
                          "type": "boolean"
                        },
                        "envUpdated": {
                          "description": "Deploy was triggered by an environment update",
                          "type": "boolean"
                        },
                        "manual": {
                          "description": "Deploy was triggered manually from the dashboard",
                          "type": "boolean"
                        },
                        "user": {
                          "type": "object",
                          "description": "User who triggered the action",
                          "required": [
                            "id",
                            "email"
                          ],
                          "properties": {
                            "id": {
                              "type": "string"
                            },
                            "email": {
                              "type": "string"
                            }
                          }
                        },
                        "updatedProperty": {
                          "description": "Updated property that triggered the deploy",
                          "type": "string"
                        },
                        "newCommit": {
                          "description": "Commit that triggered the deploy",
                          "type": "string"
                        },
                        "deployedByRender": {
                          "description": "Deploy was triggered by Render",
                          "type": "boolean"
                        },
                        "clearCache": {
                          "description": "Whether the cache was cleared for the deploy",
                          "type": "boolean"
                        },
                        "rollback": {
                          "description": "Whether the deploy was triggered by a rollback",
                          "type": "boolean"
                        },
                        "rollbackTargetDeployId": {
                          "description": "Deploy ID that was rolled back to",
                          "type": "string"
                        }
                      }
                    }
                  }
                },
                {
                  "title": "Instance Type Changed",
                  "type": "object",
                  "required": [
                    "from",
                    "to"
                  ],
                  "properties": {
                    "from": {
                      "type": "string"
                    },
                    "to": {
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Pre Deploy Ended",
                  "type": "object",
                  "required": [
                    "deployCommandExecutionId",
                    "deployId",
                    "status",
                    "preDeployStatus",
                    "reason"
                  ],
                  "properties": {
                    "deployCommandExecutionId": {
                      "type": "string"
                    },
                    "deployId": {
                      "type": "string"
                    },
                    "preDeployStatus": {
                      "type": "string",
                      "enum": [
                        "succeeded",
                        "failed",
                        "canceled"
                      ],
                      "description": "`succeeded` `failed` `canceled`"
                    },
                    "reason": {
                      "type": "object",
                      "properties": {
                        "buildFailed": {
                          "type": "object",
                          "required": [
                            "id"
                          ],
                          "properties": {
                            "id": {
                              "type": "string"
                            }
                          }
                        },
                        "newBuild": {
                          "type": "object",
                          "required": [
                            "id"
                          ],
                          "properties": {
                            "id": {
                              "type": "string"
                            }
                          }
                        },
                        "newDeploy": {
                          "type": "object",
                          "required": [
                            "id"
                          ],
                          "properties": {
                            "id": {
                              "type": "string"
                            }
                          }
                        },
                        "failure": {
                          "type": "object",
                          "required": [
                            "evicted"
                          ],
                          "properties": {
                            "evicted": {
                              "type": "boolean"
                            },
                            "evictionReason": {
                              "type": "string",
                              "description": "Details about why the application was evicted."
                            },
                            "nonZeroExit": {
                              "type": "integer",
                              "description": "If present, the application exited with the specified non-zero status."
                            },
                            "earlyExit": {
                              "type": "boolean",
                              "description": "If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render."
                            },
                            "oomKilled": {
                              "type": "object",
                              "required": [
                                "memoryLimit"
                              ],
                              "properties": {
                                "memoryLimit": {
                                  "type": "string"
                                }
                              }
                            },
                            "timedOutSeconds": {
                              "type": "integer",
                              "format": "int64"
                            },
                            "unhealthy": {
                              "type": "string"
                            },
                            "timedOutReason": {
                              "type": "string"
                            }
                          }
                        }
                      }
                    },
                    "status": {
                      "deprecated": true,
                      "type": "integer"
                    }
                  }
                },
                {
                  "title": "Pre Deploy Started",
                  "type": "object",
                  "required": [
                    "deployCommandExecutionId",
                    "deployId"
                  ],
                  "properties": {
                    "deployCommandExecutionId": {
                      "type": "string"
                    },
                    "deployId": {
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Server Available",
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "title": "Server Failed",
                  "type": "object",
                  "properties": {
                    "instanceID": {
                      "type": "string",
                      "pattern": "^srv-[0-9a-z]{20}-[0-9a-z]{5}$",
                      "examples": [
                        "srv-d0cjkelq67qs70c2pugg-sbpkm"
                      ]
                    },
                    "reason": {
                      "type": "object",
                      "required": [
                        "evicted"
                      ],
                      "properties": {
                        "evicted": {
                          "type": "boolean"
                        },
                        "evictionReason": {
                          "type": "string",
                          "description": "Details about why the application was evicted."
                        },
                        "nonZeroExit": {
                          "type": "integer",
                          "description": "If present, the application exited with the specified non-zero status."
                        },
                        "earlyExit": {
                          "type": "boolean",
                          "description": "If true, the application exited early. Services besides cron jobs should not exit unless receiving a `SIGTERM` signal from Render."
                        },
                        "oomKilled": {
                          "type": "object",
                          "required": [
                            "memoryLimit"
                          ],
                          "properties": {
                            "memoryLimit": {
                              "type": "string"
                            }
                          }
                        },
                        "timedOutSeconds": {
                          "type": "integer",
                          "format": "int64"
                        },
                        "unhealthy": {
                          "type": "string"
                        },
                        "timedOutReason": {
                          "type": "string"
                        }
                      }
                    }
                  }
                },
                {
                  "title": "Server Hardware Failure",
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "title": "Server Restarted",
                  "type": "object",
                  "required": [
                    "triggeredByUser"
                  ],
                  "properties": {
                    "triggeredByUser": {
                      "type": [
                        "string",
                        "null"
                      ]
                    }
                  }
                },
                {
                  "title": "Service Resumed",
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "title": "Service Suspended",
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "title": "Suspender Added",
                  "type": "object",
                  "required": [
                    "actor"
                  ],
                  "properties": {
                    "actor": {
                      "type": "string"
                    },
                    "suspendedByUser": {
                      "type": "object",
                      "description": "User who triggered the action",
                      "required": [
                        "id",
                        "email"
                      ],
                      "properties": {
                        "id": {
                          "type": "string"
                        },
                        "email": {
                          "type": "string"
                        }
                      }
                    }
                  }
                },
                {
                  "title": "Suspender Removed",
                  "type": "object",
                  "required": [
                    "actor"
                  ],
                  "properties": {
                    "actor": {
                      "type": "string"
                    },
                    "resumedByUser": {
                      "type": "object",
                      "description": "User who triggered the action",
                      "required": [
                        "id",
                        "email"
                      ],
                      "properties": {
                        "id": {
                          "type": "string"
                        },
                        "email": {
                          "type": "string"
                        }
                      }
                    }
                  }
                },
                {
                  "title": "Zero Downtime Redeploy Ended",
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "title": "Zero Downtime Redeploy Started",
                  "type": "object",
                  "required": [
                    "trigger"
                  ],
                  "properties": {
                    "trigger": {
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Edge Cache Disabled",
                  "type": "object",
                  "required": [
                    "trigger"
                  ],
                  "properties": {
                    "trigger": {
                      "type": "object",
                      "required": [
                        "manual",
                        "system"
                      ],
                      "properties": {
                        "manual": {
                          "description": "Edge Cache change was triggered manually from the dashboard",
                          "type": "boolean"
                        },
                        "user": {
                          "type": "object",
                          "description": "User who triggered the action",
                          "required": [
                            "id",
                            "email"
                          ],
                          "properties": {
                            "id": {
                              "type": "string"
                            },
                            "email": {
                              "type": "string"
                            }
                          }
                        },
                        "system": {
                          "description": "Edge Cache Change was triggered by Render",
                          "type": "boolean"
                        }
                      }
                    }
                  }
                },
                {
                  "title": "Edge Cache Enabled",
                  "type": "object",
                  "required": [
                    "trigger"
                  ],
                  "properties": {
                    "trigger": {
                      "type": "object",
                      "required": [
                        "manual",
                        "system"
                      ],
                      "properties": {
                        "manual": {
                          "description": "Edge Cache change was triggered manually from the dashboard",
                          "type": "boolean"
                        },
                        "user": {
                          "type": "object",
                          "description": "User who triggered the action",
                          "required": [
                            "id",
                            "email"
                          ],
                          "properties": {
                            "id": {
                              "type": "string"
                            },
                            "email": {
                              "type": "string"
                            }
                          }
                        },
                        "system": {
                          "description": "Edge Cache Change was triggered by Render",
                          "type": "boolean"
                        }
                      }
                    }
                  }
                },
                {
                  "title": "Edge Cache Purged",
                  "required": [
                    "trigger"
                  ],
                  "properties": {
                    "trigger": {
                      "type": "object",
                      "required": [
                        "manual",
                        "system"
                      ],
                      "properties": {
                        "manual": {
                          "description": "Edge Cache change was triggered manually from the dashboard",
                          "type": "boolean"
                        },
                        "user": {
                          "type": "object",
                          "description": "User who triggered the action",
                          "required": [
                            "id",
                            "email"
                          ],
                          "properties": {
                            "id": {
                              "type": "string"
                            },
                            "email": {
                              "type": "string"
                            }
                          }
                        },
                        "system": {
                          "description": "Edge Cache Change was triggered by Render",
                          "type": "boolean"
                        }
                      }
                    }
                  },
                  "type": "object"
                },
                {
                  "title": "Auto Deploy Disabled",
                  "type": "object",
                  "required": [
                    "reason"
                  ],
                  "properties": {
                    "reason": {
                      "description": "Why auto-deploy was disabled (manual_deploy, rollback, or setting_change)",
                      "type": "string"
                    },
                    "fromTrigger": {
                      "description": "The auto-deploy trigger value immediately before it was disabled\n\n`commit` `off` `checksPass`",
                      "type": "string",
                      "enum": [
                        "commit",
                        "off",
                        "checksPass"
                      ]
                    }
                  }
                },
                {
                  "title": "Auto Deploy Enabled",
                  "type": "object",
                  "properties": {
                    "newTrigger": {
                      "description": "The auto-deploy trigger value after it was re-enabled\n\n`commit` `off` `checksPass`",
                      "type": "string",
                      "enum": [
                        "commit",
                        "off",
                        "checksPass"
                      ]
                    }
                  }
                }
              ]
            },
            {
              "title": "Postgres Event Details",
              "oneOf": [
                {
                  "title": "Postgres Available",
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "title": "Postgres Backup Completed",
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "title": "Postgres Backup Failed",
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "title": "Postgres Backup Started",
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "title": "Postgres Cluster Leader Changed",
                  "type": "object",
                  "properties": {
                    "leaderId": {
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Postgres Connection Pool Changed",
                  "type": "object",
                  "required": [
                    "from",
                    "to"
                  ],
                  "properties": {
                    "user": {
                      "type": "object",
                      "description": "User who triggered the action",
                      "required": [
                        "id",
                        "email"
                      ],
                      "properties": {
                        "id": {
                          "type": "string"
                        },
                        "email": {
                          "type": "string"
                        }
                      }
                    },
                    "from": {
                      "type": "string"
                    },
                    "to": {
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Postgres Connection Pool Enabled Changed",
                  "type": "object",
                  "required": [
                    "enabled"
                  ],
                  "properties": {
                    "user": {
                      "type": "object",
                      "description": "User who triggered the action",
                      "required": [
                        "id",
                        "email"
                      ],
                      "properties": {
                        "id": {
                          "type": "string"
                        },
                        "email": {
                          "type": "string"
                        }
                      }
                    },
                    "enabled": {
                      "type": "boolean"
                    }
                  }
                },
                {
                  "title": "Postgres Created",
                  "type": "object",
                  "properties": {
                    "user": {
                      "type": "object",
                      "description": "User who triggered the action",
                      "required": [
                        "id",
                        "email"
                      ],
                      "properties": {
                        "id": {
                          "type": "string"
                        },
                        "email": {
                          "type": "string"
                        }
                      }
                    }
                  }
                },
                {
                  "title": "Postgres Disk Size Changed",
                  "type": "object",
                  "required": [
                    "fromDiskSize",
                    "toDiskSize"
                  ],
                  "properties": {
                    "user": {
                      "type": "object",
                      "description": "User who triggered the action",
                      "required": [
                        "id",
                        "email"
                      ],
                      "properties": {
                        "id": {
                          "type": "string"
                        },
                        "email": {
                          "type": "string"
                        }
                      }
                    },
                    "fromDiskSize": {
                      "type": "integer"
                    },
                    "toDiskSize": {
                      "type": "integer"
                    }
                  }
                },
                {
                  "title": "Postgres HA Status Changed",
                  "type": "object",
                  "required": [
                    "fromStatus",
                    "toStatus"
                  ],
                  "properties": {
                    "fromStatus": {
                      "type": "string"
                    },
                    "toStatus": {
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Postgres Read Replicas Changed",
                  "type": "object",
                  "required": [
                    "fromReplicas",
                    "toReplicas"
                  ],
                  "properties": {
                    "fromReplicas": {
                      "type": "integer"
                    },
                    "toReplicas": {
                      "type": "integer"
                    }
                  }
                },
                {
                  "title": "Postgres Restarted",
                  "type": "object",
                  "properties": {
                    "user": {
                      "type": "object",
                      "description": "User who triggered the action",
                      "required": [
                        "id",
                        "email"
                      ],
                      "properties": {
                        "id": {
                          "type": "string"
                        },
                        "email": {
                          "type": "string"
                        }
                      }
                    }
                  }
                },
                {
                  "title": "Postgres Unavailable",
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "title": "Postgres Upgrade Failed",
                  "type": "object",
                  "required": [
                    "fromVersion",
                    "toVersion"
                  ],
                  "properties": {
                    "fromVersion": {
                      "type": "string"
                    },
                    "toVersion": {
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Postgres Upgrade Started",
                  "type": "object",
                  "required": [
                    "fromVersion",
                    "toVersion"
                  ],
                  "properties": {
                    "user": {
                      "type": "object",
                      "description": "User who triggered the action",
                      "required": [
                        "id",
                        "email"
                      ],
                      "properties": {
                        "id": {
                          "type": "string"
                        },
                        "email": {
                          "type": "string"
                        }
                      }
                    },
                    "fromVersion": {
                      "type": "string"
                    },
                    "toVersion": {
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Postgres Upgrade Succeeded",
                  "type": "object",
                  "required": [
                    "fromVersion",
                    "toVersion"
                  ],
                  "properties": {
                    "fromVersion": {
                      "type": "string"
                    },
                    "toVersion": {
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Postgres PITR Checkpoint Started",
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "title": "Postgres PITR Checkpoint Failed",
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "title": "Postgres PITR Checkpoint Completed",
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "title": "Postgres Read Replica Stale",
                  "type": "object",
                  "additionalProperties": true
                }
              ]
            },
            {
              "title": "Key Value Event Details",
              "oneOf": [
                {
                  "title": "Key Value Available",
                  "type": "object",
                  "additionalProperties": true
                },
                {
                  "title": "Key Value Config Restart",
                  "type": "object",
                  "required": [
                    "reason",
                    "message"
                  ],
                  "properties": {
                    "reason": {
                      "type": "string"
                    },
                    "message": {
                      "type": "string"
                    }
                  }
                },
                {
                  "title": "Key Value Unhealthy",
                  "type": "object",
                  "additionalProperties": true
                }
              ]
            }
          ]
        }
      },
      "$schema": "http://json-schema.org/draft-04/schema#"
    }
  }
} as const;
export default RetrieveEvent
