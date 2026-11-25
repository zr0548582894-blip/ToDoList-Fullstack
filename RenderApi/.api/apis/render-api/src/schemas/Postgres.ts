import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import DatabaseRole from './DatabaseRole.js';
import DatabaseStatus from './DatabaseStatus.js';
import Owner from './Owner.js';
import PostgresVersion from './PostgresVersion.js';
import ReadReplicas from './ReadReplicas.js';
import Region from './Region.js';
import SuspenderType from './SuspenderType.js';

const Postgres = {
  "type": "object",
  "required": [
    "id",
    "ipAllowList",
    "createdAt",
    "updatedAt",
    "databaseName",
    "databaseUser",
    "highAvailabilityEnabled",
    "name",
    "owner",
    "plan",
    "region",
    "readReplicas",
    "role",
    "status",
    "version",
    "suspended",
    "suspenders",
    "dashboardUrl",
    "diskAutoscalingEnabled",
    "connectionPool"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "ipAllowList": {
      "type": "array",
      "items": CidrBlockAndDescription
    },
    "createdAt": {
      "type": "string",
      "format": "date-time"
    },
    "updatedAt": {
      "type": "string",
      "format": "date-time"
    },
    "expiresAt": {
      "description": "The time at which the database will be expire. Applies to free tier databases only.",
      "type": "string",
      "format": "date-time"
    },
    "databaseName": {
      "type": "string"
    },
    "databaseUser": {
      "type": "string"
    },
    "environmentId": {
      "type": "string"
    },
    "highAvailabilityEnabled": {
      "type": "boolean"
    },
    "name": {
      "type": "string"
    },
    "owner": Owner,
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
      ],
      "description": "`free` `starter` `standard` `pro` `pro_plus` `custom` `basic_256mb` `basic_1gb` `basic_4gb` `pro_4gb` `pro_8gb` `pro_16gb` `pro_32gb` `pro_64gb` `pro_128gb` `pro_192gb` `pro_256gb` `pro_384gb` `pro_512gb` `accelerated_16gb` `accelerated_32gb` `accelerated_64gb` `accelerated_128gb` `accelerated_256gb` `accelerated_384gb` `accelerated_512gb` `accelerated_768gb` `accelerated_1024gb` `0.1c-256mb` `0.5c-1g` `1c-2g` `1c-4g` `2c-4g` `2c-8g` `2c-16g` `4c-16g` `4c-32g` `8c-32g` `8c-64g` `16c-64g` `16c-128g` `32c-128g` `32c-256g` `48c-192g` `48c-384g` `64c-256g` `64c-512g` `96c-384g` `96c-768g` `128c-512g` `128c-1024g`"
    },
    "diskSizeGB": {
      "type": "integer"
    },
    "primaryPostgresID": {
      "type": "string"
    },
    "region": Region,
    "readReplicas": ReadReplicas,
    "role": DatabaseRole,
    "status": DatabaseStatus,
    "version": PostgresVersion,
    "suspended": {
      "type": "string",
      "enum": [
        "suspended",
        "not_suspended"
      ],
      "description": "`suspended` `not_suspended`"
    },
    "suspenders": {
      "type": "array",
      "items": SuspenderType
    },
    "dashboardUrl": {
      "type": "string",
      "description": "The URL to view the Postgres instance in the Render Dashboard"
    },
    "diskAutoscalingEnabled": {
      "type": "boolean"
    },
    "connectionPool": {
      "type": "string",
      "description": "What connection pool to use (if any) out of 'pgbouncer' and 'none'"
    }
  },
  "title": "postgres",
  "x-readme-ref-name": "postgres"
} as const;
export default Postgres
