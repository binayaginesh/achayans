import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.mainContainerInner}>
      <div className={styles.promotionsParent}>
        <div className={styles.promotions}>Promotions</div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameWrapper}>
            <div className={styles.iconsLibraryParent}>
              <div className={styles.iconsLibrary}>
                <div className={styles.todaysOffer}>Today’s Offer</div>
                <div className={styles.freeBoxOf}>Free box of Fries</div>
              </div>
              <div className={styles.onAllOrders}>on all orders above 500</div>
            </div>
          </div>
          <img
            className={styles.frenchFriesB9e3e0c1Icon}
            loading="lazy"
            alt=""
            src="/frenchfriesb9e3e0c-1@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
