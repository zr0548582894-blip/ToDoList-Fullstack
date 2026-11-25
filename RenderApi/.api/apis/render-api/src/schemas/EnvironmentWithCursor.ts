import Cursor from './Cursor.js';
import Environment from './Environment.js';

const EnvironmentWithCursor = {
  "type": "object",
  "description": "An environment with a cursor",
  "required": [
    "environment",
    "cursor"
  ],
  "properties": {
    "environment": Environment,
    "cursor": Cursor
  },
  "title": "environmentWithCursor",
  "x-readme-ref-name": "environmentWithCursor"
} as const;
export default EnvironmentWithCursor
