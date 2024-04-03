import { useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import NavigationBar from "../components/NavigationBar";
import FrameComponent from "../components/FrameComponent";
import AddCircle from "../components/AddCircle";
import ShawarmaParent1 from "../components/ShawarmaParent1";
import ShawarmaParent from "../components/ShawarmaParent";
import styles from "./Menu.module.css";

const Menu = () => {
  const onImageRemovebgPreview101Click = useCallback(() => {
    // Please sync "milkshake" to the project
  }, []);

  return (
    <div className={styles.menu}>
      <main className={styles.mainContainer}>
        <FrameComponent1 />
        <NavigationBar />
        <FrameComponent />
        <AddCircle />
      </main>
      <div className={styles.shawarmaBox}>
        <div className={styles.shawarmaParentParent}>
          <ShawarmaParent1 />
          <ShawarmaParent />
        </div>
      </div>
      <div className={styles.imageRemovebgPreview101Parent}>
        <img
          className={styles.imageRemovebgPreview101}
          alt=""
          src="/imageremovebgpreview-10-1@2x.png"
          onClick={onImageRemovebgPreview101Click}
        />
        <img
          className={styles.layoutResizeCustom}
          alt=""
          src="/layout-resize-custom@2x.png"
        />
      </div>
    </div>
  );
};

export default Menu;
