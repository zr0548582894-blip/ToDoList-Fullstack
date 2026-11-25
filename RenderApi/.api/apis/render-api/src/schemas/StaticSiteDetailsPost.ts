import CidrBlockAndDescription from './CidrBlockAndDescription.js';
import HeaderInput from './HeaderInput.js';
import Previews from './Previews.js';
import PullRequestPreviewsEnabled from './PullRequestPreviewsEnabled.js';
import RenderSubdomainPolicy from './RenderSubdomainPolicy.js';
import RoutePost from './RoutePost.js';

const StaticSiteDetailsPost = {
  "type": "object",
  "properties": {
    "buildCommand": {
      "type": "string"
    },
    "headers": {
      "type": "array",
      "items": HeaderInput
    },
    "publishPath": {
      "type": "string",
      "description": "Defaults to \"public\""
    },
    "pullRequestPreviewsEnabled": PullRequestPreviewsEnabled,
    "previews": Previews,
    "routes": {
      "type": "array",
      "items": RoutePost
    },
    "renderSubdomainPolicy": RenderSubdomainPolicy,
    "ipAllowList": {
      "type": "array",
      "items": CidrBlockAndDescription
    }
  },
  "title": "staticSiteDetailsPOST",
  "x-readme-ref-name": "staticSiteDetailsPOST"
} as const;
export default StaticSiteDetailsPost
