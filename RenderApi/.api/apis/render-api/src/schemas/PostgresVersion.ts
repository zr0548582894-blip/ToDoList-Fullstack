const PostgresVersion = {
  "type": "string",
  "description": "The PostgreSQL version\n\n`11` `12` `13` `14` `15` `16` `17` `18`",
  "enum": [
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18"
  ],
  "title": "postgresVersion",
  "x-readme-ref-name": "postgresVersion"
} as const;
export default PostgresVersion
