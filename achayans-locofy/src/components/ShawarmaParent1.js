import { useCallback } from "react";
import styles from "./ShawarmaParent1.module.css";

const ShawarmaParent1 = () => {
  const onImageRemovebgPreview22Click = useCallback(() => {
    // Please sync "shawarma" to the project
  }, []);

  return (
    <div className={styles.shawarmaParent}>
      <div className={styles.shawarmaParentChild} />
      <div className={styles.shawarma}>Shawarma</div>
      <div className={styles.chickenMandiBox}>
        <div className={styles.rupeeParent}>
          <img
            className={styles.rupeeIcon}
            loading="lazy"
            alt=""
            src="/rupee@2x.png"
          />
          <div className={styles.addCircleButton}>
            <div className={styles.removeImageBtn}>150</div>
          </div>
        </div>
        <div className={styles.mandiBox}>
          <img
            className={styles.addCircleIcon}
            loading="lazy"
            alt=""
            src="/add-circle.svg"
          />
        </div>
      </div>
      <img
        className={styles.imageRemovebgPreview22}
        loading="lazy"
        alt=""
        src="/imageremovebgpreview-2-2@2x.png"
        onClick={onImageRemovebgPreview22Click}
      />
    </div>
  );
};

export default ShawarmaParent1;
