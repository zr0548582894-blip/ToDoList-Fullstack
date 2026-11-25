import TeamMember from './TeamMember.js';

const TeamMembers = {
  "type": "array",
  "items": TeamMember,
  "title": "teamMembers",
  "x-readme-ref-name": "teamMembers",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default TeamMembers
