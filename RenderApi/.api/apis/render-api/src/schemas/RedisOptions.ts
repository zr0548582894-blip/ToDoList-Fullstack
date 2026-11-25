import PersistenceMode from './PersistenceMode.js';

const RedisOptions = {
  "description": "Options for a Redis instance",
  "type": "object",
  "properties": {
    "maxmemoryPolicy": {
      "type": "string"
    },
    "persistenceMode": PersistenceMode
  },
  "title": "redisOptions",
  "x-readme-ref-name": "redisOptions"
} as const;
export default RedisOptions
