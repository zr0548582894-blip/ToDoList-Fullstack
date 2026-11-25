import EnvVarGenerateValue from './EnvVarGenerateValue.js';
import EnvVarValue from './EnvVarValue.js';

const AddUpdateEnvVarInput = {
  "type": "object",
  "oneOf": [
    EnvVarValue,
    EnvVarGenerateValue
  ],
  "title": "addUpdateEnvVarInput",
  "x-readme-ref-name": "addUpdateEnvVarInput",
  "$schema": "http://json-schema.org/draft-04/schema#"
} as const;
export default AddUpdateEnvVarInput
