import styles from "./ProjectCard.module.css";

export default function Card() {
  return (
    <div class={styles["parent"]}>
      <header>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
          rel="stylesheet"
        ></link>
      </header>

      <section class={styles["hero-section"]}>
        <div class={styles["card-grid"]}>
          <a class={styles["card"]} href="#">
            <div
              class={styles["card__background"]}
              style={{
                backgroundImage:
                  " url(" +
                  "https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" +
                  ")",
              }}
            ></div>
            <div class={styles["card__content"]}>
              <p class={styles["card__category"]}>Category</p>
              <h3 class={styles["card__heading"]}>Example Card Heading</h3>
            </div>
          </a>
          <a class={styles["card"]} href="#">
            <div
              class={styles["card__background"]}
              style={{
                backgroundImage:
                  " url(" +
                  "https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" +
                  ")",
              }}
            ></div>
            <div class={styles["card__content"]}>
              <p class={styles["card__category"]}>Category</p>
              <h3 class={styles["card__heading"]}>Example Card Heading</h3>
            </div>
          </a>
          <a class={styles["card"]} href="#">
            <div
              class={styles["card__background"]}
              style={{
                backgroundImage:
                  " url(" +
                  "https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" +
                  ")",
              }}
            ></div>
            <div class={styles["card__content"]}>
              <p class={styles["card__category"]}>Category</p>
              <h3 class={styles["card__heading"]}>Example Card Heading</h3>
            </div>
          </a>
          <a class={styles["card"]} href="#">
            <div
              class={styles["card__background"]}
              style={{
                backgroundImage:
                  " url(" +
                  "https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" +
                  ")",
              }}
            ></div>
            <div class={styles["card__content"]}>
              <p class={styles["card__category"]}>Category</p>
              <h3 class={styles["card__heading"]}>Example Card Heading</h3>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
