import Cursor from './Cursor.js';
import SecretFile from './SecretFile.js';

const SecretFileWithCursor = {
  "type": "object",
  "required": [
    "secretFile",
    "cursor"
  ],
  "properties": {
    "secretFile": SecretFile,
    "cursor": Cursor
  },
  "title": "secretFileWithCursor",
  "x-readme-ref-name": "secretFileWithCursor"
} as const;
export default SecretFileWithCursor
