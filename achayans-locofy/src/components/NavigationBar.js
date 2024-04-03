import { useCallback } from "react";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  const onViewAllClick = useCallback(() => {
    // Please sync "burger" to the project
  }, []);

  const onAboutLinkClick = useCallback(() => {
    // Please sync "biriyani" to the project
  }, []);

  const onImageRemovebgPreview21Click = useCallback(() => {
    // Please sync "shawarma" to the project
  }, []);

  const onRectangleClick = useCallback(() => {
    // Please sync "mandhi" to the project
  }, []);

  const onCopyrightSymbolClick = useCallback(() => {
    // Please sync "pizza" to the project
  }, []);

  const onImageRemovebgPreview61Click = useCallback(() => {
    // Please sync "juice" to the project
  }, []);

  const onImageRemovebgPreview81Click = useCallback(() => {
    // Please sync "milkshake" to the project
  }, []);

  const onRectangle2Click = useCallback(() => {
    // Please sync "cake" to the project
  }, []);

  return (
    <section className={styles.navigationBar}>
      <div className={styles.searchBoxParent}>
        <nav className={styles.searchBox}>
          <div className={styles.searchIcon}>
            <div className={styles.menuList}>
              <button className={styles.menuItem}>
                <div className={styles.menuItemChild} />
                <img
                  className={styles.menuItemItem}
                  alt=""
                  src="/ellipse-2@2x.png"
                />
              </button>
            </div>
            <div className={styles.all}>All</div>
          </div>
          <div className={styles.searchIcon1}>
            <div className={styles.searchIconInner}>
              <button className={styles.viewAllParent}>
                <div className={styles.viewAll} onClick={onViewAllClick} />
                <img
                  className={styles.burgerSandwich1Icon}
                  alt=""
                  src="/burger-sandwich-1@2x.png"
                />
              </button>
            </div>
            <div className={styles.burger}>Burger</div>
          </div>
          <div className={styles.logo}>
            <div className={styles.homeLink}>
              <div className={styles.aboutLink} onClick={onAboutLinkClick} />
            </div>
            <div className={styles.biriyani}>Biriyani</div>
          </div>
          <div className={styles.searchIcon2}>
            <div className={styles.searchIconChild}>
              <button className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.imageRemovebgPreview21}
                  alt=""
                  src="/imageremovebgpreview-2-1@2x.png"
                  onClick={onImageRemovebgPreview21Click}
                />
              </button>
            </div>
            <div className={styles.shawarma}>Shawarma</div>
          </div>
        </nav>
        <div className={styles.serviceBoxes}>
          <div className={styles.serviceIcon}>
            <img
              className={styles.imageRemovebgPreview91}
              loading="lazy"
              alt=""
              src="/imageremovebgpreview-9-1@2x.png"
            />
          </div>
          <div className={styles.mandi}>Mandi</div>
        </div>
        <img
          className={styles.imageRemovebgPreview41}
          loading="lazy"
          alt=""
          src="/imageremovebgpreview-4-1@2x.png"
        />
        <div className={styles.callToAction}>
          <div
            className={styles.callToActionChild}
            onClick={onRectangleClick}
          />
        </div>
        <div className={styles.footerContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.socialLinks}>
              <div className={styles.copyrightSymbolParent}>
                <div
                  className={styles.copyrightSymbol}
                  onClick={onCopyrightSymbolClick}
                />
                <img
                  className={styles.backgroundImageIcon}
                  loading="lazy"
                  alt=""
                  src="/3626-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.pizza}>Pizza</div>
          </div>
          <div className={styles.contactInfo1}>
            <div className={styles.contactInfoInner}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <img
                  className={styles.imageRemovebgPreview61}
                  loading="lazy"
                  alt=""
                  src="/imageremovebgpreview-6-1@2x.png"
                  onClick={onImageRemovebgPreview61Click}
                />
              </div>
            </div>
            <div className={styles.juice}>Juice</div>
          </div>
          <div className={styles.contactInfo2}>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <img
                className={styles.imageRemovebgPreview81}
                loading="lazy"
                alt=""
                src="/imageremovebgpreview-8-1@2x.png"
                onClick={onImageRemovebgPreview81Click}
              />
            </div>
            <div className={styles.milkshake}>Milkshake</div>
          </div>
        </div>
        <div className={styles.overlayLayer}>
          <div className={styles.frameDiv}>
            <div className={styles.rectangleDiv} onClick={onRectangle2Click} />
            <img
              className={styles.noBakeLindtBallCheesecakeIcon}
              alt=""
              src="/nobakelindtballcheesecakerecipe5237071-1@2x.png"
            />
          </div>
          <div className={styles.desserts}>Desserts</div>
        </div>
      </div>
    </section>
  );
};

export default NavigationBar;
