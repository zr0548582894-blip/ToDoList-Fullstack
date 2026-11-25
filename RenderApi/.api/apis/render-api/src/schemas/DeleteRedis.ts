const DeleteRedis = {
  "metadata": {
    "allOf": [
      {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "redisId": {
            "type": "string"
          }
        },
        "required": [
          "redisId"
        ]
      }
    ]
  }
} as const;
export default DeleteRedis
