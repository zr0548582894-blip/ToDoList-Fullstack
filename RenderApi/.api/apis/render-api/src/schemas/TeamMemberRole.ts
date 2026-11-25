const TeamMemberRole = {
  "type": "string",
  "description": "The member's workspace role. Values are always returned in uppercase.",
  "enum": [
    "ADMIN",
    "DEVELOPER",
    "WORKSPACE_CONTRIBUTOR",
    "WORKSPACE_BILLING",
    "WORKSPACE_VIEWER"
  ],
  "title": "teamMemberRole",
  "x-readme-ref-name": "teamMemberRole",
  "examples": [
    "DEVELOPER"
  ]
} as const;
export default TeamMemberRole
