const PostgresConnectionInfo = {
  "type": "object",
  "required": [
    "password",
    "internalConnectionString",
    "externalConnectionString",
    "psqlCommand"
  ],
  "properties": {
    "password": {
      "type": "string",
      "format": "password"
    },
    "internalConnectionString": {
      "type": "string",
      "format": "password"
    },
    "externalConnectionString": {
      "type": "string",
      "format": "password"
    },
    "internalConnectionPoolString": {
      "type": "string",
      "format": "password"
    },
    "externalConnectionPoolString": {
      "type": "string",
      "format": "password"
    },
    "psqlCommand": {
      "type": "string",
      "format": "password"
    }
  },
  "title": "postgresConnectionInfo",
  "x-readme-ref-name": "postgresConnectionInfo",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default PostgresConnectionInfo
