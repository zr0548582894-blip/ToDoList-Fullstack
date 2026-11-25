import Cursor from './Cursor.js';
import Redis from './Redis.js';

const RedisWithCursor = {
  "type": "object",
  "required": [
    "redis",
    "cursor"
  ],
  "properties": {
    "redis": Redis,
    "cursor": Cursor
  },
  "title": "redisWithCursor",
  "x-readme-ref-name": "redisWithCursor"
} as const;
export default RedisWithCursor
