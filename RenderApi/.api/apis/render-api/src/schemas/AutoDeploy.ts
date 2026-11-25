const AutoDeploy = {
  "type": "string",
  "enum": [
    "yes",
    "no"
  ],
  "default": "yes",
  "deprecated": true,
  "description": "Deprecated: use `autoDeployTrigger` instead. You can't set both `autoDeploy` and `autoDeployTrigger` in the same request.\n\n- `yes` is equivalent to `autoDeployTrigger: commit`.\n- `no` is equivalent to `autoDeployTrigger: off`.\n\n\n`yes` `no`",
  "title": "autoDeploy",
  "x-readme-ref-name": "autoDeploy"
} as const;
export default AutoDeploy
