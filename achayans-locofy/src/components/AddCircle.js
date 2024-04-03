import { useCallback } from "react";
import styles from "./AddCircle.module.css";

const AddCircle = () => {
  const onBackgroundImageClick = useCallback(() => {
    // Please sync "burger" to the project
  }, []);

  const onPizzaFries1ImageClick = useCallback(() => {
    // Please sync "pizzafries" to the project
  }, []);

  const onImageRemovebgPreview41Click = useCallback(() => {
    // Please sync "R.biriyani" to the project
  }, []);

  return (
    <section className={styles.addCircle}>
      <div className={styles.chickenBiriyaniLabel}>
        <div className={styles.popular}>Popular</div>
        <div className={styles.milkshakeLabel}>
          <div className={styles.rupeeSign}>
            <div className={styles.chickensign}>
              <div
                className={styles.backgroundImage}
                onClick={onBackgroundImageClick}
              />
              <img
                className={styles.burgerSandwich2Icon}
                loading="lazy"
                alt=""
                src="/burger-sandwich-2@2x.png"
              />
              <div className={styles.figmaLogoWrapper}>
                <div className={styles.figmaLogo}>
                  <div className={styles.beefBurgerWrapper}>
                    <div className={styles.beefBurger}>Beef Burger</div>
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.rupeeParent}>
                      <img
                        className={styles.rupeeIcon}
                        loading="lazy"
                        alt=""
                        src="/rupee@2x.png"
                      />
                      <div className={styles.circle}>
                        <div className={styles.div}>100</div>
                      </div>
                    </div>
                    <div className={styles.addcircleButton}>
                      <img
                        className={styles.addCircleIcon}
                        loading="lazy"
                        alt=""
                        src="/add-circle.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pizzaFriesParent}>
              <div className={styles.pizzaFries}>Pizza Fries</div>
              <div className={styles.frameChild} />
              <img
                className={styles.pizzaFries1Icon}
                loading="lazy"
                alt=""
                src="/pizzafries-1@2x.png"
                onClick={onPizzaFries1ImageClick}
              />
              <div className={styles.priceDisplayParent}>
                <div className={styles.priceDisplay}>
                  <div className={styles.totalLabel}>
                    <img
                      className={styles.rupeeIcon1}
                      loading="lazy"
                      alt=""
                      src="/rupee@2x.png"
                    />
                    <div className={styles.coffeeMilkshakeLabel}>
                      <div className={styles.addCartButton}>340</div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.addCircleIcon1}
                  loading="lazy"
                  alt=""
                  src="/add-circle.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.checkoutLabelParent}>
            <div className={styles.checkoutLabel}>
              <div className={styles.checkoutLabelChild} />
              <img
                className={styles.imageRemovebgPreview41}
                loading="lazy"
                alt=""
                src="/imageremovebgpreview-4-1-1@2x.png"
                onClick={onImageRemovebgPreview41Click}
              />
              <div className={styles.rupeeValue}>
                <div className={styles.totalAmountLabel}>
                  <div className={styles.chickenBiriyani}>Chicken Biriyani</div>
                </div>
                <div className={styles.subtotalLabel}>
                  <div className={styles.taxLabel}>
                    <img
                      className={styles.rupeeIcon2}
                      loading="lazy"
                      alt=""
                      src="/rupee@2x.png"
                    />
                    <div className={styles.grandTotalLabel}>
                      <div className={styles.confirmButton}>150</div>
                    </div>
                  </div>
                  <div className={styles.cancelButton}>
                    <img
                      className={styles.addCircleIcon2}
                      loading="lazy"
                      alt=""
                      src="/add-circle.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.coffeeMilkshakeParent}>
              <div className={styles.coffeeMilkshake}>Coffee Milkshake</div>
              <div className={styles.productName}>
                <div className={styles.productPrice}>100</div>
              </div>
              <div className={styles.productDescription}>
                <div className={styles.removeButton} />
                <img
                  className={styles.addCircleIcon3}
                  loading="lazy"
                  alt=""
                  src="/add-circle.svg"
                />
                <img className={styles.rupeeIcon3} alt="" src="/rupee@2x.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddCircle;
