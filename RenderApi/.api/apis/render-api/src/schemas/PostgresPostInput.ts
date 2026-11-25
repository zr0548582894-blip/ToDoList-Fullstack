import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import PostgresVersion from './PostgresVersion.js';
import ReadReplicasInput from './ReadReplicasInput.js';
import Region from './Region.js';

const PostgresPostInput = {
  "type": "object",
  "required": [
    "name",
    "plan",
    "ownerId",
    "version"
  ],
  "properties": {
    "databaseName": {
      "type": "string",
      "default": "randomly generated"
    },
    "databaseUser": {
      "type": "string",
      "default": "randomly generated"
    },
    "datadogAPIKey": {
      "type": "string",
      "description": "The Datadog API key for the Datadog agent to monitor the new database."
    },
    "datadogSite": {
      "type": "string",
      "description": "Datadog region to use for monitoring the new database. Defaults to 'US1'.",
      "examples": [
        "US1"
      ]
    },
    "name": {
      "type": "string",
      "description": "The name of the database as it will appear in the Render Dashboard"
    },
    "enableHighAvailability": {
      "type": "boolean",
      "default": false
    },
    "environmentId": {
      "type": "string"
    },
    "ownerId": {
      "type": "string",
      "description": "The ID of the workspace to create the database for"
    },
    "plan": {
      "type": "string",
      "enum": [
        "free",
        "starter",
        "standard",
        "pro",
        "pro_plus",
        "custom",
        "basic_256mb",
        "basic_1gb",
        "basic_4gb",
        "pro_4gb",
        "pro_8gb",
        "pro_16gb",
        "pro_32gb",
        "pro_64gb",
        "pro_128gb",
        "pro_192gb",
        "pro_256gb",
        "pro_384gb",
        "pro_512gb",
        "accelerated_16gb",
        "accelerated_32gb",
        "accelerated_64gb",
        "accelerated_128gb",
        "accelerated_256gb",
        "accelerated_384gb",
        "accelerated_512gb",
        "accelerated_768gb",
        "accelerated_1024gb",
        "0.1c-256mb",
        "0.5c-1g",
        "1c-2g",
        "1c-4g",
        "2c-4g",
        "2c-8g",
        "2c-16g",
        "4c-16g",
        "4c-32g",
        "8c-32g",
        "8c-64g",
        "16c-64g",
        "16c-128g",
        "32c-128g",
        "32c-256g",
        "48c-192g",
        "48c-384g",
        "64c-256g",
        "64c-512g",
        "96c-384g",
        "96c-768g",
        "128c-512g",
        "128c-1024g"
      ]
    },
    "diskSizeGB": {
      "type": "integer",
      "description": "The number of gigabytes of disk space to allocate for the database"
    },
    "enableDiskAutoscaling": {
      "type": "boolean",
      "default": false
    },
    "connectionPool": {
      "type": "string",
      "default": "none",
      "description": "What connection pool to use (if any) out of 'pgbouncer' and 'none'"
    },
    "region": Region,
    "ipAllowList": {
      "type": "array",
      "items": CidrBlockAndDescription
    },
    "readReplicas": ReadReplicasInput,
    "version": PostgresVersion
  },
  "description": "Input for creating a database",
  "title": "postgresPOSTInput",
  "x-readme-ref-name": "postgresPOSTInput",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default PostgresPostInput
