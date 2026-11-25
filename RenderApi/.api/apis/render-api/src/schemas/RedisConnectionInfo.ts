const RedisConnectionInfo = {
  "type": "object",
  "description": "A Redis instance",
  "required": [
    "internalConnectionString",
    "externalConnectionString",
    "redisCLICommand"
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
    "redisCLICommand": {
      "description": "The Redis CLI command to connect to the Redis instance",
      "type": "string",
      "format": "password"
    }
  },
  "title": "redisConnectionInfo",
  "x-readme-ref-name": "redisConnectionInfo",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default RedisConnectionInfo
