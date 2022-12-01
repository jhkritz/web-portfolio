import styles from "./carousel.module.css";

export default function Carousel() {
  return (
    <div class={styles["head"]}>
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
      <div class={styles["parent"]}>
        <div class={styles["slider"]}>
          <div class={styles["slide-track"]}>
            <div class={styles["slide"]}></div>
            <div class={styles["slide"]}></div>
            <div class={styles["slide"]}></div>
            <div class={styles["slide"]}></div>
            <div class={styles["slide"]}></div>
            <div class={styles["slide"]}></div>
            <div class={styles["slide"]}></div>
            <div class={styles["slide"]}></div>
            <div class={styles["slide"]}></div>
            <div class={styles["slide"]}></div>
            <div class={styles["slide"]}></div>
            <div class={styles["slide"]}></div>
            <div class={styles["slide"]}></div>
            <div class={styles["slide"]}></div>
            <div class={styles["slide"]}></div>
            <div class={styles["slide"]}></div>
            <div class={styles["slide"]}></div>
            <div class={styles["slide"]}></div>
          </div>
        </div>
      </div>

      <div class={styles["parent"]}>
        <div class={styles["slider2"]}>
          <div class={styles["slide-track2"]}>
            <div class={styles["slide2"]}></div>
            <div class={styles["slide2"]}></div>
            <div class={styles["slide2"]}></div>
            <div class={styles["slide2"]}></div>
            <div class={styles["slide2"]}></div>
            <div class={styles["slide2"]}></div>
            <div class={styles["slide2"]}></div>
            <div class={styles["slide2"]}></div>
            <div class={styles["slide2"]}></div>
            <div class={styles["slide2"]}></div>
            <div class={styles["slide2"]}></div>
            <div class={styles["slide2"]}></div>
            <div class={styles["slide2"]}></div>
            <div class={styles["slide2"]}></div>
            <div class={styles["slide2"]}></div>
            <div class={styles["slide2"]}></div>
            <div class={styles["slide2"]}></div>
            <div class={styles["slide2"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
