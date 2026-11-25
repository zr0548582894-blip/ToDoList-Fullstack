import Cursor from './Cursor.js';
import EnvVar from './EnvVar.js';

const EnvVarWithCursor = {
  "type": "object",
  "required": [
    "envVar",
    "cursor"
  ],
  "properties": {
    "envVar": EnvVar,
    "cursor": Cursor
  },
  "title": "envVarWithCursor",
  "x-readme-ref-name": "envVarWithCursor"
} as const;
export default EnvVarWithCursor
