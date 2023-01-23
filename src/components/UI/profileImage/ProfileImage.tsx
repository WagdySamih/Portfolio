import Image from "next/image";

import styles from "./ProfileImage.module.scss";

type Props = {
  className?: string;
  imagePath: string;
  alt: string;
};

const ProfileImage: React.FC<Props> = ({ imagePath, alt }) => {
  return (
    <picture className={`${styles.container}`}>
      <Image src={imagePath} alt={alt} layout="fill" priority />
    </picture>
  );
};

export default ProfileImage;
