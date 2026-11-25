import TeamMemberRole from './TeamMemberRole.js';

const TeamMember = {
  "type": "object",
  "required": [
    "userId",
    "name",
    "email",
    "status",
    "role",
    "mfaEnabled"
  ],
  "properties": {
    "userId": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "status": {
      "type": "string",
      "enum": [
        "active",
        "inactive"
      ],
      "description": "`active` `inactive`"
    },
    "role": TeamMemberRole,
    "mfaEnabled": {
      "type": "boolean"
    }
  },
  "title": "teamMember",
  "x-readme-ref-name": "teamMember",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default TeamMember
