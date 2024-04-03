import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <section className={styles.fRAMEParent}>
      <div className={styles.fRAME}>
        <div className={styles.childrenContainersParent}>
          <div className={styles.childrenContainers}>
            <img
              className={styles.smilingChefCartoonCharacterIcon}
              loading="lazy"
              alt=""
              src="/smilingchefcartooncharacterholding600nw754199197-1@2x.png"
            />
          </div>
          <img
            className={styles.untitled1Icon}
            loading="lazy"
            alt=""
            src="/untitled-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.linkContainer}>
          <img className={styles.searchIcon} alt="" src="/search.svg" />
        </div>
        <input className={styles.search} placeholder="Search" type="text" />
      </div>
    </section>
  );
};

export default FrameComponent1;
