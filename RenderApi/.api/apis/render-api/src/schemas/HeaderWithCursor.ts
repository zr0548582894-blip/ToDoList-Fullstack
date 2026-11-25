import Header from './Header.js';

const HeaderWithCursor = {
  "type": "object",
  "required": [
    "header",
    "cursor"
  ],
  "properties": {
    "header": Header,
    "cursor": {
      "type": "string"
    }
  },
  "title": "headerWithCursor",
  "x-readme-ref-name": "headerWithCursor"
} as const;
export default HeaderWithCursor
