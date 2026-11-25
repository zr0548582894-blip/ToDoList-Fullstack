const ReadReplica = {
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "The replica instance identifier."
    },
    "name": {
      "type": "string",
      "description": "The display name of the replica instance."
    }
  },
  "required": [
    "id",
    "name"
  ],
  "title": "readReplica",
  "x-readme-ref-name": "readReplica"
} as const;
export default ReadReplica
