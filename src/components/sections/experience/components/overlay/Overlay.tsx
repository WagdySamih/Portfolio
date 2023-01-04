import { Corner } from "@assets";

import styles from "./Overlay.module.scss";

const Overlay = () => {
  return (
    <div className={styles.overlay}>
      <Corner id={"1"} className={styles.topLeft} />
      <Corner id={"2"} className={styles.bottomRight} />
    </div>
  );
};

export default Overlay;
