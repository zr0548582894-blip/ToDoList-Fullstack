import DeployWithCursor from './DeployWithCursor.js';

const DeployList = {
  "type": "array",
  "items": DeployWithCursor,
  "title": "deployList",
  "x-readme-ref-name": "deployList",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default DeployList
