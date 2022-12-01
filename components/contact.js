import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles["parent"]}>
      <div className={styles["heading"]}>
        <h1 className={styles["maintitle"]}>
          Convinced yet?
          <img
            src="https://i.ibb.co/3Wn4Hdf/chat-bubble-dynamic-gradient.png"
            className={styles["icon2"]}
          ></img>
        </h1>
        <h2 className={styles["subtitle"]}>
          Thanks for stopping by, I am currently looking to join a team of
          creative developers and designers. If you think I might be a good fit,
          feel free to give me a <div className={styles["highlight"]}>call</div>{" "}
          🇿🇦 or send me an <div className={styles["highlight"]}>email</div> 📧.
        </h2>
        <h1 className={styles["maintitle"]}>
          Don't be a stranger!
          <img
            src="https://i.ibb.co/jMHyBb5/thumb-up-dynamic-gradient.png"
            className={styles["icon3"]}
          ></img>
        </h1>
        <h2 className={styles["footer"]}>Connect with me online</h2>
        <h2 className={styles["footer2"]}>
          <a className={styles["footer2"]} href="#">
            👾GITHUB &nbsp;
          </a>
          <a className={styles["footer2"]} href="#">
            💼LINKEDIN &nbsp;
          </a>
          <a className={styles["footer2"]} href="#">
            📰RESUME
          </a>
        </h2>
      </div>
    </div>
  );
}
