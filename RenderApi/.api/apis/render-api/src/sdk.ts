import type * as types from './types.js';
import type { ConfigOptions, FetchResponse } from '@readme/api-core/types';
import APICore from '@readme/api-core';
import definition from '../openapi.json' with {
  type: 'json'
};

export default class SDK {
  core: APICore;

  constructor() {
    this.core = new APICore(definition, 'render-api/1.0.0 (api/8.0.1)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * List Blueprints for the specified workspaces. If no workspaces are provided, returns all
   * Blueprints the API key has access to.
   *
   *
   * @summary List Blueprints
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listBlueprints(metadata?: types.ListBlueprintsMetadataParam): Promise<FetchResponse<200, types.ListBlueprintsResponse200>> {
    return this.core.fetch('/blueprints', 'get', metadata);
  }

  /**
   * Validate a `render.yaml` Blueprint file without creating or modifying any resources.
   * This endpoint checks the syntax and structure of the Blueprint, validates that all
   * required fields are present, and returns a plan indicating the resources that would be
   * created.
   *
   * Requests to this endpoint use `Content-Type: multipart/form-data`. The request body
   * (including the Blueprint file) cannot exceed 10MB in size.
   *
   *
   * @summary Validate Blueprint
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<413, types.Error> The request body exceeded the maximum allowed size.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  validateBlueprint(body: types.ValidateBlueprintBodyParam): Promise<FetchResponse<200, types.ValidateBlueprintResponse200>> {
    return this.core.fetch('/blueprints/validate', 'post', body);
  }

  /**
   * Update the role of an existing workspace member.
   *
   *
   * @summary Update workspace member role
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateWorkspaceMember(body: types.UpdateWorkspaceMemberBodyParam, metadata: types.UpdateWorkspaceMemberMetadataParam): Promise<FetchResponse<200, types.TeamMember>> {
    return this.core.fetch('/owners/{ownerId}/members/{userId}', 'patch', body, metadata);
  }

  /**
   * Remove a user from the specified workspace.
   *
   *
   * @summary Remove workspace member
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  removeWorkspaceMember(metadata: types.RemoveWorkspaceMemberMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/owners/{ownerId}/members/{userId}', 'delete', metadata);
  }

  /**
   * Retrieve the Blueprint with the provided ID.
   *
   *
   * @summary Retrieve Blueprint
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveBlueprint(metadata: types.RetrieveBlueprintMetadataParam): Promise<FetchResponse<200, types.RetrieveBlueprintResponse200>> {
    return this.core.fetch('/blueprints/{blueprintId}', 'get', metadata);
  }

  /**
   * Update the Blueprint with the provided ID.
   *
   *
   * @summary Update Blueprint
   * @throws FetchError<400, types.Error> The request contains invalid values (such as an empty branch or path),
   * branch updates are not available for the workspace, or the Blueprint file
   * could not be read and validated after changing the branch.
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> The Blueprint was not found, or the Blueprint file could not be found
   * at the requested path when the branch is unchanged.
   *
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateBlueprint(body: types.UpdateBlueprintBodyParam, metadata: types.UpdateBlueprintMetadataParam): Promise<FetchResponse<200, types.UpdateBlueprintResponse200>> {
    return this.core.fetch('/blueprints/{blueprintId}', 'patch', body, metadata);
  }

  /**
   * Disconnect the Blueprint with the provided ID.
   *
   * Disconnecting a Blueprint stops automatic resource syncing via the associated
   * `render.yaml` file. It does not _delete_ any services or other resources that were
   * managed by the blueprint.
   *
   *
   * @summary Disconnect Blueprint
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  disconnectBlueprint(metadata: types.DisconnectBlueprintMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/blueprints/{blueprintId}', 'delete', metadata);
  }

  /**
   * List syncs for the Blueprint with the provided ID.
   * Syncs that are planned but not yet approved (in the `created` state) are not included.
   *
   *
   * @summary List Blueprint syncs
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listBlueprintSyncs(metadata: types.ListBlueprintSyncsMetadataParam): Promise<FetchResponse<200, types.ListBlueprintSyncsResponse200>> {
    return this.core.fetch('/blueprints/{blueprintId}/syncs', 'get', metadata);
  }

  /**
   * List dedicated IP sets for a workspace.
   *
   *
   * @summary List dedicated IPs
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listDedicatedIps(metadata: types.ListDedicatedIpsMetadataParam): Promise<FetchResponse<200, types.ListDedicatedIpsResponse200>> {
    return this.core.fetch('/dedicated-ips', 'get', metadata);
  }

  /**
   * Create a dedicated IP set. Provisioning an IP set is asynchronous. The response returns
   * immediately with `status: CREATING` and `ips: []`. When provisioning completes, status
   * changes to `RUNNING` and `ips` contains your assigned addresses.
   *
   * If `environmentIds` is omitted or empty, this IP set applies to all services in the
   * workspace in the selected region. Otherwise, it applies only to services in the listed
   * environments in that region.
   *
   *
   * @summary Create dedicated IP set
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<402, types.Error> You must enter payment information to perform this request.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createDedicatedIp(body: types.DedicatedIppost): Promise<FetchResponse<201, types.DedicatedIp>> {
    return this.core.fetch('/dedicated-ips', 'post', body);
  }

  /**
   * Retrieve the dedicated IP set with the provided ID.
   *
   * @summary Retrieve dedicated IP set
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveDedicatedIp(metadata: types.RetrieveDedicatedIpMetadataParam): Promise<FetchResponse<200, types.DedicatedIp>> {
    return this.core.fetch('/dedicated-ips/{dedicatedIpId}', 'get', metadata);
  }

  /**
   * Update the dedicated IP set with the provided ID. All fields are optional. Omitted
   * fields are left unchanged. To switch from environment-scoped to workspace-scoped,
   * provide `environmentIds: []`.
   *
   *
   * @summary Update dedicated IP set
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateDedicatedIp(body: types.DedicatedIppatch, metadata: types.UpdateDedicatedIpMetadataParam): Promise<FetchResponse<200, types.DedicatedIp>> {
    return this.core.fetch('/dedicated-ips/{dedicatedIpId}', 'patch', body, metadata);
  }

  /**
   * Delete the dedicated IP set with the provided ID.
   *
   *
   * @summary Delete dedicated IP set
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteDedicatedIp(metadata: types.DeleteDedicatedIpMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/dedicated-ips/{dedicatedIpId}', 'delete', metadata);
  }

  /**
   * List persistent disks matching the provided filters. If no filters are provided, returns
   * all disks you have permissions to view.
   *
   *
   * @summary List disks
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listDisks(metadata?: types.ListDisksMetadataParam): Promise<FetchResponse<200, types.ListDisksResponse200>> {
    return this.core.fetch('/disks', 'get', metadata);
  }

  /**
   * Attach a persistent disk to a web service, private service, or background worker.
   *
   * The service must be redeployed for the disk to be attached.
   *
   *
   * @summary Add disk
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  addDisk(body: types.AddDiskBodyParam): Promise<FetchResponse<201, types.AddDiskResponse201>> {
    return this.core.fetch('/disks', 'post', body);
  }

  /**
   * Retrieve the persistent disk with the provided ID.
   *
   *
   * @summary Retrieve disk
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveDisk(metadata: types.RetrieveDiskMetadataParam): Promise<FetchResponse<200, types.RetrieveDiskResponse200>> {
    return this.core.fetch('/disks/{diskId}', 'get', metadata);
  }

  /**
   * Update the persistent disk with the provided ID.
   *
   * The disk's associated service must be deployed and active for updates to take effect.
   *
   * When resizing a disk, the new size must be greater than the current size.
   *
   *
   * @summary Update disk
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateDisk(body: types.UpdateDiskBodyParam, metadata: types.UpdateDiskMetadataParam): Promise<FetchResponse<200, types.UpdateDiskResponse200>> {
    return this.core.fetch('/disks/{diskId}', 'patch', body, metadata);
  }

  /**
   * Delete a persistent disk attached to a service.
   *
   * **All data on the disk will be lost.** The disk's associated service will immediately
   * lose access to it.
   *
   *
   * @summary Delete disk
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteDisk(metadata: types.DeleteDiskMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/disks/{diskId}', 'delete', metadata);
  }

  /**
   * List snapshots for the persistent disk with the provided ID. Each snapshot is a
   * point-in-time copy of the disk's data.
   *
   *
   * @summary List snapshots
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listSnapshots(metadata: types.ListSnapshotsMetadataParam): Promise<FetchResponse<201, types.ListSnapshotsResponse201>> {
    return this.core.fetch('/disks/{diskId}/snapshots', 'get', metadata);
  }

  /**
   * Restore a persistent disk to an available snapshot.
   *
   * **This operation is irreversible.** It will overwrite the current disk data. It might
   * also trigger a service deploy.
   *
   * Snapshot keys returned from the [List
   * snapshots](https://api-docs.render.com/reference/list-snapshots) endpoint expire after
   * 24 hours. If a snapshot key has expired, query the endpoint again for a new key.
   *
   *
   * @summary Restore snapshot
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  restoreSnapshot(body: types.SnapshotRestorePost, metadata: types.RestoreSnapshotMetadataParam): Promise<FetchResponse<200, types.RestoreSnapshotResponse200>> {
    return this.core.fetch('/disks/{diskId}/snapshots/restore', 'post', body, metadata);
  }

  /**
   * Retrieve the user associated with the provided API key.
   *
   *
   * @summary Get the authenticated user
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  getUser(): Promise<FetchResponse<200, types.User>> {
    return this.core.fetch('/users', 'get');
  }

  /**
   * List the workspaces that your API key has access to, optionally filtered by name or
   * owner email address.
   *
   *
   * @summary List workspaces
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listOwners(metadata?: types.ListOwnersMetadataParam): Promise<FetchResponse<200, types.ListOwnersResponse200>> {
    return this.core.fetch('/owners', 'get', metadata);
  }

  /**
   * Retrieve the workspace with the provided ID.
   *
   * Workspace IDs start with `tea-`. If you provide a user ID (starts with `own-`), this
   * endpoint returns the user's default workspace.
   *
   *
   * @summary Retrieve workspace
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveOwner(metadata: types.RetrieveOwnerMetadataParam): Promise<FetchResponse<200, types.Owner>> {
    return this.core.fetch('/owners/{ownerId}', 'get', metadata);
  }

  /**
   * Retrieves the list of users belonging to the workspace with the provided ID.
   *
   *
   * @summary List workspace members
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveOwnerMembers(metadata: types.RetrieveOwnerMembersMetadataParam): Promise<FetchResponse<200, types.TeamMembers>> {
    return this.core.fetch('/owners/{ownerId}/members', 'get', metadata);
  }

  /**
   * Retrieve audit logs for a specific workspace with optional filtering and pagination.
   *
   *
   * @summary List workspace audit logs
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listOwnerAuditLogs(metadata: types.ListOwnerAuditLogsMetadataParam): Promise<FetchResponse<200, types.ListOwnerAuditLogsResponse200>> {
    return this.core.fetch('/owners/{ownerId}/audit-logs', 'get', metadata);
  }

  /**
   * Retrieve audit logs for a specific organization with optional filtering and pagination.
   *
   *
   * @summary List organization audit logs
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listOrganizationAuditLogs(metadata: types.ListOrganizationAuditLogsMetadataParam): Promise<FetchResponse<200, types.ListOrganizationAuditLogsResponse200>> {
    return this.core.fetch('/organizations/{orgId}/audit-logs', 'get', metadata);
  }

  /**
   * Retrieve notification settings for the owner with the provided ID.
   *
   * Note that you provide an owner ID to this endpoint, not the ID for a particular
   * resource.
   *
   *
   * @summary Retrieve notification settings
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveOwnerNotificationSettings(metadata: types.RetrieveOwnerNotificationSettingsMetadataParam): Promise<FetchResponse<200, types.RetrieveOwnerNotificationSettingsResponse200>> {
    return this.core.fetch('/notification-settings/owners/{ownerId}', 'get', metadata);
  }

  /**
   * Update notification settings for the owner with the provided ID.
   *
   *
   * @summary Update notification settings
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  patchOwnerNotificationSettings(body: types.PatchOwnerNotificationSettingsBodyParam, metadata: types.PatchOwnerNotificationSettingsMetadataParam): Promise<FetchResponse<200, types.PatchOwnerNotificationSettingsResponse200>> {
    return this.core.fetch('/notification-settings/owners/{ownerId}', 'patch', body, metadata);
  }

  /**
   * List notification overrides matching the provided filters. If no filters are provided,
   * returns all notification overrides for all workspaces the user belongs to.
   *
   *
   * @summary List notification overrides
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listNotificationOverrides(metadata?: types.ListNotificationOverridesMetadataParam): Promise<FetchResponse<200, types.ListNotificationOverridesResponse200>> {
    return this.core.fetch('/notification-settings/overrides', 'get', metadata);
  }

  /**
   * Retrieve the notification override for the service with the provided ID.
   *
   * Note that you provide a service ID to this endpoint, not the ID for a particular
   * override.
   *
   *
   * @summary Retrieve notification override
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveServiceNotificationOverrides(metadata: types.RetrieveServiceNotificationOverridesMetadataParam): Promise<FetchResponse<200, types.RetrieveServiceNotificationOverridesResponse200>> {
    return this.core.fetch('/notification-settings/overrides/services/{serviceId}', 'get', metadata);
  }

  /**
   * Update the notification override for the service with the provided ID.
   *
   *
   * @summary Update notification override
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  patchServiceNotificationOverrides(body: types.PatchServiceNotificationOverridesBodyParam, metadata: types.PatchServiceNotificationOverridesMetadataParam): Promise<FetchResponse<200, types.PatchServiceNotificationOverridesResponse200>> {
    return this.core.fetch('/notification-settings/overrides/services/{serviceId}', 'patch', body, metadata);
  }

  /**
   * List registry credentials matching the provided filters. If no filters are provided,
   * returns all registry credentials you have permissions to view.
   *
   *
   * @summary List registry credentials
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listRegistryCredentials(metadata?: types.ListRegistryCredentialsMetadataParam): Promise<FetchResponse<200, types.ListRegistryCredentialsResponse200>> {
    return this.core.fetch('/registrycredentials', 'get', metadata);
  }

  /**
   * Create a new registry credential.
   *
   * @summary Create registry credential
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<402, types.Error> You must enter payment information to perform this request.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createRegistryCredential(body: types.CreateRegistryCredentialBodyParam): Promise<FetchResponse<200, types.RegistryCredential>> {
    return this.core.fetch('/registrycredentials', 'post', body);
  }

  /**
   * Retrieve the registry credential with the provided ID.
   *
   * @summary Retrieve registry credential
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveRegistryCredential(metadata: types.RetrieveRegistryCredentialMetadataParam): Promise<FetchResponse<200, types.RegistryCredential>> {
    return this.core.fetch('/registrycredentials/{registryCredentialId}', 'get', metadata);
  }

  /**
   * Update the registry credential with the provided ID. Services that use this credential
   * must be redeployed to use updated values.
   *
   * @summary Update registry credential
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<402, types.Error> You must enter payment information to perform this request.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateRegistryCredential(body: types.UpdateRegistryCredentialBodyParam, metadata: types.UpdateRegistryCredentialMetadataParam): Promise<FetchResponse<200, types.RegistryCredential>> {
    return this.core.fetch('/registrycredentials/{registryCredentialId}', 'patch', body, metadata);
  }

  /**
   * Delete the registry credential with the provided ID.
   *
   * @summary Delete registry credential
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteRegistryCredential(metadata: types.DeleteRegistryCredentialMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/registrycredentials/{registryCredentialId}', 'delete', metadata);
  }

  /**
   * List services matching the provided filters. If no filters are provided, returns all
   * services you have permissions to view.
   *
   *
   * @summary List services
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listServices(metadata?: types.ListServicesMetadataParam): Promise<FetchResponse<200, types.ServiceList>> {
    return this.core.fetch('/services', 'get', metadata);
  }

  /**
   * Creates a new Render service in the specified workspace with the specified
   * configuration.
   *
   * 400 with `code: build_source_region_mismatch` if `buildSourceId` names a git-backed
   * Build Source in a different region than the service.
   *
   *
   * @summary Create service
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<402, types.Error> You must enter payment information to perform this request.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createService(body: types.ServicePost): Promise<FetchResponse<201, types.ServiceAndDeploy>> {
    return this.core.fetch('/services', 'post', body);
  }

  /**
   * Retrieve the service with the provided ID.
   *
   *
   * @summary Retrieve service
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveService(metadata: types.RetrieveServiceMetadataParam): Promise<FetchResponse<200, types.Service>> {
    return this.core.fetch('/services/{serviceId}', 'get', metadata);
  }

  /**
   * Update the service with the provided ID.
   *
   * 400 with `code: build_source_region_mismatch` if `buildSourceId` names a git-backed
   * Build Source in a different region than the service.
   *
   *
   * @summary Update service
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<402, types.Error> You must enter payment information to perform this request.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateService(body: types.ServicePatch, metadata: types.UpdateServiceMetadataParam): Promise<FetchResponse<200, types.Service>> {
    return this.core.fetch('/services/{serviceId}', 'patch', body, metadata);
  }

  /**
   * Delete the service with the provided ID.
   *
   *
   * @summary Delete service
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteService(metadata: types.DeleteServiceMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/services/{serviceId}', 'delete', metadata);
  }

  /**
   * Trigger cache purge for the web service if caching is enabled.
   *
   *
   * @summary Purge Web Service Cache
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  purgeCache(metadata: types.PurgeCacheMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/services/{serviceId}/cache/purge', 'post', metadata);
  }

  /**
   * List deploys matching the provided filters. If no filters are provided, all deploys for
   * the service are returned.
   *
   *
   * @summary List deploys
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listDeploys(metadata: types.ListDeploysMetadataParam): Promise<FetchResponse<200, types.DeployList>> {
    return this.core.fetch('/services/{serviceId}/deploys', 'get', metadata);
  }

  /**
   * Trigger a deploy for the service with the provided ID.
   *
   *
   * @summary Trigger deploy
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createDeploy(body: types.CreateDeployBodyParam, metadata: types.CreateDeployMetadataParam): Promise<FetchResponse<201, types.Deploy>> {
    return this.core.fetch('/services/{serviceId}/deploys', 'post', body, metadata);
  }

  /**
   * Retrieve the details of a particular deploy for a particular service.
   *
   *
   * @summary Retrieve deploy
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveDeploy(metadata: types.RetrieveDeployMetadataParam): Promise<FetchResponse<200, types.Deploy>> {
    return this.core.fetch('/services/{serviceId}/deploys/{deployId}', 'get', metadata);
  }

  /**
   * Cancel an in-progress deploy for a service.
   *
   * Not supported for cron jobs.
   *
   *
   * @summary Cancel deploy
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  cancelDeploy(metadata: types.CancelDeployMetadataParam): Promise<FetchResponse<200, types.Deploy>> {
    return this.core.fetch('/services/{serviceId}/deploys/{deployId}/cancel', 'post', metadata);
  }

  /**
   * Trigger a rollback to a previous deploy of the specified service.
   *
   * Triggering a rollback with this endpoint does not disable autodeploys for the service.
   * This means an autodeploy might restore changes you had intentionally rolled back.
   *
   * You can toggle autodeploys for your service with the [Update
   * service](https://api-docs.render.com/reference/update-service) endpoint or in the Render
   * Dashboard.
   *
   *
   * @summary Roll back deploy
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  rollbackDeploy(body: types.RollbackDeployBodyParam, metadata: types.RollbackDeployMetadataParam): Promise<FetchResponse<201, types.Deploy>> {
    return this.core.fetch('/services/{serviceId}/rollback', 'post', body, metadata);
  }

  /**
   * List all environment variables for the service with the provided ID.
   *
   *
   * @summary List environment variables
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  getEnvVarsForService(metadata: types.GetEnvVarsForServiceMetadataParam): Promise<FetchResponse<200, types.GetEnvVarsForServiceResponse200>> {
    return this.core.fetch('/services/{serviceId}/env-vars', 'get', metadata);
  }

  /**
   * Replace all environment variables for a service with the provided list of environment
   * variables.
   *
   * @summary Update environment variables
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateEnvVarsForService(body: types.UpdateEnvVarsForServiceBodyParam, metadata: types.UpdateEnvVarsForServiceMetadataParam): Promise<FetchResponse<200, types.UpdateEnvVarsForServiceResponse200>> {
    return this.core.fetch('/services/{serviceId}/env-vars', 'put', body, metadata);
  }

  /**
   * Retrieve a particular environment variable for a particular service.
   *
   * This only applies to environment variables set directly on the service, not to
   * environment variables in a linked environment group.
   *
   *
   * @summary Retrieve environment variable
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveEnvVar(metadata: types.RetrieveEnvVarMetadataParam): Promise<FetchResponse<200, types.EnvVar>> {
    return this.core.fetch('/services/{serviceId}/env-vars/{envVarKey}', 'get', metadata);
  }

  /**
   * Add or update a particular environment variable for a particular service.
   *
   * This only applies to environment variables set directly on the service, not to
   * environment variables in a linked environment group.
   *
   *
   * @summary Add or update environment variable
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateEnvVar(body: types.AddUpdateEnvVarInput, metadata: types.UpdateEnvVarMetadataParam): Promise<FetchResponse<200, types.EnvVar>> {
    return this.core.fetch('/services/{serviceId}/env-vars/{envVarKey}', 'put', body, metadata);
  }

  /**
   * Delete a particular environment variable from a particular service.
   *
   * This only applies to environment variables set directly on the service, not to
   * environment variables in a linked environment group.
   *
   *
   * @summary Delete environment variable
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteEnvVar(metadata: types.DeleteEnvVarMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/services/{serviceId}/env-vars/{envVarKey}', 'delete', metadata);
  }

  /**
   * List all secret files for the service with the provided ID.
   *
   *
   * @summary List secret files
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listSecretFilesForService(metadata: types.ListSecretFilesForServiceMetadataParam): Promise<FetchResponse<200, types.ListSecretFilesForServiceResponse200>> {
    return this.core.fetch('/services/{serviceId}/secret-files', 'get', metadata);
  }

  /**
   * Replace all secret files for a service with the provided list of secret files.
   *
   * **Any of the service's existing secret files not included in this request will be
   * deleted.**
   *
   * This only applies to secret files set directly on the service, not to secret files in a
   * linked environment group.
   *
   *
   * @summary Update secret files
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateSecretFilesForService(body: types.UpdateSecretFilesForServiceBodyParam, metadata: types.UpdateSecretFilesForServiceMetadataParam): Promise<FetchResponse<200, types.UpdateSecretFilesForServiceResponse200>> {
    return this.core.fetch('/services/{serviceId}/secret-files', 'put', body, metadata);
  }

  /**
   * Retrieve a particular secret file for a particular service.
   *
   * This only applies to secret files set directly on the service, not to secret files in a
   * linked environment group.
   *
   *
   * @summary Retrieve secret file
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveSecretFile(metadata: types.RetrieveSecretFileMetadataParam): Promise<FetchResponse<200, types.SecretFile>> {
    return this.core.fetch('/services/{serviceId}/secret-files/{envVarKey}', 'get', metadata);
  }

  /**
   * Add or update a particular secret file for a particular service.
   *
   * This only applies to secret files set directly on the service, not to secret files in a
   * linked environment group.
   *
   *
   * @summary Add or update secret file
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  addOrUpdateSecretFile(body: types.AddOrUpdateSecretFileBodyParam, metadata: types.AddOrUpdateSecretFileMetadataParam): Promise<FetchResponse<201, types.SecretFile>> {
    return this.core.fetch('/services/{serviceId}/secret-files/{envVarKey}', 'put', body, metadata);
  }

  /**
   * Delete a particular secret file from a particular service.
   *
   * This only applies to secret files set directly on the service, not to secret files in a
   * linked environment group.
   *
   *
   * @summary Delete secret file
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteSecretFile(metadata: types.DeleteSecretFileMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/services/{serviceId}/secret-files/{envVarKey}', 'delete', metadata);
  }

  /**
   * List recent events that occurred for the service with the provided ID.
   *
   * @summary List events
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listEvents(metadata: types.ListEventsMetadataParam): Promise<FetchResponse<200, types.ListEventsResponse200>> {
    return this.core.fetch('/services/{serviceId}/events', 'get', metadata);
  }

  /**
   * List a particular service's response header rules that match the provided filters. If no
   * filters are provided, all rules for the service are returned.
   *
   *
   * @summary List header rules
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listHeaders(metadata: types.ListHeadersMetadataParam): Promise<FetchResponse<200, types.ListHeadersResponse200>> {
    return this.core.fetch('/services/{serviceId}/headers', 'get', metadata);
  }

  /**
   * Add a response header rule to the service with the provided ID.
   *
   *
   * @summary Add header rule
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  addHeaders(body: types.HeaderInput, metadata: types.AddHeadersMetadataParam): Promise<FetchResponse<201, types.AddHeadersResponse201>> {
    return this.core.fetch('/services/{serviceId}/headers', 'post', body, metadata);
  }

  /**
   * Replace all header rules for a particular service with the provided list.
   *
   * **This deletes all existing header rules for the service that aren't included in the
   * request.**
   *
   *
   * @summary Replace header rules
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateHeaders(body: types.UpdateHeadersBodyParam, metadata: types.UpdateHeadersMetadataParam): Promise<FetchResponse<200, types.UpdateHeadersResponse200>> {
    return this.core.fetch('/services/{serviceId}/headers', 'put', body, metadata);
  }

  /**
   * Delete a particular response header rule for a particular service.
   *
   *
   * @summary Delete header rule
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteHeader(metadata: types.DeleteHeaderMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/services/{serviceId}/headers/{headerId}', 'delete', metadata);
  }

  /**
   * List a particular service's redirect/rewrite rules that match the provided filters. If
   * no filters are provided, all rules for the service are returned.
   *
   *
   * @summary List redirect/rewrite rules
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listRoutes(metadata: types.ListRoutesMetadataParam): Promise<FetchResponse<200, types.ListRoutesResponse200>> {
    return this.core.fetch('/services/{serviceId}/routes', 'get', metadata);
  }

  /**
   * Add redirect/rewrite rules to the service with the provided ID.
   *
   *
   * @summary Add redirect/rewrite rules
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  addRoute(body: types.RoutePost, metadata: types.AddRouteMetadataParam): Promise<FetchResponse<201, types.Route>> {
    return this.core.fetch('/services/{serviceId}/routes', 'post', body, metadata);
  }

  /**
   * Replace all redirect/rewrite rules for a particular service with the provided list.
   *
   * **This deletes all existing redirect/rewrite rules for the service that aren't included
   * in the request.**
   *
   * Rule priority is assigned according to list order (the first rule in the list has the
   * highest priority).
   *
   *
   * @summary Update redirect/rewrite rules
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  putRoutes(body: types.PutRoutesBodyParam, metadata: types.PutRoutesMetadataParam): Promise<FetchResponse<200, types.PutRoutesResponse200>> {
    return this.core.fetch('/services/{serviceId}/routes', 'put', body, metadata);
  }

  /**
   * Update the priority for a particular redirect/rewrite rule.
   *
   * To apply redirect/rewrite rules to an incoming request, Render starts from the rule with
   * priority `0` and applies the first encountered rule that matches the request's path (if
   * any).
   *
   * Render increments the priority of other rules by `1` as necessary to make space for the
   * updated rule.
   *
   *
   * @summary Update redirect/rewrite rule priority
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  patchRoute(body: types.RoutePatch, metadata: types.PatchRouteMetadataParam): Promise<FetchResponse<200, types.PatchRouteResponse200>> {
    return this.core.fetch('/services/{serviceId}/routes/{routeId}', 'patch', body, metadata);
  }

  /**
   * Delete a particular redirect/rewrite rule for a particular service.
   *
   *
   * @summary Delete redirect/rewrite rule
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteRoute(metadata: types.DeleteRouteMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/services/{serviceId}/routes/{routeId}', 'delete', metadata);
  }

  /**
   * List a particular service's custom domains that match the provided filters. If no
   * filters are provided, all custom domains for the service are returned.
   *
   *
   * @summary List custom domains
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listCustomDomains(metadata: types.ListCustomDomainsMetadataParam): Promise<FetchResponse<200, types.ListCustomDomainsResponse200>> {
    return this.core.fetch('/services/{serviceId}/custom-domains', 'get', metadata);
  }

  /**
   * Add a custom domain to the service with the provided ID.
   *
   *
   * @summary Add custom domain
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<402, types.Error> You must enter payment information to perform this request.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createCustomDomain(body: types.CreateCustomDomainBodyParam, metadata: types.CreateCustomDomainMetadataParam): Promise<FetchResponse<201, types.CreateCustomDomainResponse201>> {
    return this.core.fetch('/services/{serviceId}/custom-domains', 'post', body, metadata);
  }

  /**
   * Retrieve a particular custom domain for a particular service.
   *
   *
   * @summary Retrieve custom domain
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveCustomDomain(metadata: types.RetrieveCustomDomainMetadataParam): Promise<FetchResponse<200, types.CustomDomain>> {
    return this.core.fetch('/services/{serviceId}/custom-domains/{customDomainNameOrID}', 'get', metadata);
  }

  /**
   * Delete a custom domain for a service given the service id and custom domain id or name.
   *
   *
   * @summary Delete custom domain
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteCustomDomain(metadata: types.DeleteCustomDomainMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/services/{serviceId}/custom-domains/{customDomainNameOrID}', 'delete', metadata);
  }

  /**
   * Verify the DNS configuration for a custom domain.
   *
   *
   * @summary Verify DNS configuration
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  refreshCustomDomain(metadata: types.RefreshCustomDomainMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/services/{serviceId}/custom-domains/{customDomainNameOrID}/verify', 'post', metadata);
  }

  /**
   * Suspend the service with the provided ID.
   *
   *
   * @summary Suspend service
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  suspendService(metadata: types.SuspendServiceMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/services/{serviceId}/suspend', 'post', metadata);
  }

  /**
   * Resume the service with the provided ID (if it's currently suspended).
   *
   *
   * @summary Resume service
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  resumeService(metadata: types.ResumeServiceMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/services/{serviceId}/resume', 'post', metadata);
  }

  /**
   * Restart the service with the provided ID.
   *
   * Not supported for cron jobs.
   *
   *
   * @summary Restart service
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  restartService(metadata: types.RestartServiceMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/services/{serviceId}/restart', 'post', metadata);
  }

  /**
   * [Scale](https://render.com/docs/scaling#manual-scaling) the service with the provided ID
   * to a fixed number of instances.
   *
   * Render ignores this value as long as autoscaling is enabled for the service.
   *
   *
   * @summary Scale instance count
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  scaleService(body: types.ScaleServiceBodyParam, metadata: types.ScaleServiceMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/services/{serviceId}/scale', 'post', body, metadata);
  }

  /**
   * Update the [autoscaling](https://render.com/docs/scaling#autoscaling) config for the
   * service with the provided ID.
   *
   *
   * @summary Update autoscaling config
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  autoscaleService(body: types.AutoscaleServiceBodyParam, metadata: types.AutoscaleServiceMetadataParam): Promise<FetchResponse<200, types.AutoscaleServiceResponse200>> {
    return this.core.fetch('/services/{serviceId}/autoscaling', 'put', body, metadata);
  }

  /**
   * Delete the autoscaling config for a service given the service id.
   *
   *
   * @summary Delete autoscaling config
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteAutoscalingConfig(metadata: types.DeleteAutoscalingConfigMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/services/{serviceId}/autoscaling', 'delete', metadata);
  }

  /**
   * Create a preview instance for an image-backed service. The preview uses the settings of
   * the base service (referenced by `serviceId`), except settings overridden via provided
   * parameters.
   *
   * View all active previews from your service's Previews tab in the Render Dashboard.
   *
   * Note that you can't create previews for Git-backed services using the Render API.
   *
   *
   * @summary Create service preview (image-backed)
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  previewService(body: types.PreviewInput, metadata: types.PreviewServiceMetadataParam): Promise<FetchResponse<200, types.ServiceAndDeploy>> {
    return this.core.fetch('/services/{serviceId}/preview', 'post', body, metadata);
  }

  /**
   * List jobs for the provided service that match the provided filters. If no filters are
   * provided, all jobs for the service are returned.
   *
   *
   * @summary List jobs
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listJob(metadata: types.ListJobMetadataParam): Promise<FetchResponse<200, types.ListJobResponse200>> {
    return this.core.fetch('/services/{serviceId}/jobs', 'get', metadata);
  }

  /**
   * Create a one-off job using the provided service. For details, see [One-Off
   * Jobs](https://render.com/docs/one-off-jobs).
   *
   *
   * @summary Create job
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  postJob(body: types.PostJobBodyParam, metadata: types.PostJobMetadataParam): Promise<FetchResponse<201, types.PostJobResponse201>> {
    return this.core.fetch('/services/{serviceId}/jobs', 'post', body, metadata);
  }

  /**
   * Retrieve the details of a particular one-off job for a particular service.
   *
   *
   * @summary Retrieve job
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveJob(metadata: types.RetrieveJobMetadataParam): Promise<FetchResponse<200, types.RetrieveJobResponse200>> {
    return this.core.fetch('/services/{serviceId}/jobs/{jobId}', 'get', metadata);
  }

  /**
   * Cancel a particular one-off job for a particular service.
   *
   *
   * @summary Cancel running job
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  cancelJob(metadata: types.CancelJobMetadataParam): Promise<FetchResponse<200, types.CancelJobResponse200>> {
    return this.core.fetch('/services/{serviceId}/jobs/{jobId}/cancel', 'post', metadata);
  }

  /**
   * List instances for the provided service.
   *
   * @summary List instances
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listInstances(metadata: types.ListInstancesMetadataParam): Promise<FetchResponse<200, types.ListInstancesResponse200>> {
    return this.core.fetch('/services/{serviceId}/instances', 'get', metadata);
  }

  /**
   * Retrieve the IP addresses the service's outbound traffic originates from.
   *
   * A service uses either a dedicated IP set that applies to it, or the shared Render IPs
   * for its region.
   *
   *
   * @summary Retrieve service outbound IPs
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveServiceOutboundIps(metadata: types.RetrieveServiceOutboundIpsMetadataParam): Promise<FetchResponse<200, types.OutboundIps>> {
    return this.core.fetch('/services/{serviceId}/outbound-ips', 'get', metadata);
  }

  /**
   * Trigger a run for a cron job and cancel any active runs.
   *
   * @summary Trigger cron job run
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  runCronJob(metadata: types.RunCronJobMetadataParam): Promise<FetchResponse<200, types.CronJobRun>> {
    return this.core.fetch('/cron-jobs/{cronJobId}/runs', 'post', metadata);
  }

  /**
   * Cancel a currently running cron job.
   *
   * @summary Cancel running cron job
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  cancelCronJobRun(metadata: types.CancelCronJobRunMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/cron-jobs/{cronJobId}/runs', 'delete', metadata);
  }

  /**
   * Retrieve the details of a particular event
   *
   *
   * @summary Retrieve event
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveEvent(metadata: types.RetrieveEventMetadataParam): Promise<FetchResponse<200, types.RetrieveEventResponse200>> {
    return this.core.fetch('/events/{eventId}', 'get', metadata);
  }

  /**
   * List logs matching the provided filters. Logs are paginated by start and end timestamps.
   * There are more logs to fetch if `hasMore` is true in the response. Provide the
   * `nextStartTime`
   * and `nextEndTime` timestamps as the `startTime` and `endTime` query parameters to fetch
   * the next page of logs.
   *
   * You can query for logs across multiple resources, but all resources must be in the same
   * region and belong to the same owner.
   *
   *
   * @summary List logs
   * @throws FetchError<400, types.Error> Bad request. The error body's optional `code` field identifies
   * specific failures that clients can handle machine-readably.
   *
   * Error codes:
   * - `multiple_regions`: the project's or environment's resources
   *   are in more than one region; provide `region` to query one
   * - `too_many_resources`: the project or environment has more
   *   resources than a single query supports; provide `resource`
   *   to narrow the query
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listLogs(metadata: types.ListLogsMetadataParam): Promise<FetchResponse<200, types.ListLogsResponse200>> {
    return this.core.fetch('/logs', 'get', metadata);
  }

  /**
   * Open a websocket connection to subscribe to logs matching the provided filters. Logs are
   * streamed in real-time as they are generated.
   *
   * You can query for logs across multiple resources, but all resources must be in the same
   * region and belong to the same owner.
   *
   *
   * @summary Subscribe to new logs
   * @throws FetchError<400, types.Error> Bad request. The error body's optional `code` field identifies
   * specific failures that clients can handle machine-readably.
   *
   * Error codes:
   * - `multiple_regions`: the project's or environment's resources
   *   are in more than one region; provide `region` to query one
   * - `too_many_resources`: the project or environment has more
   *   resources than a single query supports; provide `resource`
   *   to narrow the query
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  subscribeLogs(metadata: types.SubscribeLogsMetadataParam): Promise<FetchResponse<101, types.SubscribeLogsResponse101>> {
    return this.core.fetch('/logs/subscribe', 'get', metadata);
  }

  /**
   * List all values for a given log label in the logs matching the provided filters.
   *
   * @summary List log label values
   * @throws FetchError<400, types.Error> Bad request. The error body's optional `code` field identifies
   * specific failures that clients can handle machine-readably.
   *
   * Error codes:
   * - `multiple_regions`: the project's or environment's resources
   *   are in more than one region; provide `region` to query one
   * - `too_many_resources`: the project or environment has more
   *   resources than a single query supports; provide `resource`
   *   to narrow the query
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listLogsValues(metadata: types.ListLogsValuesMetadataParam): Promise<FetchResponse<200, types.ListLogsValuesResponse200>> {
    return this.core.fetch('/logs/values', 'get', metadata);
  }

  /**
   * Returns log stream information for the specified workspace.
   *
   * @summary Retrieve log stream
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  getOwnerLogStream(metadata: types.GetOwnerLogStreamMetadataParam): Promise<FetchResponse<200, types.GetOwnerLogStreamResponse200>> {
    return this.core.fetch('/logs/streams/owner/{ownerId}', 'get', metadata);
  }

  /**
   * Updates log stream information for the specified workspace. All logs for resources owned
   * by this workspace will be sent to this log stream unless overridden by individual
   * resources.
   *
   * @summary Update log stream
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateOwnerLogStream(body: types.UpdateOwnerLogStreamBodyParam, metadata: types.UpdateOwnerLogStreamMetadataParam): Promise<FetchResponse<200, types.UpdateOwnerLogStreamResponse200>> {
    return this.core.fetch('/logs/streams/owner/{ownerId}', 'put', body, metadata);
  }

  /**
   * Removes the log stream for the specified workspace.
   *
   * @summary Delete log stream
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteOwnerLogStream(metadata: types.DeleteOwnerLogStreamMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/logs/streams/owner/{ownerId}', 'delete', metadata);
  }

  /**
   * Lists log stream overrides for the provided workspace that match the provided filters.
   * These overrides take precedence over the workspace's default log stream.
   *
   * @summary List log stream overrides
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listResourceLogStreams(metadata?: types.ListResourceLogStreamsMetadataParam): Promise<FetchResponse<200, types.ListResourceLogStreamsResponse200>> {
    return this.core.fetch('/logs/streams/resource', 'get', metadata);
  }

  /**
   * Returns log stream override information for the specified resource. A log stream
   * override takes precedence over a workspace's default log stream.
   *
   * @summary Retrieve log stream override
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  getResourceLogStream(metadata: types.GetResourceLogStreamMetadataParam): Promise<FetchResponse<200, types.GetResourceLogStreamResponse200>> {
    return this.core.fetch('/logs/streams/resource/{resourceId}', 'get', metadata);
  }

  /**
   * Updates log stream override information for the specified resource. A log stream
   * override takes precedence over a workspace's default log stream.
   *
   * @summary Update log stream override
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateResourceLogStream(body: types.UpdateResourceLogStreamBodyParam, metadata: types.UpdateResourceLogStreamMetadataParam): Promise<FetchResponse<200, types.UpdateResourceLogStreamResponse200>> {
    return this.core.fetch('/logs/streams/resource/{resourceId}', 'put', body, metadata);
  }

  /**
   * Removes the log stream override for the specified resource. After deletion, the resource
   * will use the workspace's default log stream setting.
   *
   * @summary Delete log stream override
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteResourceLogStream(metadata: types.DeleteResourceLogStreamMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/logs/streams/resource/{resourceId}', 'delete', metadata);
  }

  /**
   * Returns metrics stream information for the specified workspace.
   *
   * @summary Retrieve metrics stream
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getOwnerMetricsStream(metadata: types.GetOwnerMetricsStreamMetadataParam): Promise<FetchResponse<200, types.GetOwnerMetricsStreamResponse200>> {
    return this.core.fetch('/metrics-stream/{ownerId}', 'get', metadata);
  }

  /**
   * Creates or updates the metrics stream for the specified workspace.
   *
   * @summary Create or update metrics stream
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  upsertOwnerMetricsStream(body: types.UpsertOwnerMetricsStreamBodyParam, metadata: types.UpsertOwnerMetricsStreamMetadataParam): Promise<FetchResponse<200, types.UpsertOwnerMetricsStreamResponse200>> {
    return this.core.fetch('/metrics-stream/{ownerId}', 'put', body, metadata);
  }

  /**
   * Deletes the metrics stream for the specified workspace.
   *
   * @summary Delete metrics stream
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  deleteOwnerMetricsStream(metadata: types.DeleteOwnerMetricsStreamMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/metrics-stream/{ownerId}', 'delete', metadata);
  }

  /**
   * Get CPU usage for one or more resources.
   *
   *
   * @summary Get CPU usage
   * @throws FetchError<400, types.Error> The request could not be understood by the server. The error body's
   * optional `code` field identifies specific failures that clients can
   * handle machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the project or environment named by the
   *   `project` or `environment` filter contains more resources than a
   *   single query supports (maximum 50)
   * - `multiple_regions`: the queried resources span more than one region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getCpu(metadata?: types.GetCpuMetadataParam): Promise<FetchResponse<200, types.GetCpuResponse200>> {
    return this.core.fetch('/metrics/cpu', 'get', metadata);
  }

  /**
   * Get the CPU limit for one or more resources.
   *
   *
   * @summary Get CPU limit
   * @throws FetchError<400, types.Error> The request could not be understood by the server. The error body's
   * optional `code` field identifies specific failures that clients can
   * handle machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the project or environment named by the
   *   `project` or `environment` filter contains more resources than a
   *   single query supports (maximum 50)
   * - `multiple_regions`: the queried resources span more than one region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getCpuLimit(metadata?: types.GetCpuLimitMetadataParam): Promise<FetchResponse<200, types.GetCpuLimitResponse200>> {
    return this.core.fetch('/metrics/cpu-limit', 'get', metadata);
  }

  /**
   * Get CPU target for one or more resources.
   *
   *
   * @summary Get CPU target
   * @throws FetchError<400, types.Error> The request could not be understood by the server. The error body's
   * optional `code` field identifies specific failures that clients can
   * handle machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the project or environment named by the
   *   `project` or `environment` filter contains more resources than a
   *   single query supports (maximum 50)
   * - `multiple_regions`: the queried resources span more than one region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getCpuTarget(metadata?: types.GetCpuTargetMetadataParam): Promise<FetchResponse<200, types.GetCpuTargetResponse200>> {
    return this.core.fetch('/metrics/cpu-target', 'get', metadata);
  }

  /**
   * Get memory usage for one or more resources.
   *
   *
   * @summary Get memory usage
   * @throws FetchError<400, types.Error> The request could not be understood by the server. The error body's
   * optional `code` field identifies specific failures that clients can
   * handle machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the project or environment named by the
   *   `project` or `environment` filter contains more resources than a
   *   single query supports (maximum 50)
   * - `multiple_regions`: the queried resources span more than one region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getMemory(metadata?: types.GetMemoryMetadataParam): Promise<FetchResponse<200, types.GetMemoryResponse200>> {
    return this.core.fetch('/metrics/memory', 'get', metadata);
  }

  /**
   * Get the memory limit for one or more resources.
   *
   *
   * @summary Get memory limit
   * @throws FetchError<400, types.Error> The request could not be understood by the server. The error body's
   * optional `code` field identifies specific failures that clients can
   * handle machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the project or environment named by the
   *   `project` or `environment` filter contains more resources than a
   *   single query supports (maximum 50)
   * - `multiple_regions`: the queried resources span more than one region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getMemoryLimit(metadata?: types.GetMemoryLimitMetadataParam): Promise<FetchResponse<200, types.GetMemoryLimitResponse200>> {
    return this.core.fetch('/metrics/memory-limit', 'get', metadata);
  }

  /**
   * Get memory target for one or more resources.
   *
   *
   * @summary Get memory target
   * @throws FetchError<400, types.Error> The request could not be understood by the server. The error body's
   * optional `code` field identifies specific failures that clients can
   * handle machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the project or environment named by the
   *   `project` or `environment` filter contains more resources than a
   *   single query supports (maximum 50)
   * - `multiple_regions`: the queried resources span more than one region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getMemoryTarget(metadata?: types.GetMemoryTargetMetadataParam): Promise<FetchResponse<200, types.GetMemoryTargetResponse200>> {
    return this.core.fetch('/metrics/memory-target', 'get', metadata);
  }

  /**
   * Get the HTTP request count for one or more resources.
   *
   *
   * @summary Get HTTP request count
   * @throws FetchError<400, types.Error> The request could not be understood by the server. The error body's
   * optional `code` field identifies specific failures that clients can
   * handle machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the project or environment named by the
   *   `project` or `environment` filter contains more resources than a
   *   single query supports (maximum 50)
   * - `multiple_regions`: the queried resources span more than one region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getHttpRequests(metadata?: types.GetHttpRequestsMetadataParam): Promise<FetchResponse<200, types.GetHttpRequestsResponse200>> {
    return this.core.fetch('/metrics/http-requests', 'get', metadata);
  }

  /**
   * Get HTTP latency metrics for one or more resources.
   *
   *
   * @summary Get HTTP latency
   * @throws FetchError<400, types.Error> The request could not be understood by the server. The error body's
   * optional `code` field identifies specific failures that clients can
   * handle machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the project or environment named by the
   *   `project` or `environment` filter contains more resources than a
   *   single query supports (maximum 50)
   * - `multiple_regions`: the queried resources span more than one region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getHttpLatency(metadata?: types.GetHttpLatencyMetadataParam): Promise<FetchResponse<200, types.GetHttpLatencyResponse200>> {
    return this.core.fetch('/metrics/http-latency', 'get', metadata);
  }

  /**
   * Get bandwidth usage for one or more resources.
   *
   *
   * @summary Get bandwidth usage
   * @throws FetchError<400, types.Error> The request could not be understood by the server. The error body's
   * optional `code` field identifies specific failures that clients can
   * handle machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the project or environment named by the
   *   `project` or `environment` filter contains more resources than a
   *   single query supports (maximum 50)
   * - `multiple_regions`: the queried resources span more than one region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getBandwidth(metadata?: types.GetBandwidthMetadataParam): Promise<FetchResponse<200, types.GetBandwidthResponse200>> {
    return this.core.fetch('/metrics/bandwidth', 'get', metadata);
  }

  /**
   * Get bandwidth usage for one or more resources broken down by traffic source (HTTP,
   * WebSocket, NAT, PrivateLink).
   *
   * Returns hourly data points with traffic source breakdown. Traffic source data is
   * available from March 9, 2025 onwards.
   * Queries for earlier dates will return a 400 Bad Request error.
   *
   *
   * @summary Get bandwidth usage breakdown by traffic source
   * @throws FetchError<400, types.Error> Bad request, such as a time range that predates traffic source
   * data availability. The error body's optional `code` field
   * identifies specific failures that clients can handle
   * machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the query requests more resources than
   *   the breakdown supports (maximum 30), whether they are named
   *   with `resource` or come from a `project` or `environment`
   *   filter
   * - `multiple_regions`: the queried resources span more than one
   *   region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getBandwidthSources(metadata?: types.GetBandwidthSourcesMetadataParam): Promise<FetchResponse<200, types.GetBandwidthSourcesResponse200>> {
    return this.core.fetch('/metrics/bandwidth-sources', 'get', metadata);
  }

  /**
   * Get persistent disk usage for one or more resources.
   *
   *
   * @summary Get disk usage
   * @throws FetchError<400, types.Error> The request could not be understood by the server. The error body's
   * optional `code` field identifies specific failures that clients can
   * handle machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the project or environment named by the
   *   `project` or `environment` filter contains more resources than a
   *   single query supports (maximum 50)
   * - `multiple_regions`: the queried resources span more than one region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getDiskUsage(metadata?: types.GetDiskUsageMetadataParam): Promise<FetchResponse<200, types.GetDiskUsageResponse200>> {
    return this.core.fetch('/metrics/disk-usage', 'get', metadata);
  }

  /**
   * Get persistent disk capacity for one or more resources.
   *
   *
   * @summary Get disk capacity
   * @throws FetchError<400, types.Error> The request could not be understood by the server. The error body's
   * optional `code` field identifies specific failures that clients can
   * handle machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the project or environment named by the
   *   `project` or `environment` filter contains more resources than a
   *   single query supports (maximum 50)
   * - `multiple_regions`: the queried resources span more than one region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getDiskCapacity(metadata?: types.GetDiskCapacityMetadataParam): Promise<FetchResponse<200, types.GetDiskCapacityResponse200>> {
    return this.core.fetch('/metrics/disk-capacity', 'get', metadata);
  }

  /**
   * Get the instance count for one or more resources.
   *
   *
   * @summary Get instance count
   * @throws FetchError<400, types.Error> The request could not be understood by the server. The error body's
   * optional `code` field identifies specific failures that clients can
   * handle machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the project or environment named by the
   *   `project` or `environment` filter contains more resources than a
   *   single query supports (maximum 50)
   * - `multiple_regions`: the queried resources span more than one region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getInstanceCount(metadata?: types.GetInstanceCountMetadataParam): Promise<FetchResponse<200, types.GetInstanceCountResponse200>> {
    return this.core.fetch('/metrics/instance-count', 'get', metadata);
  }

  /**
   * Get the number of active connections for one or more Postgres databases or Redis
   * instances.
   *
   *
   * @summary Get active connection count
   * @throws FetchError<400, types.Error> The request could not be understood by the server. The error body's
   * optional `code` field identifies specific failures that clients can
   * handle machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the project or environment named by the
   *   `project` or `environment` filter contains more resources than a
   *   single query supports (maximum 50)
   * - `multiple_regions`: the queried resources span more than one region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getActiveConnections(metadata?: types.GetActiveConnectionsMetadataParam): Promise<FetchResponse<200, types.GetActiveConnectionsResponse200>> {
    return this.core.fetch('/metrics/active-connections', 'get', metadata);
  }

  /**
   * Get seconds of replica lag of a Postgres replica.
   *
   *
   * @summary Get replica lag
   * @throws FetchError<400, types.Error> The request could not be understood by the server. The error body's
   * optional `code` field identifies specific failures that clients can
   * handle machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the project or environment named by the
   *   `project` or `environment` filter contains more resources than a
   *   single query supports (maximum 50)
   * - `multiple_regions`: the queried resources span more than one region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getReplicationLag(metadata?: types.GetReplicationLagMetadataParam): Promise<FetchResponse<200, types.GetReplicationLagResponse200>> {
    return this.core.fetch('/metrics/replication-lag', 'get', metadata);
  }

  /**
   * List instance values to filter by for one or more resources.
   *
   *
   * @summary List queryable instance values
   * @throws FetchError<400, types.Error> The request could not be understood by the server. The error body's
   * optional `code` field identifies specific failures that clients can
   * handle machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the project or environment named by the
   *   `project` or `environment` filter contains more resources than a
   *   single query supports (maximum 50)
   * - `multiple_regions`: the queried resources span more than one region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  listApplicationFilterValues(metadata?: types.ListApplicationFilterValuesMetadataParam): Promise<FetchResponse<200, types.ListApplicationFilterValuesResponse200>> {
    return this.core.fetch('/metrics/filters/application', 'get', metadata);
  }

  /**
   * List status codes and host values to filter by for one or more resources.
   *
   *
   * @summary List queryable status codes and host values
   * @throws FetchError<400, types.Error> The request could not be understood by the server. The error body's
   * optional `code` field identifies specific failures that clients can
   * handle machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the project or environment named by the
   *   `project` or `environment` filter contains more resources than a
   *   single query supports (maximum 50)
   * - `multiple_regions`: the queried resources span more than one region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  listHttpFilterValues(metadata?: types.ListHttpFilterValuesMetadataParam): Promise<FetchResponse<200, types.ListHttpFilterValuesResponse200>> {
    return this.core.fetch('/metrics/filters/http', 'get', metadata);
  }

  /**
   * The path suggestions are based on the most recent 5000 log lines as filtered by the
   * provided filters
   *
   * @summary List queryable paths
   * @throws FetchError<400, types.Error> The request could not be understood by the server. The error body's
   * optional `code` field identifies specific failures that clients can
   * handle machine-readably.
   *
   * Error codes:
   * - `too_many_resources`: the project or environment named by the
   *   `project` or `environment` filter contains more resources than a
   *   single query supports (maximum 50)
   * - `multiple_regions`: the queried resources span more than one region
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  listPathFilterValues(metadata?: types.ListPathFilterValuesMetadataParam): Promise<FetchResponse<200, types.ListPathFilterValuesResponse200>> {
    return this.core.fetch('/metrics/filters/path', 'get', metadata);
  }

  /**
   * Get the total number of task runs queued for one or more tasks.
   *
   *
   * @summary Get task runs queued count
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getTaskRunsQueued(metadata?: types.GetTaskRunsQueuedMetadataParam): Promise<FetchResponse<200, types.GetTaskRunsQueuedResponse200>> {
    return this.core.fetch('/metrics/task-runs-queued', 'get', metadata);
  }

  /**
   * Get the total number of task runs completed for one or more tasks. Optionally filter by
   * state (succeeded/failed) or aggregate by state.
   *
   *
   * @summary Get task runs completed count
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getTaskRunsCompleted(metadata?: types.GetTaskRunsCompletedMetadataParam): Promise<FetchResponse<200, types.GetTaskRunsCompletedResponse200>> {
    return this.core.fetch('/metrics/task-runs-completed', 'get', metadata);
  }

  /**
   * List Key Value instances matching the provided filters. If no filters are provided, all
   * Key Value instances are returned.
   *
   *
   * @summary List Key Value instances
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listKeyValue(metadata?: types.ListKeyValueMetadataParam): Promise<FetchResponse<200, types.ListKeyValueResponse200>> {
    return this.core.fetch('/key-value', 'get', metadata);
  }

  /**
   * Create a new Key Value instance.
   *
   *
   * @summary Create Key Value instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createKeyValue(body: types.KeyValuePostInput): Promise<FetchResponse<201, types.KeyValueDetail>> {
    return this.core.fetch('/key-value', 'post', body);
  }

  /**
   * Retrieve a Key Value instance by ID.
   *
   *
   * @summary Retrieve Key Value instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveKeyValue(metadata: types.RetrieveKeyValueMetadataParam): Promise<FetchResponse<200, types.KeyValueDetail>> {
    return this.core.fetch('/key-value/{redisId}', 'get', metadata);
  }

  /**
   * Update a Key Value instance by ID. Note that changing your plan, max memory policy, or
   * persistence mode will restart your Key Value instance.
   *
   *
   * @summary Update Key Value instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateKeyValue(body: types.KeyValuePatchInput, metadata: types.UpdateKeyValueMetadataParam): Promise<FetchResponse<200, types.KeyValueDetail>> {
    return this.core.fetch('/key-value/{redisId}', 'patch', body, metadata);
  }

  /**
   * Delete a Key Value instance by ID.
   *
   *
   * @summary Delete Key Value instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteKeyValue(metadata: types.DeleteKeyValueMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/key-value/{redisId}', 'delete', metadata);
  }

  /**
   * Retrieve connection info for a Key Value instance by ID. Connection info includes
   * sensitive information.
   *
   *
   * @summary Retrieve Key Value connection info
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveKeyValueConnectionInfo(metadata: types.RetrieveKeyValueConnectionInfoMetadataParam): Promise<FetchResponse<200, types.KeyValueConnectionInfo>> {
    return this.core.fetch('/key-value/{redisId}/connection-info', 'get', metadata);
  }

  /**
   * Suspend a Key Value instance by ID.
   *
   *
   * @summary Suspend Key Value instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  suspendKeyValue(metadata: types.SuspendKeyValueMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/key-value/{redisId}/suspend', 'post', metadata);
  }

  /**
   * Resume a Key Value instance by ID.
   *
   *
   * @summary Resume Key Value instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  resumeKeyValue(metadata: types.ResumeKeyValueMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/key-value/{redisId}/resume', 'post', metadata);
  }

  /**
   * List Redis instances matching the provided filters. If no filters are provided, all
   * Redis instances are returned.
   * This API is deprecated in favor of the Key Value API.
   *
   *
   * @summary List Redis instances
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listRedis(metadata?: types.ListRedisMetadataParam): Promise<FetchResponse<200, types.ListRedisResponse200>> {
    return this.core.fetch('/redis', 'get', metadata);
  }

  /**
   * Create a new Redis instance. This API is deprecated in favor of the Key Value API.
   *
   *
   * @summary Create Redis instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createRedis(body: types.RedisPostInput): Promise<FetchResponse<201, types.RedisDetail>> {
    return this.core.fetch('/redis', 'post', body);
  }

  /**
   * Retrieve a Redis instance by ID. This API is deprecated in favor of the Key Value API.
   *
   *
   * @summary Retrieve Redis instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveRedis(metadata: types.RetrieveRedisMetadataParam): Promise<FetchResponse<200, types.RedisDetail>> {
    return this.core.fetch('/redis/{redisId}', 'get', metadata);
  }

  /**
   * Update a Redis instance by ID. This API is deprecated in favor of the Key Value API.
   *
   *
   * @summary Update Redis instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateRedis(body: types.RedisPatchInput, metadata: types.UpdateRedisMetadataParam): Promise<FetchResponse<200, types.RedisDetail>> {
    return this.core.fetch('/redis/{redisId}', 'patch', body, metadata);
  }

  /**
   * Delete a Redis instance by ID. This API is deprecated in favor of the Key Value API.
   *
   *
   * @summary Delete Redis instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteRedis(metadata: types.DeleteRedisMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/redis/{redisId}', 'delete', metadata);
  }

  /**
   * Retrieve connection info for a Redis instance by ID. Connection info includes sensitive
   * information.
   * This API is deprecated in favor of the Key Value API.
   *
   *
   * @summary Retrieve Redis connection info
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveRedisConnectionInfo(metadata: types.RetrieveRedisConnectionInfoMetadataParam): Promise<FetchResponse<200, types.RedisConnectionInfo>> {
    return this.core.fetch('/redis/{redisId}/connection-info', 'get', metadata);
  }

  /**
   * Suspend a Redis instance by ID. This API is deprecated in favor of the Key Value API.
   *
   *
   * @summary Suspend Redis instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  suspendRedis(metadata: types.SuspendRedisMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/redis/{redisId}/suspend', 'post', metadata);
  }

  /**
   * Resume a Redis instance by ID. This API is deprecated in favor of the Key Value API.
   *
   *
   * @summary Resume Redis instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  resumeRedis(metadata: types.ResumeRedisMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/redis/{redisId}/resume', 'post', metadata);
  }

  /**
   * List Postgres instances matching the provided filters. If no filters are provided, all
   * Postgres instances are returned.
   *
   *
   * @summary List Postgres instances
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listPostgres(metadata?: types.ListPostgresMetadataParam): Promise<FetchResponse<200, types.ListPostgresResponse200>> {
    return this.core.fetch('/postgres', 'get', metadata);
  }

  /**
   * Create a new Postgres instance.
   *
   *
   * @summary Create Postgres instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createPostgres(body: types.PostgresPostInput): Promise<FetchResponse<201, types.PostgresDetail>> {
    return this.core.fetch('/postgres', 'post', body);
  }

  /**
   * Retrieve a Postgres instance by ID.
   *
   *
   * @summary Retrieve Postgres instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrievePostgres(metadata: types.RetrievePostgresMetadataParam): Promise<FetchResponse<200, types.PostgresDetail>> {
    return this.core.fetch('/postgres/{postgresId}', 'get', metadata);
  }

  /**
   * Update a Postgres instance by ID.
   *
   *
   * @summary Update Postgres instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updatePostgres(body: types.PostgresPatchInput, metadata: types.UpdatePostgresMetadataParam): Promise<FetchResponse<200, types.PostgresDetail>> {
    return this.core.fetch('/postgres/{postgresId}', 'patch', body, metadata);
  }

  /**
   * Delete a Postgres instance by ID. This operation is irreversible, and
   * all data will be lost.
   *
   *
   * @summary Delete Postgres instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deletePostgres(metadata: types.DeletePostgresMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/postgres/{postgresId}', 'delete', metadata);
  }

  /**
   * Retrieve connection info for a Postgres instance by ID. Connection info includes
   * sensitive information.
   *
   *
   * @summary Retrieve Postgres connection info
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrievePostgresConnectionInfo(metadata: types.RetrievePostgresConnectionInfoMetadataParam): Promise<FetchResponse<200, types.PostgresConnectionInfo>> {
    return this.core.fetch('/postgres/{postgresId}/connection-info', 'get', metadata);
  }

  /**
   * Retrieve information on the availability of Postgres point-in-time recovery for a
   * Postgres instance by ID.
   *
   *
   * @summary Retrieve point-in-time recovery status
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrievePostgresRecoveryInfo(metadata: types.RetrievePostgresRecoveryInfoMetadataParam): Promise<FetchResponse<200, types.RetrievePostgresRecoveryInfoResponse200>> {
    return this.core.fetch('/postgres/{postgresId}/recovery', 'get', metadata);
  }

  /**
   * Trigger [point-in-time recovery](https://render.com/docs/postgresql-backups) on the
   * Postgres instance with the provided ID.
   *
   *
   * @summary Trigger point-in-time recovery
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  recoverPostgres(body: types.RecoverPostgresBodyParam, metadata: types.RecoverPostgresMetadataParam): Promise<FetchResponse<200, types.PostgresDetail>> {
    return this.core.fetch('/postgres/{postgresId}/recovery', 'post', body, metadata);
  }

  /**
   * Suspend a Postgres instance by ID.
   *
   *
   * @summary Suspend Postgres instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  suspendPostgres(metadata: types.SuspendPostgresMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/postgres/{postgresId}/suspend', 'post', metadata);
  }

  /**
   * Resume a Postgres instance by ID.
   *
   *
   * @summary Resume Postgres instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  resumePostgres(metadata: types.ResumePostgresMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/postgres/{postgresId}/resume', 'post', metadata);
  }

  /**
   * Restart a Postgres instance by ID.
   *
   *
   * @summary Restart Postgres instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  restartPostgres(metadata: types.RestartPostgresMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/postgres/{postgresId}/restart', 'post', metadata);
  }

  /**
   * Failover a [highly available
   * Postgres](https://render.com/docs/postgresql-high-availability) instance.
   *
   *
   * @summary Failover Postgres instance
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  failoverPostgres(metadata: types.FailoverPostgresMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/postgres/{postgresId}/failover', 'post', metadata);
  }

  /**
   * List [exports](https://render.com/docs/postgresql-backups#logical-backups) for a
   * Postgres instance by ID. Returns a URL to download the export.
   *
   *
   * @summary List Postgres exports
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listPostgresExport(metadata: types.ListPostgresExportMetadataParam): Promise<FetchResponse<200, types.ListPostgresExportResponse200>> {
    return this.core.fetch('/postgres/{postgresId}/export', 'get', metadata);
  }

  /**
   * Create an [export](https://render.com/docs/postgresql-backups#logical-backups) of a
   * Postgres instance by ID.
   *
   *
   * @summary Create Postgres export
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createPostgresExport(metadata: types.CreatePostgresExportMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/postgres/{postgresId}/export', 'post', metadata);
  }

  /**
   * List PostgreSQL users for the Render Postgres instance with the provided ID.
   *
   *
   * @summary List PostgreSQL Users
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listPostgresUsers(metadata: types.ListPostgresUsersMetadataParam): Promise<FetchResponse<200, types.ListPostgresUsersResponse200>> {
    return this.core.fetch('/postgres/{postgresId}/credentials', 'get', metadata);
  }

  /**
   * Create a new PostgreSQL user for the Render Postgres instance with the provided ID. This
   * becomes the database's new "default" user.
   *
   *
   * @summary Create PostgreSQL User
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createPostgresUser(body: types.CreatePostgresUserBodyParam, metadata: types.CreatePostgresUserMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/postgres/{postgresId}/credentials', 'post', body, metadata);
  }

  /**
   * Delete a PostgreSQL user from the Render Postgres instance with the provided ID.
   *
   *
   * @summary Delete PostgreSQL User
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deletePostgresUser(metadata: types.DeletePostgresUserMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/postgres/{postgresId}/credentials/{username}', 'delete', metadata);
  }

  /**
   * List currently running queries (from `pg_stat_activity`) on a Postgres instance by ID.
   *
   *
   * @summary List live queries
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listPostgresProcesses(metadata: types.ListPostgresProcessesMetadataParam): Promise<FetchResponse<200, types.ListPostgresProcessesResponse200>> {
    return this.core.fetch('/postgres/{postgresId}/query/processes', 'get', metadata);
  }

  /**
   * List the top 50 queries by total execution time (from `pg_stat_statements`) on a
   * Postgres instance by ID.
   *
   *
   * @summary List top queries
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listPostgresTopQueries(metadata: types.ListPostgresTopQueriesMetadataParam): Promise<FetchResponse<200, types.ListPostgresTopQueriesResponse200>> {
    return this.core.fetch('/postgres/{postgresId}/query/top-queries', 'get', metadata);
  }

  /**
   * List the sizes of databases, tables, and indexes on a Postgres instance by ID.
   *
   *
   * @summary List database, table, and index sizes
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listPostgresSizes(metadata: types.ListPostgresSizesMetadataParam): Promise<FetchResponse<200, types.ListPostgresSizesResponse200>> {
    return this.core.fetch('/postgres/{postgresId}/query/sizes', 'get', metadata);
  }

  /**
   * List the number of sequential scans performed against each table on a Postgres instance
   * by ID.
   *
   *
   * @summary List table scans
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listPostgresTableScans(metadata: types.ListPostgresTableScansMetadataParam): Promise<FetchResponse<200, types.ListPostgresTableScansResponse200>> {
    return this.core.fetch('/postgres/{postgresId}/query/table-scans', 'get', metadata);
  }

  /**
   * List projects matching the provided filters. If no filters are provided, all projects
   * are returned.
   *
   *
   * @summary List projects
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listProjects(metadata?: types.ListProjectsMetadataParam): Promise<FetchResponse<200, types.ListProjectsResponse200>> {
    return this.core.fetch('/projects', 'get', metadata);
  }

  /**
   * Create a new project.
   *
   *
   * @summary Create project
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createProject(body: types.ProjectPostInput): Promise<FetchResponse<201, types.Project>> {
    return this.core.fetch('/projects', 'post', body);
  }

  /**
   * Retrieve the project with the provided ID.
   *
   *
   * @summary Retrieve Project
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveProject(metadata: types.RetrieveProjectMetadataParam): Promise<FetchResponse<200, types.Project>> {
    return this.core.fetch('/projects/{projectId}', 'get', metadata);
  }

  /**
   * Update the details of a project.
   *
   * To update the details of a particular _environment_ in the project, instead use the
   * [Update environment](https://api-docs.render.com/reference/update-environment) endpoint.
   *
   *
   * @summary Update project
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateProject(body: types.ProjectPatchInput, metadata: types.UpdateProjectMetadataParam): Promise<FetchResponse<200, types.Project>> {
    return this.core.fetch('/projects/{projectId}', 'patch', body, metadata);
  }

  /**
   * Delete the project with the provided ID.
   *
   * Requires _all_ of the project's environments to be empty (i.e., they must contain no
   * services or other resources). Otherwise, deletion fails with a `409` response.
   *
   * To delete a non-empty project, do one of the following:
   * - First move or delete all contained services and other resources.
   * - Delete the project in the [Render Dashboard](https://dashboard.render.com).
   *
   *
   * @summary Delete project
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteProject(metadata: types.DeleteProjectMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/projects/{projectId}', 'delete', metadata);
  }

  /**
   * Create a new environment belonging to the project with the provided ID.
   *
   *
   * @summary Create environment
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createEnvironment(body: types.EnvironmentPostInput): Promise<FetchResponse<201, types.Environment>> {
    return this.core.fetch('/environments', 'post', body);
  }

  /**
   * List a particular project's environments matching the provided filters. If no filters
   * are provided, all environments are returned.
   *
   *
   * @summary List environments
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listEnvironments(metadata: types.ListEnvironmentsMetadataParam): Promise<FetchResponse<200, types.ListEnvironmentsResponse200>> {
    return this.core.fetch('/environments', 'get', metadata);
  }

  /**
   * Retrieve the environment with the provided ID.
   *
   * @summary Retrieve environment
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveEnvironment(metadata: types.RetrieveEnvironmentMetadataParam): Promise<FetchResponse<200, types.Environment>> {
    return this.core.fetch('/environments/{environmentId}', 'get', metadata);
  }

  /**
   * Update the details of the environment with the provided ID.
   *
   * @summary Update environment
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateEnvironment(body: types.EnvironmentPatchInput, metadata: types.UpdateEnvironmentMetadataParam): Promise<FetchResponse<200, types.Environment>> {
    return this.core.fetch('/environments/{environmentId}', 'patch', body, metadata);
  }

  /**
   * Delete the environment with the provided ID.
   *
   * Requires the environment to be empty (i.e., it must contain no services or other
   * resources). Otherwise, deletion fails with a `409` response.
   *
   * To delete a non-empty environment, do one of the following:
   * - First move or delete all contained services and other resources.
   * - Delete the environment in the [Render Dashboard](https://dashboard.render.com).
   *
   *
   * @summary Delete environment
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteEnvironment(metadata: types.DeleteEnvironmentMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/environments/{environmentId}', 'delete', metadata);
  }

  /**
   * Add resources to the environment with the provided ID.
   *
   *
   * @summary Add resources to environment
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  addResourcesToEnvironment(body: types.EnvironmentResourcesPostInput, metadata: types.AddResourcesToEnvironmentMetadataParam): Promise<FetchResponse<201, types.Environment>> {
    return this.core.fetch('/environments/{environmentId}/resources', 'post', body, metadata);
  }

  /**
   * Remove resources from the environment with the provided ID.
   *
   *
   * @summary Remove resources from environment
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  removeResourcesFromEnvironment(metadata: types.RemoveResourcesFromEnvironmentMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/environments/{environmentId}/resources', 'delete', metadata);
  }

  /**
   * List environment groups matching the provided filters. If no filters are provided, all
   * environment groups are returned.
   *
   *
   * @summary List environment groups
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listEnvGroups(metadata?: types.ListEnvGroupsMetadataParam): Promise<FetchResponse<200, types.ListEnvGroupsResponse200>> {
    return this.core.fetch('/env-groups', 'get', metadata);
  }

  /**
   * Create a new environment group.
   *
   *
   * @summary Create environment group
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createEnvGroup(body: types.EnvGroupPostInput): Promise<FetchResponse<201, types.EnvGroup>> {
    return this.core.fetch('/env-groups', 'post', body);
  }

  /**
   * Retrieve an environment group by ID.
   *
   *
   * @summary Retrieve environment group
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveEnvGroup(metadata: types.RetrieveEnvGroupMetadataParam): Promise<FetchResponse<200, types.EnvGroup>> {
    return this.core.fetch('/env-groups/{envGroupId}', 'get', metadata);
  }

  /**
   * Update the attributes of an environment group.
   *
   * @summary Update environment group
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateEnvGroup(body: types.EnvGroupPatchInput, metadata: types.UpdateEnvGroupMetadataParam): Promise<FetchResponse<200, types.EnvGroup>> {
    return this.core.fetch('/env-groups/{envGroupId}', 'patch', body, metadata);
  }

  /**
   * Delete the environment group with the provided ID, including all environment variables
   * and secret files it contains.
   *
   * @summary Delete environment group
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteEnvGroup(metadata: types.DeleteEnvGroupMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/env-groups/{envGroupId}', 'delete', metadata);
  }

  /**
   * Link a particular service to a particular environment group.
   *
   * The linked service will have access to the environment variables and secret files in the
   * group.
   *
   *
   * @summary Link service
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  linkServiceToEnvGroup(metadata: types.LinkServiceToEnvGroupMetadataParam): Promise<FetchResponse<200, types.EnvGroup>> {
    return this.core.fetch('/env-groups/{envGroupId}/services/{serviceId}', 'post', metadata);
  }

  /**
   * Unlink a particular service from a particular environment group.
   *
   * The service will lose access to the environment variables and secret files in the group.
   *
   *
   * @summary Unlink service
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  unlinkServiceFromEnvGroup(metadata: types.UnlinkServiceFromEnvGroupMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/env-groups/{envGroupId}/services/{serviceId}', 'delete', metadata);
  }

  /**
   * Retrieve a particular environment variable in a particular environment group.
   *
   *
   * @summary Retrieve environment variable
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveEnvGroupEnvVar(metadata: types.RetrieveEnvGroupEnvVarMetadataParam): Promise<FetchResponse<200, types.EnvVar>> {
    return this.core.fetch('/env-groups/{envGroupId}/env-vars/{envVarKey}', 'get', metadata);
  }

  /**
   * Add or update a particular environment variable in a particular environment group.
   *
   *
   * @summary Add or update environment variable
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateEnvGroupEnvVar(body: types.AddUpdateEnvVarInput, metadata: types.UpdateEnvGroupEnvVarMetadataParam): Promise<FetchResponse<200, types.EnvGroup>> {
    return this.core.fetch('/env-groups/{envGroupId}/env-vars/{envVarKey}', 'put', body, metadata);
  }

  /**
   * Remove a particular environment variable from a particular environment group.
   *
   *
   * @summary Remove environment variable
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteEnvGroupEnvVar(metadata: types.DeleteEnvGroupEnvVarMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/env-groups/{envGroupId}/env-vars/{envVarKey}', 'delete', metadata);
  }

  /**
   * Retrieve a particular secret file in a particular environment group.
   *
   *
   * @summary Retrieve secret file
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveEnvGroupSecretFile(metadata: types.RetrieveEnvGroupSecretFileMetadataParam): Promise<FetchResponse<200, types.SecretFile>> {
    return this.core.fetch('/env-groups/{envGroupId}/secret-files/{envVarKey}', 'get', metadata);
  }

  /**
   * Add or update a particular secret file in an particular environment group.
   *
   *
   * @summary Add or update secret file
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateEnvGroupSecretFile(body: types.UpdateEnvGroupSecretFileBodyParam, metadata: types.UpdateEnvGroupSecretFileMetadataParam): Promise<FetchResponse<200, types.EnvGroup>> {
    return this.core.fetch('/env-groups/{envGroupId}/secret-files/{envVarKey}', 'put', body, metadata);
  }

  /**
   * Remove a particular secret file from a particular environment group.
   *
   *
   * @summary Remove secret file
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteEnvGroupSecretFile(metadata: types.DeleteEnvGroupSecretFileMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/env-groups/{envGroupId}/secret-files/{envVarKey}', 'delete', metadata);
  }

  /**
   * List scheduled and/or recent maintenance runs for specified resources.
   *
   *
   * @summary List maintenance runs
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listMaintenance(metadata?: types.ListMaintenanceMetadataParam): Promise<FetchResponse<200, types.ListMaintenanceResponse200>> {
    return this.core.fetch('/maintenance', 'get', metadata);
  }

  /**
   * Retrieve the maintenance run with the provided ID.
   *
   * @summary Retrieve maintenance run
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveMaintenance(metadata: types.RetrieveMaintenanceMetadataParam): Promise<FetchResponse<200, types.RetrieveMaintenanceResponse200>> {
    return this.core.fetch('/maintenance/{maintenanceRunID}', 'get', metadata);
  }

  /**
   * Update the maintenance run with the provided ID.
   *
   * Updates from this endpoint are asynchronous. To check your update's status, use the
   * [Retrieve maintenance run](https://api-docs.render.com/reference/retrieve-maintenance)
   * endpoint.
   *
   *
   * @summary Update maintenance run
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateMaintenance(body: types.UpdateMaintenanceBodyParam, metadata: types.UpdateMaintenanceMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/maintenance/{maintenanceRunID}', 'patch', body, metadata);
  }

  /**
   * Trigger the scheduled maintenance run with the provided ID.
   *
   * Triggering maintenance is asynchronous. To check whether maintenance has started, use
   * the [Retrieve maintenance
   * run](https://api-docs.render.com/reference/retrieve-maintenance) endpoint.
   *
   * As maintenance progresses, the run's `state` will change from `scheduled` to other
   * values, such as `in_progress` and `succeeded`.
   *
   *
   * @summary Trigger maintenance run
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  triggerMaintenance(metadata: types.TriggerMaintenanceMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/maintenance/{maintenanceRunID}/trigger', 'post', metadata);
  }

  /**
   * Create a build source that can be linked to one or more
   * services in the same workspace.
   *
   * Exactly one of `git` or `image` must be set:
   * - `git`: the build source is git-backed. The code is built in
   *    the requested `region` (defaults to `oregon`).
   * - `image`: the build source is image-backed. It points at an
   *   existing image in an external registry; no build is performed.
   *
   * `envVars`, `secretFiles`, and `envGroupIds` set the build-time
   * environment and are only valid for `git` sources; the request fails
   * if any are provided with `image`.
   *
   *
   * @summary Create a build source
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  createBuildSource(body: types.CreateBuildSourceBodyParam): Promise<FetchResponse<201, types.CreateBuildSourceResponse201>> {
    return this.core.fetch('/build-sources', 'post', body);
  }

  /**
   * List build sources matching the provided filters. If `ownerId` is
   * omitted, returns build sources across every workspace you can view.
   *
   *
   * @summary List build sources
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  listBuildSources(metadata?: types.ListBuildSourcesMetadataParam): Promise<FetchResponse<200, types.ListBuildSourcesResponse200>> {
    return this.core.fetch('/build-sources', 'get', metadata);
  }

  /**
   * Retrieve a shared build source by ID
   *
   *
   * @summary Retrieve a build source
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  getBuildSource(metadata: types.GetBuildSourceMetadataParam): Promise<FetchResponse<200, types.GetBuildSourceResponse200>> {
    return this.core.fetch('/build-sources/{buildSourceId}', 'get', metadata);
  }

  /**
   * Update a shared build source. Each top-level field is a true patch,
   * unset fields are left unchanged.
   *
   * Supplying `git` or `image` can change the build source's
   * underlying identity:
   * - `image` on a git-backed build source switches it to image-backed
   * - `git` on an image-backed build source switches it to git-backed
   * - `git` on a build source that's already git-backed is a pure
   *   patch onto the existing config
   *
   *
   * @summary Update a build source
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  updateBuildSource(body: types.UpdateBuildSourceBodyParam, metadata: types.UpdateBuildSourceMetadataParam): Promise<FetchResponse<200, types.UpdateBuildSourceResponse200>> {
    return this.core.fetch('/build-sources/{buildSourceId}', 'patch', body, metadata);
  }

  /**
   * Delete the build source with the provided ID.
   *
   *
   * @summary Delete a build source
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   */
  deleteBuildSource(metadata: types.DeleteBuildSourceMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/build-sources/{buildSourceId}', 'delete', metadata);
  }

  /**
   * List builds in a build source, newest first. Pass the last item's
   * `cursor` as the `cursor` parameter to fetch the next page.
   *
   *
   * @summary List builds in a build source
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listBuildsInBuildSource(metadata: types.ListBuildsInBuildSourceMetadataParam): Promise<FetchResponse<200, types.ListBuildsInBuildSourceResponse200>> {
    return this.core.fetch('/build-sources/{buildSourceId}/builds', 'get', metadata);
  }

  /**
   * Start a new build of the build source at the current HEAD of its
   * branch, even if an up-to-date build already exists.
   *
   * By default, all services linked to the build source with autodeploy enabled
   * will be deployed. Use `deploy.serviceScope` to override this and choose specific
   * linked services.
   *
   * Updating a build source or its build-time environment (env vars,
   * secret files, env groups) with the REST API does not build it. Call
   * this endpoint after those changes to build them.
   *
   * Only `git` build sources can be built.
   *
   *
   * @summary Trigger a build
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  triggerBuildSourceBuild(body: types.TriggerBuildSourceBuildBodyParam, metadata: types.TriggerBuildSourceBuildMetadataParam): Promise<FetchResponse<201, types.TriggerBuildSourceBuildResponse201>>;
  triggerBuildSourceBuild(metadata: types.TriggerBuildSourceBuildMetadataParam): Promise<FetchResponse<201, types.TriggerBuildSourceBuildResponse201>>;
  triggerBuildSourceBuild(body?: types.TriggerBuildSourceBuildBodyParam | types.TriggerBuildSourceBuildMetadataParam, metadata?: types.TriggerBuildSourceBuildMetadataParam): Promise<FetchResponse<201, types.TriggerBuildSourceBuildResponse201>> {
    return this.core.fetch('/build-sources/{buildSourceId}/builds', 'post', body, metadata);
  }

  /**
   * Retrieve a build of a build source, including its status.
   *
   *
   * @summary Retrieve a build
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveBuildSourceBuild(metadata: types.RetrieveBuildSourceBuildMetadataParam): Promise<FetchResponse<200, types.RetrieveBuildSourceBuildResponse200>> {
    return this.core.fetch('/build-sources/{buildSourceId}/builds/{buildId}', 'get', metadata);
  }

  /**
   * List all environment variables for the build source with the provided ID.
   *
   *
   * @summary List environment variables
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  getEnvVarsForBuildSource(metadata: types.GetEnvVarsForBuildSourceMetadataParam): Promise<FetchResponse<200, types.GetEnvVarsForBuildSourceResponse200>> {
    return this.core.fetch('/build-sources/{buildSourceId}/env-vars', 'get', metadata);
  }

  /**
   * Replace all environment variables for a build source with the provided list of
   * environment variables.
   *
   * @summary Update environment variables
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateEnvVarsForBuildSource(body: types.UpdateEnvVarsForBuildSourceBodyParam, metadata: types.UpdateEnvVarsForBuildSourceMetadataParam): Promise<FetchResponse<200, types.UpdateEnvVarsForBuildSourceResponse200>> {
    return this.core.fetch('/build-sources/{buildSourceId}/env-vars', 'put', body, metadata);
  }

  /**
   * Retrieve a particular environment variable for a particular build source.
   *
   * This only applies to environment variables set directly on the build source, not to
   * environment variables in a linked environment group.
   *
   *
   * @summary Retrieve environment variable
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveBuildSourceEnvVar(metadata: types.RetrieveBuildSourceEnvVarMetadataParam): Promise<FetchResponse<200, types.EnvVar>> {
    return this.core.fetch('/build-sources/{buildSourceId}/env-vars/{envVarKey}', 'get', metadata);
  }

  /**
   * Add or update a particular environment variable for a particular build source.
   *
   * This only applies to environment variables set directly on the build source, not to
   * environment variables in a linked environment group.
   *
   *
   * @summary Add or update environment variable
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateBuildSourceEnvVar(body: types.AddUpdateEnvVarInput, metadata: types.UpdateBuildSourceEnvVarMetadataParam): Promise<FetchResponse<200, types.EnvVar>> {
    return this.core.fetch('/build-sources/{buildSourceId}/env-vars/{envVarKey}', 'put', body, metadata);
  }

  /**
   * Delete a particular environment variable from a particular build source.
   *
   * This only applies to environment variables set directly on the build source, not to
   * environment variables in a linked environment group.
   *
   *
   * @summary Delete environment variable
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteBuildSourceEnvVar(metadata: types.DeleteBuildSourceEnvVarMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/build-sources/{buildSourceId}/env-vars/{envVarKey}', 'delete', metadata);
  }

  /**
   * List all secret files for the build source with the provided ID.
   *
   *
   * @summary List secret files
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listSecretFilesForBuildSource(metadata: types.ListSecretFilesForBuildSourceMetadataParam): Promise<FetchResponse<200, types.ListSecretFilesForBuildSourceResponse200>> {
    return this.core.fetch('/build-sources/{buildSourceId}/secret-files', 'get', metadata);
  }

  /**
   * Replace all secret files for a build source with the provided list of secret files.
   *
   * **Any of the build source's existing secret files not included in this request will be
   * deleted.**
   *
   * This only applies to secret files set directly on the build source, not to secret files
   * in a linked environment group.
   *
   *
   * @summary Update secret files
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateSecretFilesForBuildSource(body: types.UpdateSecretFilesForBuildSourceBodyParam, metadata: types.UpdateSecretFilesForBuildSourceMetadataParam): Promise<FetchResponse<200, types.UpdateSecretFilesForBuildSourceResponse200>> {
    return this.core.fetch('/build-sources/{buildSourceId}/secret-files', 'put', body, metadata);
  }

  /**
   * Retrieve a particular secret file for a particular build source.
   *
   * This only applies to secret files set directly on the build source, not to secret files
   * in a linked environment group.
   *
   *
   * @summary Retrieve secret file
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveBuildSourceSecretFile(metadata: types.RetrieveBuildSourceSecretFileMetadataParam): Promise<FetchResponse<200, types.SecretFile>> {
    return this.core.fetch('/build-sources/{buildSourceId}/secret-files/{envVarKey}', 'get', metadata);
  }

  /**
   * Add or update a particular secret file for a particular build source.
   *
   * This only applies to secret files set directly on the build source, not to secret files
   * in a linked environment group.
   *
   *
   * @summary Add or update secret file
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  addOrUpdateBuildSourceSecretFile(body: types.AddOrUpdateBuildSourceSecretFileBodyParam, metadata: types.AddOrUpdateBuildSourceSecretFileMetadataParam): Promise<FetchResponse<201, types.SecretFile>> {
    return this.core.fetch('/build-sources/{buildSourceId}/secret-files/{envVarKey}', 'put', body, metadata);
  }

  /**
   * Delete a particular secret file from a particular build source.
   *
   * This only applies to secret files set directly on the build source, not to secret files
   * in a linked environment group.
   *
   *
   * @summary Delete secret file
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<406, types.Error> Unable to generate preferred media types as specified by Accept request header.
   * @throws FetchError<410, types.Error> The requested resource is no longer available.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteBuildSourceSecretFile(metadata: types.DeleteBuildSourceSecretFileMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/build-sources/{buildSourceId}/secret-files/{envVarKey}', 'delete', metadata);
  }

  /**
   * Link a particular environment group to a particular build source.
   *
   * The build source will have access to the environment variables and secret files in the
   * group at build time.
   *
   *
   * @summary Link environment group
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  linkEnvGroupToBuildSource(metadata: types.LinkEnvGroupToBuildSourceMetadataParam): Promise<FetchResponse<200, types.EnvGroup>> {
    return this.core.fetch('/build-sources/{buildSourceId}/env-groups/{envGroupId}', 'post', metadata);
  }

  /**
   * Unlink a particular environment group from a particular build source.
   *
   * The build source will lose access to the environment variables and secret files in the
   * group.
   *
   *
   * @summary Unlink environment group
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  unlinkEnvGroupFromBuildSource(metadata: types.UnlinkEnvGroupFromBuildSourceMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/build-sources/{buildSourceId}/env-groups/{envGroupId}', 'delete', metadata);
  }

  /**
   * Create a new webhook.
   *
   *
   * @summary Create a webhook
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createWebhook(body: types.CreateWebhookBodyParam): Promise<FetchResponse<201, types.CreateWebhookResponse201>> {
    return this.core.fetch('/webhooks', 'post', body);
  }

  /**
   * List webhooks
   *
   * @summary List webhooks
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listWebhooks(metadata?: types.ListWebhooksMetadataParam): Promise<FetchResponse<200, types.ListWebhooksResponse200>> {
    return this.core.fetch('/webhooks', 'get', metadata);
  }

  /**
   * Retrieve the webhook with the provided ID
   *
   * @summary Retrieve a webhook
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveWebhook(metadata: types.RetrieveWebhookMetadataParam): Promise<FetchResponse<200, types.RetrieveWebhookResponse200>> {
    return this.core.fetch('/webhooks/{webhookId}', 'get', metadata);
  }

  /**
   * Update the webhook with the provided ID.
   *
   *
   * @summary Update a webhook
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateWebhook(body: types.UpdateWebhookBodyParam, metadata: types.UpdateWebhookMetadataParam): Promise<FetchResponse<200, types.UpdateWebhookResponse200>> {
    return this.core.fetch('/webhooks/{webhookId}', 'patch', body, metadata);
  }

  /**
   * Delete the webhook with the provided ID.
   *
   *
   * @summary Delete a webhook
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteWebhook(metadata: types.DeleteWebhookMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/webhooks/{webhookId}', 'delete', metadata);
  }

  /**
   * Retrieve a list of events that have been sent to this webhook, with optional filtering
   * by timestamp.
   *
   *
   * @summary List webhook events
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listWebhookEvents(metadata: types.ListWebhookEventsMetadataParam): Promise<FetchResponse<200, types.ListWebhookEventsResponse200>> {
    return this.core.fetch('/webhooks/{webhookId}/events', 'get', metadata);
  }

  /**
   * List workflows that match the provided filters. If no filters are provided, all
   * workflows accessible by the authenticated user are returned.
   *
   * @summary List workflows
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listWorkflows(metadata?: types.ListWorkflowsMetadataParam): Promise<FetchResponse<200, types.ListWorkflowsResponse200>> {
    return this.core.fetch('/workflows', 'get', metadata);
  }

  /**
   * Create a new workflow service with the specified configuration.
   *
   * @summary Create a workflow
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createWorkflow(body: types.CreateWorkflowBodyParam): Promise<FetchResponse<201, types.CreateWorkflowResponse201>> {
    return this.core.fetch('/workflows', 'post', body);
  }

  /**
   * Retrieve the workflow service with the provided ID.
   *
   * @summary Retrieve workflow
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  getWorkflow(metadata: types.GetWorkflowMetadataParam): Promise<FetchResponse<200, types.GetWorkflowResponse200>> {
    return this.core.fetch('/workflows/{workflowId}', 'get', metadata);
  }

  /**
   * Update the workflow service with the provided ID.
   *
   * @summary Update workflow
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateWorkflow(body: types.UpdateWorkflowBodyParam, metadata: types.UpdateWorkflowMetadataParam): Promise<FetchResponse<200, types.UpdateWorkflowResponse200>> {
    return this.core.fetch('/workflows/{workflowId}', 'patch', body, metadata);
  }

  /**
   * Delete the workflow service with the provided ID.
   *
   * @summary Delete workflow
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteWorkflow(metadata: types.DeleteWorkflowMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/workflows/{workflowId}', 'delete', metadata);
  }

  /**
   * List known versions of the workflow service with the provided ID.
   *
   * @summary List workflow versions
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listWorkflowVersions(metadata?: types.ListWorkflowVersionsMetadataParam): Promise<FetchResponse<200, types.ListWorkflowVersionsResponse200>> {
    return this.core.fetch('/workflowversions', 'get', metadata);
  }

  /**
   * Creates and deploys a new version of a workflow.
   *
   * @summary Deploy a workflow version
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createWorkflowVersion(body: types.CreateWorkflowVersionBodyParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/workflowversions', 'post', body);
  }

  /**
   * Retrieve the specific workflow service version with the provided ID.
   *
   * @summary Retrieve workflow version
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  getWorkflowVersion(metadata: types.GetWorkflowVersionMetadataParam): Promise<FetchResponse<200, types.GetWorkflowVersionResponse200>> {
    return this.core.fetch('/workflowversions/{workflowVersionId}', 'get', metadata);
  }

  /**
   * List workflow tasks that match the provided filters. If no filters are provided, all
   * task definitions accessible by the authenticated user are returned.
   *
   * @summary List tasks
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listTasks(metadata?: types.ListTasksMetadataParam): Promise<FetchResponse<200, types.ListTasksResponse200>> {
    return this.core.fetch('/tasks', 'get', metadata);
  }

  /**
   * Retrieve the workflow task with the provided ID.
   *
   * @summary Retrieve task
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  getTask(metadata: types.GetTaskMetadataParam): Promise<FetchResponse<200, types.GetTaskResponse200>> {
    return this.core.fetch('/tasks/{taskId}', 'get', metadata);
  }

  /**
   * List task runs that match the provided filters. If no filters are provided, all task
   * runs accessible by the authenticated user are returned.
   *
   * @summary List task runs
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listTaskRuns(metadata?: types.ListTaskRunsMetadataParam): Promise<FetchResponse<200, types.ListTaskRunsResponse200>> {
    return this.core.fetch('/task-runs', 'get', metadata);
  }

  /**
   * Kicks off a run of the workflow task with the provided ID, passing the provided input
   * data.
   *
   * @summary Run task
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createTask(body: types.CreateTaskBodyParam): Promise<FetchResponse<202, types.CreateTaskResponse202>> {
    return this.core.fetch('/task-runs', 'post', body);
  }

  /**
   * Establishes a unidirectional event stream. The server sends events as lines
   * formatted per the SSE spec. Clients should set `Accept: text/event-stream`
   * and keep the connection open.
   *
   * The server sends a `task.completed` event whenever a requested task run reaches
   * any terminal state (`completed`, `failed`, or `canceled`).
   * The `status` field of the payload indicates which state was reached.
   *
   * The server automatically closes the stream in the following cases:
   *
   * - All requested task runs have reached a terminal state.
   * - The stream has not sent any events for 30 minutes.
   *
   * For tasks with a timeout higher than 30 minutes, waiting clients should fall back
   * to polling with the [Retrieve task
   * run](https://api-docs.render.com/reference/gettaskrun)
   * endpoint.
   *
   *
   * @summary Stream realtime events (SSE)
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  streamTaskRunsEvents(metadata: types.StreamTaskRunsEventsMetadataParam): Promise<FetchResponse<200, types.StreamTaskRunsEventsResponse200>> {
    return this.core.fetch('/task-runs/events', 'get', metadata);
  }

  /**
   * Retrieve the workflow task run with the provided ID.
   *
   * @summary Retrieve task run
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  getTaskRun(metadata: types.GetTaskRunMetadataParam): Promise<FetchResponse<200, types.GetTaskRunResponse200>> {
    return this.core.fetch('/task-runs/{taskRunId}', 'get', metadata);
  }

  /**
   * Cancel a running task run with the provided ID.
   *
   * @summary Cancel task run
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  cancelTaskRun(metadata: types.CancelTaskRunMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/task-runs/{taskRunId}', 'delete', metadata);
  }

  /**
   * List workflow flows that match the provided filters. If no filters are provided, all
   * flow definitions accessible by the authenticated user are returned.
   *
   * @summary List flows
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listFlows(metadata?: types.ListFlowsMetadataParam): Promise<FetchResponse<200, types.ListFlowsResponse200>> {
    return this.core.fetch('/flows', 'get', metadata);
  }

  /**
   * Retrieve the workflow flow with the provided ID.
   *
   * @summary Retrieve flow
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  getFlow(metadata: types.GetFlowMetadataParam): Promise<FetchResponse<200, types.GetFlowResponse200>> {
    return this.core.fetch('/flows/{flowId}', 'get', metadata);
  }

  /**
   * List flow runs that match the provided filters. If no filters are provided, all flow
   * runs accessible by the authenticated user are returned.
   *
   * @summary List flow runs
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listFlowRuns(metadata?: types.ListFlowRunsMetadataParam): Promise<FetchResponse<200, types.ListFlowRunsResponse200>> {
    return this.core.fetch('/flow-runs', 'get', metadata);
  }

  /**
   * Starts a run of the workflow flow with the provided slug, passing the provided input
   * data.
   *
   * @summary Start flow run
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  startFlowRun(body: types.StartFlowRunBodyParam): Promise<FetchResponse<202, types.StartFlowRunResponse202>> {
    return this.core.fetch('/flow-runs', 'post', body);
  }

  /**
   * Retrieve the flow run with the provided ID, including its input and results.
   *
   * @summary Retrieve flow run
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  getFlowRun(metadata: types.GetFlowRunMetadataParam): Promise<FetchResponse<200, types.GetFlowRunResponse200>> {
    return this.core.fetch('/flow-runs/{flowRunId}', 'get', metadata);
  }

  /**
   * Cancel a running flow run with the provided ID.
   *
   * @summary Cancel flow run
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  cancelFlowRun(metadata: types.CancelFlowRunMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/flow-runs/{flowRunId}', 'delete', metadata);
  }

  /**
   * List the steps a flow run has recorded, in the order the flow started them. A page can
   * hold fewer than `limit` steps and still have more after it, so page until `hasMore` is
   * false.
   *
   * @summary List flow run steps
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listFlowRunSteps(metadata: types.ListFlowRunStepsMetadataParam): Promise<FetchResponse<200, types.ListFlowRunStepsResponse200>> {
    return this.core.fetch('/flow-runs/{flowRunId}/steps', 'get', metadata);
  }

  /**
   * Retrieve a single step of a flow run, including its input, result and error. A sequence
   * number can cover more than one step, so pass the `stepKey` the step listing reported to
   * address one of those.
   *
   * @summary Retrieve flow run step
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  getFlowRunStep(metadata: types.GetFlowRunStepMetadataParam): Promise<FetchResponse<200, types.GetFlowRunStepResponse200>> {
    return this.core.fetch('/flow-runs/{flowRunId}/steps/{stepSeq}', 'get', metadata);
  }

  /**
   * Retrieve recorded failed step attempt
   *
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  getFlowRunStepAttempt(metadata: types.GetFlowRunStepAttemptMetadataParam): Promise<FetchResponse<200, types.GetFlowRunStepAttemptResponse200>> {
    return this.core.fetch('/flow-runs/{flowRunId}/steps/{stepSeq}/attempts/{attempt}', 'get', metadata);
  }

  /**
   * Create a sandbox and return its initial state. The sandbox might still be starting when
   * the response is returned. To use a saved snapshot or custom image, provide `snapshotId`,
   * `snapshotName`, `buildId`, or `buildName`.
   *
   *
   * @summary Create sandbox
   * @throws FetchError<400, types.Error> The request is invalid.
   *
   * - `invalid_snapshot_name`: `snapshotName` is malformed.
   * - Both `snapshotId` and `snapshotName` are provided. No error code is returned.
   * - `invalid_sandbox_name`: `name` exceeds 64 characters or starts with `sbx-`.
   * - `sandbox_group_limit_reached`: The workspace has no default sandbox group and has
   * reached its sandbox group limit.
   * - `invalid_sandbox_plan`: The plan is not supported. The error message lists accepted
   * plans.
   * - `invalid_timeout_seconds`: A nonzero `timeoutSeconds` is outside the range of 60 to
   * the workspace's maximum, which defaults to 2592000 (30 days).
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> The requested resource was not found.
   *
   * - `snapshot_not_found`: The snapshot ID does not exist or no available snapshot in the
   * group has the specified name.
   * - `build_not_found`: The specified build does not belong to the sandbox group, or no
   * build in the group has the specified name.
   *
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   *
   * - `snapshot_not_available`: The snapshot is not `available`. This also applies to
   * snapshots selected by name.
   * - `snapshot_plan_mismatch`: A runtime snapshot requires a different compute plan. This
   * also applies to snapshots selected by name.
   * - `sandbox_group_suspended`: The sandbox group is suspended.
   * - `build_not_succeeded`: The specified build has not succeeded, or no build with the
   * specified name has succeeded.
   *
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createSandbox(body: types.CreateSandboxBodyParam): Promise<FetchResponse<201, types.CreateSandboxResponse201>> {
    return this.core.fetch('/sandboxes', 'post', body);
  }

  /**
   * List sandboxes in a workspace. Each request must specify one workspace. Sandboxes run in
   * the region of their sandbox group.
   *
   *
   * @summary List sandboxes
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listSandboxes(metadata: types.ListSandboxesMetadataParam): Promise<FetchResponse<200, types.ListSandboxesResponse200>> {
    return this.core.fetch('/sandboxes', 'get', metadata);
  }

  /**
   * Create a sandbox group. The first group in a workspace becomes its default.
   *
   * @summary Create sandbox group
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   *
   * - Another group in the workspace has the specified name.
   *
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createSandboxGroup(body: types.CreateSandboxGroupBodyParam): Promise<FetchResponse<201, types.CreateSandboxGroupResponse201>> {
    return this.core.fetch('/sandbox-groups', 'post', body);
  }

  /**
   * List sandbox groups in a workspace, newest first. Returns up to 20 groups by default,
   * with a maximum of 100. To fetch the next page, pass the last result's cursor as
   * `cursor`. Continue until the response is empty.
   *
   *
   * @summary List sandbox groups
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listSandboxGroups(metadata: types.ListSandboxGroupsMetadataParam): Promise<FetchResponse<200, types.ListSandboxGroupsResponse200>> {
    return this.core.fetch('/sandbox-groups', 'get', metadata);
  }

  /**
   * Retrieve the sandbox with the provided ID.
   *
   * @summary Retrieve sandbox
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveSandbox(metadata: types.RetrieveSandboxMetadataParam): Promise<FetchResponse<200, types.RetrieveSandboxResponse200>> {
    return this.core.fetch('/sandboxes/{sandboxId}', 'get', metadata);
  }

  /**
   * List execution records for the sandbox, ordered by start time, newest first.
   *
   * @summary List executions
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listSandboxExecutions(metadata: types.ListSandboxExecutionsMetadataParam): Promise<FetchResponse<200, types.ListSandboxExecutionsResponse200>> {
    return this.core.fetch('/sandboxes/{sandboxId}/execs', 'get', metadata);
  }

  /**
   * Retrieve one execution record for the sandbox.
   *
   * @summary Retrieve execution
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveSandboxExecution(metadata: types.RetrieveSandboxExecutionMetadataParam): Promise<FetchResponse<200, types.RetrieveSandboxExecutionResponse200>> {
    return this.core.fetch('/sandboxes/{sandboxId}/execs/{execId}', 'get', metadata);
  }

  /**
   * Terminate the sandbox with the provided ID. Returns HTTP 204 even if the sandbox is
   * already terminated. You can also terminate a sandbox while it is starting (`creating`).
   *
   *
   * @summary Terminate sandbox
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  terminateSandbox(metadata: types.TerminateSandboxMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/sandboxes/{sandboxId}/terminate', 'post', metadata);
  }

  /**
   * Suspend the running sandbox with the provided ID. Returns HTTP 202 after the sandbox
   * starts suspending, or if it is already `suspending` or `suspended`. Retrieve the sandbox
   * until its status is `suspended`. Open commands and connections end. The next connection
   * resumes the sandbox.
   *
   *
   * @summary Suspend sandbox
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   *
   * - `sandbox_not_running`: The sandbox is not `running`, `suspending`, or `suspended`.
   *
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  suspendSandbox(metadata: types.SuspendSandboxMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/sandboxes/{sandboxId}/suspend', 'post', metadata);
  }

  /**
   * Capture a snapshot of a running sandbox. Returns HTTP 202 with the snapshot in
   * `creating` status. Retrieve the snapshot until its status is `available` or `failed`.
   * The sandbox continues running, with a brief pause when capturing a runtime snapshot.
   *
   *
   * @summary Create sandbox snapshot
   * @throws FetchError<400, types.Error> The request is invalid.
   *
   * - `invalid_snapshot_name`: `name` is malformed.
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   *
   * - `sandbox_not_running`: The sandbox is not `running`.
   * - `sandbox_group_suspended`: The sandbox group is suspended.
   *
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createSandboxSnapshot(body: types.CreateSandboxSnapshotBodyParam, metadata: types.CreateSandboxSnapshotMetadataParam): Promise<FetchResponse<202, types.CreateSandboxSnapshotResponse202>>;
  createSandboxSnapshot(metadata: types.CreateSandboxSnapshotMetadataParam): Promise<FetchResponse<202, types.CreateSandboxSnapshotResponse202>>;
  createSandboxSnapshot(body?: types.CreateSandboxSnapshotBodyParam | types.CreateSandboxSnapshotMetadataParam, metadata?: types.CreateSandboxSnapshotMetadataParam): Promise<FetchResponse<202, types.CreateSandboxSnapshotResponse202>> {
    return this.core.fetch('/sandboxes/{sandboxId}/snapshots', 'post', body, metadata);
  }

  /**
   * Retrieve a sandbox group by ID.
   *
   * @summary Retrieve sandbox group
   * @throws FetchError<400, types.Error> The request is invalid.
   *
   * - `invalid_sandbox_group_id`: The group ID is malformed.
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveSandboxGroup(metadata: types.RetrieveSandboxGroupMetadataParam): Promise<FetchResponse<200, types.RetrieveSandboxGroupResponse200>> {
    return this.core.fetch('/sandbox-groups/{sandboxGroupId}', 'get', metadata);
  }

  /**
   * Update a sandbox group's concurrency limit. The response contains the effective limit
   * after applying Render's limit for the workspace.
   *
   *
   * @summary Update sandbox group
   * @throws FetchError<400, types.Error> The request is invalid.
   *
   * - `invalid_sandbox_group_id`: The group ID is malformed.
   * - `concurrencyLimit` is omitted or below 1.
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateSandboxGroup(body: types.UpdateSandboxGroupBodyParam, metadata: types.UpdateSandboxGroupMetadataParam): Promise<FetchResponse<200, types.UpdateSandboxGroupResponse200>> {
    return this.core.fetch('/sandbox-groups/{sandboxGroupId}', 'patch', body, metadata);
  }

  /**
   * List credentials in the sandbox group, sorted by credential ID. Returns credential
   * settings and metadata. These endpoints do not return secret values, including to admins.
   *
   *
   * @summary List sandbox group credentials
   * @throws FetchError<400, types.Error> The request is invalid.
   *
   * - `invalid_sandbox_group_id`: The group ID is malformed.
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listSandboxGroupCredentials(metadata: types.ListSandboxGroupCredentialsMetadataParam): Promise<FetchResponse<200, types.ListSandboxGroupCredentialsResponse200>> {
    return this.core.fetch('/sandbox-groups/{sandboxGroupId}/credentials', 'get', metadata);
  }

  /**
   * Configure a credential for injection into matching outbound HTTPS requests from
   * sandboxes in this group. Requires an admin. You assign the credential ID.
   *
   * Each group supports up to 25 credentials. Current credential settings and secret values
   * have a combined serialized size limit of 200 KiB (204800 bytes). Render retains the
   * current configuration and three distinct prior configurations per credential, with a
   * total storage limit of 1 MiB including version metadata.
   *
   * The response confirms the configuration was saved. It does not confirm that credential
   * injection is active for a particular sandbox.
   *
   *
   * @summary Create sandbox group credential
   * @throws FetchError<400, types.Error> The request is invalid.
   *
   * - `invalid_sandbox_group_id`: The group ID is malformed.
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * Temporary conflicts while applying credential changes can also cause this response.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createSandboxGroupCredential(body: types.CreateSandboxGroupCredentialBodyParam, metadata: types.CreateSandboxGroupCredentialMetadataParam): Promise<FetchResponse<201, types.CreateSandboxGroupCredentialResponse201>> {
    return this.core.fetch('/sandbox-groups/{sandboxGroupId}/credentials', 'post', body, metadata);
  }

  /**
   * Retrieve the settings and metadata for a credential in this sandbox group. These
   * endpoints do not return secret values, including to admins.
   *
   *
   * @summary Retrieve sandbox group credential
   * @throws FetchError<400, types.Error> The request is invalid.
   *
   * - `invalid_sandbox_group_id`: The group ID is malformed.
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveSandboxGroupCredential(metadata: types.RetrieveSandboxGroupCredentialMetadataParam): Promise<FetchResponse<200, types.RetrieveSandboxGroupCredentialResponse200>> {
    return this.core.fetch('/sandbox-groups/{sandboxGroupId}/credentials/{credentialId}', 'get', metadata);
  }

  /**
   * Update a credential. Developers can change `injection`, `methods`, `paths`, and
   * `enabled`. Changing `domain` or `value` requires an admin.
   *
   * Omitted top-level fields keep their current values. Providing `injection` replaces the
   * entire object. Its `template` defaults to `${SECRET}` when omitted. An empty `methods`
   * or `paths` list removes that filter. Providing `value` creates a new version. The
   * combined serialized size of current credential settings and secret values in the group
   * must remain within 200 KiB (204800 bytes).
   *
   * The response confirms the configuration was saved. It does not confirm that credential
   * injection is active for a particular sandbox.
   *
   *
   * @summary Update sandbox group credential
   * @throws FetchError<400, types.Error> The request is invalid.
   *
   * - `invalid_sandbox_group_id`: The group ID is malformed.
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   *
   * Changing `domain` or `value` requires an admin.
   *
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * Temporary conflicts while applying credential changes can also cause this response.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  updateSandboxGroupCredential(body: types.UpdateSandboxGroupCredentialBodyParam, metadata: types.UpdateSandboxGroupCredentialMetadataParam): Promise<FetchResponse<200, types.UpdateSandboxGroupCredentialResponse200>> {
    return this.core.fetch('/sandbox-groups/{sandboxGroupId}/credentials/{credentialId}', 'patch', body, metadata);
  }

  /**
   * Delete a credential from the sandbox group. Requires an admin. Repeated delete requests
   * are accepted, including if the credential is already absent.
   *
   *
   * @summary Delete sandbox group credential
   * @throws FetchError<400, types.Error> The request is invalid.
   *
   * - `invalid_sandbox_group_id`: The group ID is malformed.
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * Temporary conflicts while applying credential changes can also cause this response.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteSandboxGroupCredential(metadata: types.DeleteSandboxGroupCredentialMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/sandbox-groups/{sandboxGroupId}/credentials/{credentialId}', 'delete', metadata);
  }

  /**
   * List retained credential versions, newest version ID first. Versions with identical
   * settings and secret values share a fingerprint.
   *
   * Render retains the current configuration and the three distinct prior configurations
   * most recently active. When an older configuration is removed, all versions that refer to
   * it are also removed. These endpoints do not return secret values.
   *
   *
   * @summary List sandbox credential versions
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listSandboxGroupCredentialVersions(metadata: types.ListSandboxGroupCredentialVersionsMetadataParam): Promise<FetchResponse<200, types.ListSandboxGroupCredentialVersionsResponse200>> {
    return this.core.fetch('/sandbox-groups/{sandboxGroupId}/credentials/{credentialId}/versions', 'get', metadata);
  }

  /**
   * Restore a retained credential version, including its routing settings, injection
   * settings, and secret value, as a new current version. Requires an admin.
   *
   * The new version has a higher ID, records who restored it and when, and identifies the
   * source in `restoredFromVersionId`. Its fingerprint matches the source version. Render
   * retains the current configuration and the three distinct prior configurations most
   * recently active. Removing an older configuration also removes all versions that refer to
   * it.
   *
   * The response confirms the configuration was saved. It does not confirm that credential
   * injection is active for a particular sandbox.
   *
   * These endpoints do not return secret values.
   *
   *
   * @summary Restore sandbox credential configuration
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * Temporary conflicts while applying credential changes can also cause this response.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  restoreSandboxGroupCredential(body: types.RestoreSandboxGroupCredentialBodyParam, metadata: types.RestoreSandboxGroupCredentialMetadataParam): Promise<FetchResponse<200, types.RestoreSandboxGroupCredentialResponse200>> {
    return this.core.fetch('/sandbox-groups/{sandboxGroupId}/credentials/{credentialId}/restore', 'post', body, metadata);
  }

  /**
   * List builds in a sandbox group, newest first.
   *
   * @summary List sandbox builds
   * @throws FetchError<400, types.Error> The request is invalid.
   *
   * - `invalid_sandbox_group_id`: The group ID is malformed.
   * - `invalid_status`: A requested build status is not supported.
   * - `invalid_cursor`: The cursor is malformed.
   * - `invalid_limit`: The limit is outside the range 1–100.
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listSandboxBuilds(metadata: types.ListSandboxBuildsMetadataParam): Promise<FetchResponse<200, types.ListSandboxBuildsResponse200>> {
    return this.core.fetch('/sandbox-groups/{sandboxGroupId}/builds', 'get', metadata);
  }

  /**
   * Start converting an OCI container image into an image that sandboxes can use. New builds
   * run asynchronously. Retrieve the build until its status is `succeeded` or `failed`.
   * After it succeeds, provide its ID as `buildId` when creating a sandbox.
   *
   * If the group already has a pending, running, or succeeded build for the same name and
   * image digest, Render returns that build. Retrying a failed build starts a new build.
   *
   *
   * @summary Create sandbox build
   * @throws FetchError<400, types.Error> The request is invalid.
   *
   * - `invalid_sandbox_group_id`: The group ID is malformed.
   * - The image is invalid or the image registry cannot serve it. The error message explains
   * the problem.
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   *
   * - `sandbox_group_suspended`: The group is suspended.
   *
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * The group has reached its limit for pending and running builds. The error message
   * includes the limit.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  createSandboxBuild(body: types.CreateSandboxBuildBodyParam, metadata: types.CreateSandboxBuildMetadataParam): Promise<FetchResponse<201, types.CreateSandboxBuildResponse201>> {
    return this.core.fetch('/sandbox-groups/{sandboxGroupId}/builds', 'post', body, metadata);
  }

  /**
   * Retrieve a build by ID.
   *
   * @summary Retrieve sandbox build
   * @throws FetchError<400, types.Error> The request is invalid.
   *
   * - `invalid_sandbox_group_id`: The group ID is malformed.
   * - The build ID is malformed.
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> The requested resource was not found.
   *
   * - `build_not_found`: The build does not exist or belongs to another sandbox group.
   *
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveSandboxBuild(metadata: types.RetrieveSandboxBuildMetadataParam): Promise<FetchResponse<200, types.RetrieveSandboxBuildResponse200>> {
    return this.core.fetch('/sandbox-groups/{sandboxGroupId}/builds/{buildId}', 'get', metadata);
  }

  /**
   * Delete a build of a sandbox image. The build no longer appears in lists and cannot be
   * retrieved or used to create sandboxes, including by image name. Repeated requests to
   * delete the build return HTTP 204.
   *
   *
   * @summary Delete sandbox build
   * @throws FetchError<400, types.Error> The request is invalid.
   *
   * - `invalid_sandbox_group_id`: The group ID is malformed.
   * - The build ID is malformed.
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> The requested resource was not found.
   *
   * - `build_not_found`: The build does not exist or belongs to another sandbox group.
   *
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   *
   * - `image_in_use`: Sandboxes that have not terminated or errored, or unexpired snapshots
   * that have not failed, still depend on this build. This includes suspended sandboxes and
   * snapshots of sandboxes restored from earlier snapshots of the build. The error message
   * lists up to 10 dependencies. Terminate the sandboxes and delete the snapshots, or wait
   * for them to expire, before retrying.
   *
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteSandboxBuild(metadata: types.DeleteSandboxBuildMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/sandbox-groups/{sandboxGroupId}/builds/{buildId}', 'delete', metadata);
  }

  /**
   * List snapshots in a sandbox group, newest first. Excludes expired and deleted snapshots.
   *
   *
   * @summary List sandbox snapshots
   * @throws FetchError<400, types.Error> The request is invalid.
   *
   * - `invalid_sandbox_group_id`: The group ID is malformed.
   * - `invalid_owner_id`: The workspace ID is missing or repeated.
   * - `invalid_status`: A requested snapshot status is not supported.
   * - `invalid_cursor`: The cursor is malformed or unknown.
   * - `invalid_limit`: The limit is outside the range 1–100.
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  listSandboxSnapshots(metadata: types.ListSandboxSnapshotsMetadataParam): Promise<FetchResponse<200, types.ListSandboxSnapshotsResponse200>> {
    return this.core.fetch('/sandbox-groups/{sandboxGroupId}/snapshots', 'get', metadata);
  }

  /**
   * Retrieve a snapshot by ID.
   *
   * @summary Retrieve sandbox snapshot
   * @throws FetchError<400, types.Error> The request is invalid.
   *
   * - `invalid_sandbox_group_id`: The group ID is malformed.
   * - `invalid_snapshot_id`: The snapshot ID is malformed.
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> The requested resource was not found.
   *
   * - The snapshot is deleted, expired, or belongs to another sandbox group.
   *
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  retrieveSandboxSnapshot(metadata: types.RetrieveSandboxSnapshotMetadataParam): Promise<FetchResponse<200, types.RetrieveSandboxSnapshotResponse200>> {
    return this.core.fetch('/sandbox-groups/{sandboxGroupId}/snapshots/{snapshotId}', 'get', metadata);
  }

  /**
   * Delete a snapshot. Sandboxes created from it are not affected. Returns HTTP 204 if the
   * snapshot is already deleted or expired.
   *
   *
   * @summary Delete sandbox snapshot
   * @throws FetchError<400, types.Error> The request is invalid.
   *
   * - `invalid_sandbox_group_id`: The group ID is malformed.
   * - `invalid_snapshot_id`: The snapshot ID is malformed.
   *
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> The requested resource was not found.
   *
   * - The snapshot belongs to another sandbox group.
   *
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   *
   * - `snapshot_creating`: Capture is still in progress.
   *
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  deleteSandboxSnapshot(metadata: types.DeleteSandboxSnapshotMetadataParam): Promise<FetchResponse<number, unknown>> {
    return this.core.fetch('/sandbox-groups/{sandboxGroupId}/snapshots/{snapshotId}', 'delete', metadata);
  }

  /**
   * Create a short-lived connect token for a command run in this sandbox. Send the command
   * to the URL in the response, using the token as the bearer token. The token authorizes
   * only the requested operation.
   *
   *
   * @summary Create a connect token for a sandbox run
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   *
   * - `sandbox_not_running`: The sandbox is terminated or errored.
   * - `sandbox_group_suspended`: The sandbox group is suspended.
   *
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  connectSandboxRun(metadata: types.ConnectSandboxRunMetadataParam): Promise<FetchResponse<201, types.ConnectSandboxRunResponse201>> {
    return this.core.fetch('/sandboxes/{sandboxId}/runs/{operation}/token', 'post', metadata);
  }

  /**
   * Create a short-lived connect token for a file upload or download. Transfer the file
   * directly to or from the URL in the response, using the token as the bearer token. The
   * token authorizes only the specified sandbox, operation, and path. Its expiration time is
   * returned in `expiresAt`.
   *
   * Use `application/octet-stream` for a single file or `application/x-tar` for a directory
   * archive. For gzip compression, also set `Content-Encoding: gzip`. Directory downloads
   * return `application/x-tar` with `Content-Encoding: gzip`.
   *
   *
   * @summary Mint a connect token for a sandbox file transfer
   * @throws FetchError<400, types.Error> The request could not be understood by the server.
   * @throws FetchError<401, types.Error> Authorization information is missing or invalid.
   * @throws FetchError<403, types.Error> You do not have permissions for the requested resource. If a scoped API token does not
   * satisfy the endpoint's minimum scope requirements, the response has code
   * insufficient_token_scope and its message lists all minimum required scopes. Broader
   * scopes that include their permissions also satisfy the requirements. Passing this check
   * does not guarantee access to the requested resource or to conditional operations.
   * @throws FetchError<404, types.Error> Unable to find the requested resource.
   * @throws FetchError<409, types.Error> The current state of the resource conflicts with this request.
   *
   * - `sandbox_not_running`: The sandbox is terminated or errored.
   * - `sandbox_group_suspended`: The sandbox group is suspended.
   *
   * @throws FetchError<429, types.Error> Rate limit has been surpassed.
   *
   * Rate-limited endpoints also return `RateLimit-Limit`, `RateLimit-Remaining`, and
   * `RateLimit-Reset` on successful responses so clients can track their remaining quota.
   *
   * @throws FetchError<500, types.Error> An unexpected server error has occurred.
   * @throws FetchError<503, types.Error> Server currently unavailable.
   */
  connectSandboxFiles(metadata: types.ConnectSandboxFilesMetadataParam): Promise<FetchResponse<201, types.ConnectSandboxFilesResponse201>> {
    return this.core.fetch('/sandboxes/{sandboxId}/files/{operation}/token', 'post', metadata);
  }
}
