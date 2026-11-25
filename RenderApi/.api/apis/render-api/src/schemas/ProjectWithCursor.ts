import Cursor from './Cursor.js';
import Project from './Project.js';

const ProjectWithCursor = {
  "type": "object",
  "required": [
    "project",
    "cursor"
  ],
  "properties": {
    "project": Project,
    "cursor": Cursor
  },
  "title": "projectWithCursor",
  "x-readme-ref-name": "projectWithCursor"
} as const;
export default ProjectWithCursor
