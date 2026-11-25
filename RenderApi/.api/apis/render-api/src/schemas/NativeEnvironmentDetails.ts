const NativeEnvironmentDetails = {
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
    },
    "preDeployCommand": {
      "type": "string"
    }
  },
  "title": "nativeEnvironmentDetails",
  "x-readme-ref-name": "nativeEnvironmentDetails"
} as const;
export default NativeEnvironmentDetails
