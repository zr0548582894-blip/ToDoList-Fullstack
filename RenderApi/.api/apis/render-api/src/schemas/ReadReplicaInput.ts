const ReadReplicaInput = {
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The display name of the replica instance."
    }
  },
  "required": [
    "name"
  ],
  "title": "readReplicaInput",
  "x-readme-ref-name": "readReplicaInput"
} as const;
export default ReadReplicaInput
