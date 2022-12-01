import styles from "./carousel.module.css";

export default function Carousel() {
  return (
    <div>
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
