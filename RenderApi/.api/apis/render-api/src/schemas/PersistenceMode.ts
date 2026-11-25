const PersistenceMode = {
  "type": "string",
  "description": "The persistence mode for the Key Value instance. The default for paid instances is journal_snapshot (both journaling and snapshots). Only turn off persistence if you're using this Key Value instance as a cache and are okay with losing data. Free instances do not have persistence.\n\n`journal_snapshot` `snapshot` `off`",
  "enum": [
    "journal_snapshot",
    "snapshot",
    "off"
  ],
  "title": "persistenceMode",
  "x-readme-ref-name": "persistenceMode"
} as const;
export default PersistenceMode
