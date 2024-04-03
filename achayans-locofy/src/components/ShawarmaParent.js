import { useCallback } from "react";
import styles from "./ShawarmaParent.module.css";

const ShawarmaParent = () => {
  const onRectangleClick = useCallback(() => {
    // Please sync "mandhi" to the project
  }, []);

  const onImageRemovebgPreview93Click = useCallback(() => {
    // Please sync "mandhi" to the project
  }, []);

  return (
    <div className={styles.shawarmaParent}>
      <div className={styles.shawarmaParentChild} onClick={onRectangleClick} />
      <div className={styles.shawarmaParentInner}>
        <div className={styles.chickenMandiParent}>
          <div className={styles.chickenMandi}>Chicken Mandi</div>
          <img
            className={styles.addCircleIcon}
            loading="lazy"
            alt=""
            src="/add-circle.svg"
          />
          <img
            className={styles.imageRemovebgPreview93}
            loading="lazy"
            alt=""
            src="/imageremovebgpreview-9-3@2x.png"
            onClick={onImageRemovebgPreview93Click}
          />
        </div>
      </div>
      <div className={styles.rupeeParent}>
        <img
          className={styles.rupeeIcon}
          loading="lazy"
          alt=""
          src="/rupee@2x.png"
        />
        <div className={styles.currencyChild}>
          <div className={styles.emptySlot}>150</div>
        </div>
      </div>
    </div>
  );
};

export default ShawarmaParent;
