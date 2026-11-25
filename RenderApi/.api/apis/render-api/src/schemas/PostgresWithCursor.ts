import Cursor from './Cursor.js';
import Postgres from './Postgres.js';

const PostgresWithCursor = {
  "type": "object",
  "required": [
    "postgres",
    "cursor"
  ],
  "properties": {
    "postgres": Postgres,
    "cursor": Cursor
  },
  "title": "postgresWithCursor",
  "x-readme-ref-name": "postgresWithCursor"
} as const;
export default PostgresWithCursor
