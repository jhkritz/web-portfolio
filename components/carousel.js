import styles from "./carousel.module.css";

export default function Carousel() {
  return (
    <div className={styles["head"]}>
      <div className={styles["heading"]}>
        <h1 className={styles["maintitle"]}>
          Some other design projects
          <img
            src="https://i.ibb.co/RPj22r0/notebook-dynamic-gradient.png"
            className={styles["icon2"]}
          ></img>
        </h1>
        <h2 className={styles["subtitle"]}></h2>
      </div>
      <div className={styles["parent"]}>
        <div className={styles["slider"]}>
          <div className={styles["slide-track"]}>
            <div className={styles["slide"]}></div>
            <div className={styles["slide"]}></div>
            <div className={styles["slide"]}></div>
            <div className={styles["slide"]}></div>
            <div className={styles["slide"]}></div>
            <div className={styles["slide"]}></div>
            <div className={styles["slide"]}></div>
            <div className={styles["slide"]}></div>
            <div className={styles["slide"]}></div>
            <div className={styles["slide"]}></div>
            <div className={styles["slide"]}></div>
            <div className={styles["slide"]}></div>
            <div className={styles["slide"]}></div>
            <div className={styles["slide"]}></div>
            <div className={styles["slide"]}></div>
            <div className={styles["slide"]}></div>
            <div className={styles["slide"]}></div>
            <div className={styles["slide"]}></div>
          </div>
        </div>
      </div>

      <div className={styles["parent"]}>
        <div className={styles["slider2"]}>
          <div className={styles["slide-track2"]}>
            <div className={styles["slide2"]}></div>
            <div className={styles["slide2"]}></div>
            <div className={styles["slide2"]}></div>
            <div className={styles["slide2"]}></div>
            <div className={styles["slide2"]}></div>
            <div className={styles["slide2"]}></div>
            <div className={styles["slide2"]}></div>
            <div className={styles["slide2"]}></div>
            <div className={styles["slide2"]}></div>
            <div className={styles["slide2"]}></div>
            <div className={styles["slide2"]}></div>
            <div className={styles["slide2"]}></div>
            <div className={styles["slide2"]}></div>
            <div className={styles["slide2"]}></div>
            <div className={styles["slide2"]}></div>
            <div className={styles["slide2"]}></div>
            <div className={styles["slide2"]}></div>
            <div className={styles["slide2"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
