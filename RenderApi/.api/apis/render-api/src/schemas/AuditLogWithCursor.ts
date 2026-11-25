import AuditLog from './AuditLog.js';
import Cursor from './Cursor.js';

const AuditLogWithCursor = {
  "type": "object",
  "required": [
    "cursor",
    "auditLog"
  ],
  "properties": {
    "cursor": Cursor,
    "auditLog": AuditLog
  },
  "title": "auditLogWithCursor",
  "x-readme-ref-name": "auditLogWithCursor"
} as const;
export default AuditLogWithCursor
