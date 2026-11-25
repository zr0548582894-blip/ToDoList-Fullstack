import Plan from './Plan.js';

const PreviewInput = {
  "type": "object",
  "required": [
    "imagePath"
  ],
  "properties": {
    "imagePath": {
      "type": "string",
      "description": "Must be either a full URL or the relative path to an image. If a relative path, Render uses the base service's image URL as its root. For example, if the base service's image URL is `docker.io/library/nginx:latest`, then valid values are: `docker.io/library/nginx:<any tag or SHA>`, `library/nginx:<any tag or SHA>`, or `nginx:<any tag or SHA>`. Note that the path must match (only the tag or SHA can vary).",
      "examples": [
        "docker.io/library/nginx:latest"
      ]
    },
    "name": {
      "type": "string",
      "description": "A name for the service preview instance. If not specified, Render generates the name using the base service's name and the specified tag or SHA.",
      "examples": [
        "preview"
      ]
    },
    "plan": Plan
  },
  "title": "previewInput",
  "x-readme-ref-name": "previewInput",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default PreviewInput
