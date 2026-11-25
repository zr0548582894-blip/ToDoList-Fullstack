import Cursor from './Cursor.js';
import Owner from './Owner.js';

const OwnerWithCursor = {
  "type": "object",
  "properties": {
    "owner": Owner,
    "cursor": Cursor
  },
  "title": "ownerWithCursor",
  "x-readme-ref-name": "ownerWithCursor"
} as const;
export default OwnerWithCursor
