import Cursor from './Cursor.js';
import Deploy from './Deploy.js';

const DeployWithCursor = {
  "type": "object",
  "properties": {
    "deploy": Deploy,
    "cursor": Cursor
  },
  "title": "deployWithCursor",
  "x-readme-ref-name": "deployWithCursor"
} as const;
export default DeployWithCursor
