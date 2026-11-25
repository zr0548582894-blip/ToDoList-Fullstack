const NativeEnvironmentDetailsPost = {
  "type": "object",
  "required": [
    "buildCommand",
    "startCommand"
  ],
  "properties": {
    "buildCommand": {
      "type": "string"
    },
    "startCommand": {
      "type": "string"
    }
  },
  "description": "Fields for native environment (runtime) services",
  "title": "nativeEnvironmentDetailsPOST",
  "x-readme-ref-name": "nativeEnvironmentDetailsPOST"
} as const;
export default NativeEnvironmentDetailsPost
