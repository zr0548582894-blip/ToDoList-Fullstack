import DockerDetailsPost from './DockerDetailsPost.js';
import NativeEnvironmentDetailsPost from './NativeEnvironmentDetailsPost.js';

const EnvSpecificDetailsPost = {
  "oneOf": [
    DockerDetailsPost,
    NativeEnvironmentDetailsPost
  ],
  "title": "envSpecificDetailsPOST",
  "x-readme-ref-name": "envSpecificDetailsPOST"
} as const;
export default EnvSpecificDetailsPost
