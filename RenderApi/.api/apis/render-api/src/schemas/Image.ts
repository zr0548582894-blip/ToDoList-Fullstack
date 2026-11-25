const Image = {
  "type": "object",
  "required": [
    "imagePath",
    "ownerId"
  ],
  "properties": {
    "ownerId": {
      "type": "string",
      "description": "The ID of the owner for this image. This should match the owner of the service as well as the owner of any specified registry credential."
    },
    "registryCredentialId": {
      "type": "string",
      "description": "Optional reference to the registry credential passed to the image repository to retrieve this image."
    },
    "imagePath": {
      "type": "string",
      "description": "Path to the image used for this server (e.g docker.io/library/nginx:latest)."
    }
  },
  "title": "image",
  "x-readme-ref-name": "image"
} as const;
export default Image
