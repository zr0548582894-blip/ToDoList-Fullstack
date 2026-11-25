import AuditLogActor from './AuditLogActor.js';

const AuditLog = {
  "type": "object",
  "required": [
    "id",
    "timestamp",
    "event",
    "status",
    "actor",
    "metadata"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Unique identifier for the audit log entry",
      "examples": [
        "aud-123456789"
      ]
    },
    "timestamp": {
      "type": "string",
      "format": "date-time",
      "description": "When the event occurred (ISO 8601 format)",
      "examples": [
        "2023-10-01T12:00:00Z"
      ]
    },
    "event": {
      "type": "string",
      "description": "The type of event that occurred\n\n`AcceptOrgInviteEvent` `AcceptTeamInviteEvent` `AddOrgMemberEvent` `ApplyBlueprintEvent` `ChangeEnvironmentProtectionEvent` `ChangeOrg2FAEnforcementEvent` `ChangeOrgAllowedLoginMethodsEvent` `ChangeOrgNameEvent` `ChangeOrgRoleEvent` `ChangeTeam2FAEnforcementEvent` `ChangeTeamAllowedLoginMethodsEvent` `ChangeTeamMemberRoleEvent` `ChangeWorkspaceDeployHandlingEvent` `ChangeWorkspacePrivacyEvent` `CreateBuildSourceEvent` `DeleteBuildSourceEvent` `UpdateBuildSourceEvent` `CreateCronJobEvent` `CreateEnvVarsEvent` `CreateEnvironmentEvent` `CreateOrgDomainEvent` `CreateOtelIntegrationEvent` `CreatePostgresEvent` `CreatePrivateLinkEvent` `CreateProjectEvent` `CreateRedisEvent` `CreateSSOConnectionEvent` `CreateSavedSearchEvent` `CreateServerDiskEvent` `CreateServerEvent` `CreateWebhookEvent` `CreateWorkspaceEvent` `DeleteCronJobEvent` `DeleteEnvGroupEvent` `DeleteEnvVarsEvent` `DeleteEnvironmentEvent` `DeleteOrgDomainEvent` `DeleteOtelIntegrationEvent` `DeletePostgresEvent` `DeletePrivateLinkEvent` `DeleteProjectEvent` `DeleteRedisEvent` `DeleteSSOConnectionEvent` `DeleteSavedSearchEvent` `DeleteServerDiskEvent` `DeleteServerEvent` `DeleteWebhookEvent` `DeleteWorkspaceEvent` `DocumentDownloadEvent` `DownloadDatabaseBackupEvent` `EnableRedisInternalAuthEvent` `InviteToOrgEvent` `InviteToTeamEvent` `JoinTeamEvent` `LinkBuildSourceEnvGroupEvent` `LoginEvent` `LogoutEvent` `MaintenanceModeEnabledEvent` `MaintenanceModeURIUpdatedEvent` `MoveEnvironmentResourceEvent` `ProvisionOrganizationSCIMToken` `RemoveOrgMemberEvent` `RemoveUserFromTeamEvent` `RestoreDiskSnapshotEvent` `ResumePostgresEvent` `ResumeServiceEvent` `RevokeOrganizationSCIMToken` `SignNDAEvent` `EndShellEvent` `StartShellEvent` `SuspendPostgresEvent` `SuspendServiceEvent` `UnlinkBuildSourceEnvGroupEvent` `UpdateEnvVarsEvent` `UpdateIPAllowListEvent` `UpdateOrgPaymentMethodEvent` `UpdateOtelIntegrationEvent` `UpdateSSOConnectionEvent` `UpdateServiceBuildSourceEvent` `UpdateServiceNameEvent` `UpdateWebhookEvent` `UpdateWorkspacePaymentMethodEvent` `VerifyOrgDomainEvent` `ViewConnectionInfoEvent` `ViewEnvVarValuesEvent` `GrantOAuthAccessEvent` `RevokeOAuthAccessEvent`",
      "enum": [
        "AcceptOrgInviteEvent",
        "AcceptTeamInviteEvent",
        "AddOrgMemberEvent",
        "ApplyBlueprintEvent",
        "ChangeEnvironmentProtectionEvent",
        "ChangeOrg2FAEnforcementEvent",
        "ChangeOrgAllowedLoginMethodsEvent",
        "ChangeOrgNameEvent",
        "ChangeOrgRoleEvent",
        "ChangeTeam2FAEnforcementEvent",
        "ChangeTeamAllowedLoginMethodsEvent",
        "ChangeTeamMemberRoleEvent",
        "ChangeWorkspaceDeployHandlingEvent",
        "ChangeWorkspacePrivacyEvent",
        "CreateBuildSourceEvent",
        "DeleteBuildSourceEvent",
        "UpdateBuildSourceEvent",
        "CreateCronJobEvent",
        "CreateEnvVarsEvent",
        "CreateEnvironmentEvent",
        "CreateOrgDomainEvent",
        "CreateOtelIntegrationEvent",
        "CreatePostgresEvent",
        "CreatePrivateLinkEvent",
        "CreateProjectEvent",
        "CreateRedisEvent",
        "CreateSSOConnectionEvent",
        "CreateSavedSearchEvent",
        "CreateServerDiskEvent",
        "CreateServerEvent",
        "CreateWebhookEvent",
        "CreateWorkspaceEvent",
        "DeleteCronJobEvent",
        "DeleteEnvGroupEvent",
        "DeleteEnvVarsEvent",
        "DeleteEnvironmentEvent",
        "DeleteOrgDomainEvent",
        "DeleteOtelIntegrationEvent",
        "DeletePostgresEvent",
        "DeletePrivateLinkEvent",
        "DeleteProjectEvent",
        "DeleteRedisEvent",
        "DeleteSSOConnectionEvent",
        "DeleteSavedSearchEvent",
        "DeleteServerDiskEvent",
        "DeleteServerEvent",
        "DeleteWebhookEvent",
        "DeleteWorkspaceEvent",
        "DocumentDownloadEvent",
        "DownloadDatabaseBackupEvent",
        "EnableRedisInternalAuthEvent",
        "InviteToOrgEvent",
        "InviteToTeamEvent",
        "JoinTeamEvent",
        "LinkBuildSourceEnvGroupEvent",
        "LoginEvent",
        "LogoutEvent",
        "MaintenanceModeEnabledEvent",
        "MaintenanceModeURIUpdatedEvent",
        "MoveEnvironmentResourceEvent",
        "ProvisionOrganizationSCIMToken",
        "RemoveOrgMemberEvent",
        "RemoveUserFromTeamEvent",
        "RestoreDiskSnapshotEvent",
        "ResumePostgresEvent",
        "ResumeServiceEvent",
        "RevokeOrganizationSCIMToken",
        "SignNDAEvent",
        "EndShellEvent",
        "StartShellEvent",
        "SuspendPostgresEvent",
        "SuspendServiceEvent",
        "UnlinkBuildSourceEnvGroupEvent",
        "UpdateEnvVarsEvent",
        "UpdateIPAllowListEvent",
        "UpdateOrgPaymentMethodEvent",
        "UpdateOtelIntegrationEvent",
        "UpdateSSOConnectionEvent",
        "UpdateServiceBuildSourceEvent",
        "UpdateServiceNameEvent",
        "UpdateWebhookEvent",
        "UpdateWorkspacePaymentMethodEvent",
        "VerifyOrgDomainEvent",
        "ViewConnectionInfoEvent",
        "ViewEnvVarValuesEvent",
        "GrantOAuthAccessEvent",
        "RevokeOAuthAccessEvent"
      ],
      "examples": [
        "CreateServerEvent"
      ]
    },
    "status": {
      "type": "string",
      "description": "The status of the event\n\n`success` `error`",
      "enum": [
        "success",
        "error"
      ],
      "examples": [
        "success"
      ]
    },
    "actor": AuditLogActor,
    "metadata": {
      "type": "object",
      "additionalProperties": {
        "type": "string"
      },
      "description": "Additional context information about the event"
    }
  },
  "title": "auditLog",
  "x-readme-ref-name": "auditLog"
} as const;
export default AuditLog
