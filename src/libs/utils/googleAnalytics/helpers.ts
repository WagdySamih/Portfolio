import { event as gaEvent } from "./setup";
import { SOCIAL_MEDIA_TYPE, EVENT_ACTION_TYPE } from "./constants";

export const onCVDownload = () => {
  gaEvent({
    action: EVENT_ACTION_TYPE.DOWNLOAD_CV,
  });
};

export const onEmailClick = () => {
  onSocialMediaView(SOCIAL_MEDIA_TYPE.EMAIL);
};

export const onGithubClick = () => {
  onSocialMediaView(SOCIAL_MEDIA_TYPE.GITHUB);
};

export const onLinkedinClick = () => {
  onSocialMediaView(SOCIAL_MEDIA_TYPE.LINKEDIN);
};

export const onFacebookClick = () => {
  onSocialMediaView(SOCIAL_MEDIA_TYPE.FACEBOOK);
};

const onSocialMediaView = (socialMediaType: SOCIAL_MEDIA_TYPE) => {
  gaEvent({
    action: EVENT_ACTION_TYPE.OPEN_SOCIAL_MEDIA,
    params: {
      socialMediaType,
    },
  });
};
