const ProtectedStatus = {
  "type": "string",
  "description": "Indicates whether an environment is `unprotected` or `protected`. Only admin users can perform destructive actions in `protected` environments.",
  "enum": [
    "unprotected",
    "protected"
  ],
  "title": "protectedStatus",
  "x-readme-ref-name": "protectedStatus"
} as const;
export default ProtectedStatus
