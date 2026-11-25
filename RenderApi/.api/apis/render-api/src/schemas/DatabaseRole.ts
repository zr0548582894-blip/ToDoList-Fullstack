const DatabaseRole = {
  "type": "string",
  "enum": [
    "primary",
    "replica"
  ],
  "title": "databaseRole",
  "x-readme-ref-name": "databaseRole",
  "description": "`primary` `replica`"
} as const;
export default DatabaseRole
