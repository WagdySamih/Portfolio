
import styles from "./Logo.module.scss"
const Logo = () => {
  return (
    <div className={styles.container}>
      <svg width="0" height="0">
        <defs>
          <clipPath id="hexagon-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.5 0, 1 0.25, 1 0.75, 0.5 1, 0 0.75, 0, 0.25z" />
          </clipPath>
        </defs>
      </svg>
      <div className={`${styles.hexagon} ${styles['gradient-border']}`}>
        <div className={styles["hexagon-inner"]}>
          <span className={styles.text}>M</span>
        </div>
      </div>
    </div>
  )
}
export default Logo