import PersistenceMode from './PersistenceMode.js';

const KeyValueOptions = {
  "description": "Options for a Key Value instance",
  "type": "object",
  "properties": {
    "maxmemoryPolicy": {
      "type": "string"
    },
    "persistenceMode": PersistenceMode
  },
  "title": "keyValueOptions",
  "x-readme-ref-name": "keyValueOptions"
} as const;
export default KeyValueOptions
