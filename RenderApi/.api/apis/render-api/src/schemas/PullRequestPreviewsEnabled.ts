const PullRequestPreviewsEnabled = {
  "type": "string",
  "enum": [
    "yes",
    "no"
  ],
  "default": "no",
  "deprecated": true,
  "description": "This field has been deprecated. previews.generation should be used in its place.\n\n`yes` `no`",
  "title": "pullRequestPreviewsEnabled",
  "x-readme-ref-name": "pullRequestPreviewsEnabled"
} as const;
export default PullRequestPreviewsEnabled
