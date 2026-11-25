import BuildPlan from './BuildPlan.js';
import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import Previews from './Previews.js';
import PullRequestPreviewsEnabled from './PullRequestPreviewsEnabled.js';
import RenderSubdomainPolicy from './RenderSubdomainPolicy.js';
import Resource from './Resource.js';

const StaticSiteDetails = {
  "type": "object",
  "required": [
    "buildCommand",
    "publishPath",
    "url",
    "buildPlan"
  ],
  "properties": {
    "buildCommand": {
      "type": "string"
    },
    "ipAllowList": {
      "type": "array",
      "items": CidrBlockAndDescription
    },
    "parentServer": Resource,
    "publishPath": {
      "type": "string"
    },
    "pullRequestPreviewsEnabled": PullRequestPreviewsEnabled,
    "previews": Previews,
    "url": {
      "type": "string"
    },
    "buildPlan": BuildPlan,
    "renderSubdomainPolicy": RenderSubdomainPolicy
  },
  "title": "staticSiteDetails",
  "x-readme-ref-name": "staticSiteDetails"
} as const;
export default StaticSiteDetails
