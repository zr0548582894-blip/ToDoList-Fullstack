import Cursor from './Cursor.js';
import Service from './Service.js';

const ServiceWithCursor = {
  "type": "object",
  "required": [
    "service",
    "cursor"
  ],
  "properties": {
    "service": Service,
    "cursor": Cursor
  },
  "title": "serviceWithCursor",
  "x-readme-ref-name": "serviceWithCursor"
} as const;
export default ServiceWithCursor
