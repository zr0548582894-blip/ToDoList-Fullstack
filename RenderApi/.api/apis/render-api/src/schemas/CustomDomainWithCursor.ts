import Cursor from './Cursor.js';
import CustomDomain from './CustomDomain.js';

const CustomDomainWithCursor = {
  "required": [
    "customDomain",
    "cursor"
  ],
  "type": "object",
  "properties": {
    "customDomain": CustomDomain,
    "cursor": Cursor
  },
  "title": "customDomainWithCursor",
  "x-readme-ref-name": "customDomainWithCursor"
} as const;
export default CustomDomainWithCursor
