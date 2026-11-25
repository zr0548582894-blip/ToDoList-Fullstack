import DockerDetailsPatch from './DockerDetailsPatch.js';
import NativeEnvironmentDetailsPatch from './NativeEnvironmentDetailsPatch.js';

const EnvSpecificDetailsPatch = {
  "oneOf": [
    DockerDetailsPatch,
    NativeEnvironmentDetailsPatch
  ],
  "title": "envSpecificDetailsPATCH",
  "x-readme-ref-name": "envSpecificDetailsPATCH"
} as const;
export default EnvSpecificDetailsPatch
