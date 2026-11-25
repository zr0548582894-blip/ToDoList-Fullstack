const KeyValueConnectionInfo = {
  "type": "object",
  "description": "A Key Value instance",
  "required": [
    "internalConnectionString",
    "externalConnectionString",
    "cliCommand"
  ],
  "properties": {
    "internalConnectionString": {
      "description": "The connection string to use from within Render",
      "type": "string"
    },
    "externalConnectionString": {
      "description": "The connection string to use from outside Render",
      "type": "string",
      "format": "password"
    },
    "cliCommand": {
      "description": "The CLI (redis-cli or valkey-cli) command to connect to the Key Value instance",
      "type": "string",
      "format": "password"
    }
  },
  "title": "keyValueConnectionInfo",
  "x-readme-ref-name": "keyValueConnectionInfo",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default KeyValueConnectionInfo
