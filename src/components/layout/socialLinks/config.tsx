import { FacebookIcon, GitHubIcon, LinkedInIcon } from "@assets";
import { onFacebookClick, onGithubClick, onLinkedinClick } from "@libs";

export const socialLinks = [
  {
    link: "https://github.com/WagdySamih",
    onClick: onGithubClick,
    icon: <GitHubIcon />,
    "aria-label": "Github",
  },
  {
    link: "https://www.linkedin.com/in/wagdy-samih",
    onClick: onLinkedinClick,
    icon: <LinkedInIcon />,
    "aria-label": "Linkedin",
  },
  {
    link: "https://www.facebook.com/profile.php?id=100006375610497",
    onClick: onFacebookClick,
    icon: <FacebookIcon />,
    "aria-label": "Facebook",
  },
];
