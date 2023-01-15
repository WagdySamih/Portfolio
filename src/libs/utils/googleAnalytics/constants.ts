export declare var window: Window;
interface Window {
  gtag: Function;
}

export interface Event {
  action: EVENT_ACTION_TYPE;
  params?: {
    socialMediaType: SOCIAL_MEDIA_TYPE;
  };
}

export enum EVENT_ACTION_TYPE {
  DOWNLOAD_CV = "DOWNLOAD_CV",
  OPEN_SOCIAL_MEDIA = "OPEN_SOCIAL_MEDIA",
}

export enum SOCIAL_MEDIA_TYPE {
  LINKEDIN = "LINKEDIN",
  GITHUB = "GITHUB",
  EMAIL = "EMAIL",
  FACEBOOK = "FACEBOOK",
}
