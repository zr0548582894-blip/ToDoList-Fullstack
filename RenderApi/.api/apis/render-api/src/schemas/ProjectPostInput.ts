import ProjectPostEnvironmentInput from './ProjectPostEnvironmentInput.js';

const ProjectPostInput = {
  "type": "object",
  "required": [
    "name",
    "ownerId",
    "environments"
  ],
  "properties": {
    "name": {
      "description": "The name of the project",
      "type": "string"
    },
    "ownerId": {
      "description": "The ID of the owner that the project belongs to",
      "type": "string"
    },
    "environments": {
      "description": "The environments to create when creating the project",
      "type": "array",
      "items": ProjectPostEnvironmentInput
    }
  },
  "title": "projectPOSTInput",
  "x-readme-ref-name": "projectPOSTInput",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default ProjectPostInput
