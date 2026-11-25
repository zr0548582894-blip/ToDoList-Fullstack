const ServiceEnv = {
  "type": "string",
  "enum": [
    "docker",
    "elixir",
    "go",
    "node",
    "python",
    "ruby",
    "rust",
    "image"
  ],
  "deprecated": true,
  "description": "This field has been deprecated, runtime should be used in its place.\n\n`docker` `elixir` `go` `node` `python` `ruby` `rust` `image`",
  "title": "serviceEnv",
  "x-readme-ref-name": "serviceEnv"
} as const;
export default ServiceEnv
