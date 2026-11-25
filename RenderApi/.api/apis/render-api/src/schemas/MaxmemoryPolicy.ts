const MaxmemoryPolicy = {
  "type": "string",
  "description": "The eviction policy for the Key Value instance",
  "enum": [
    "noeviction",
    "allkeys_lfu",
    "allkeys_lru",
    "allkeys_random",
    "volatile_lfu",
    "volatile_lru",
    "volatile_random",
    "volatile_ttl"
  ],
  "title": "maxmemoryPolicy",
  "x-readme-ref-name": "maxmemoryPolicy"
} as const;
export default MaxmemoryPolicy
