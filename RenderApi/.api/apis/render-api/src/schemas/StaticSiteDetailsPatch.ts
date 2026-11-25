import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import Previews from './Previews.js';
import PullRequestPreviewsEnabled from './PullRequestPreviewsEnabled.js';
import RenderSubdomainPolicy from './RenderSubdomainPolicy.js';

const StaticSiteDetailsPatch = {
  "type": "object",
  "properties": {
    "buildCommand": {
      "type": "string"
    },
    "publishPath": {
      "type": "string"
    },
    "pullRequestPreviewsEnabled": PullRequestPreviewsEnabled,
    "previews": Previews,
    "renderSubdomainPolicy": RenderSubdomainPolicy,
    "ipAllowList": {
      "type": "array",
      "items": CidrBlockAndDescription
    }
  },
  "title": "staticSiteDetailsPATCH",
  "x-readme-ref-name": "staticSiteDetailsPATCH"
} as const;
export default StaticSiteDetailsPatch
