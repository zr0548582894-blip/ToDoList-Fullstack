import Cursor from './Cursor.js';
import KeyValue from './KeyValue.js';

const KeyValueWithCursor = {
  "type": "object",
  "required": [
    "keyValue",
    "cursor"
  ],
  "properties": {
    "keyValue": KeyValue,
    "cursor": Cursor
  },
  "title": "keyValueWithCursor",
  "x-readme-ref-name": "keyValueWithCursor"
} as const;
export default KeyValueWithCursor
