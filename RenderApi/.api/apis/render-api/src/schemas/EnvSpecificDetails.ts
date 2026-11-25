import DockerDetails from './DockerDetails.js';
import NativeEnvironmentDetails from './NativeEnvironmentDetails.js';

const EnvSpecificDetails = {
  "oneOf": [
    DockerDetails,
    NativeEnvironmentDetails
  ],
  "title": "envSpecificDetails",
  "x-readme-ref-name": "envSpecificDetails"
} as const;
export default EnvSpecificDetails
