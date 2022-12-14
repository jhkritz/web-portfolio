import styles from "./contact.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <div className={styles["parent"]}>
      <div className={styles["heading"]}>
        <h1 className={styles["maintitle"]}>
          Convinced yet?
          <Image
            src="https://i.ibb.co/3Wn4Hdf/chat-bubble-dynamic-gradient.png"
            className={styles["icon"]}
            width={70}
            height={70}
            quality={70}
          />
        </h1>
        <h2 className={styles["subtitle"]}>
          Thanks for stopping by, I am currently looking to join a team of
          creative developers and designers. If you think I might be a good fit,
          feel free to give me a{" "}
          <a href="tel:+27787655279" className={styles["highlight"]}>
            call
          </a>{" "}
          🇿🇦 or send me an{" "}
          <a
            href="mailto:kritzinger.jh@gmail.com"
            className={styles["highlight"]}
          >
            email
          </a>{" "}
          📧.
        </h2>
        <h1 className={styles["maintitle"]}>
          Don't be a stranger!
          <Image
            src="https://i.ibb.co/jMHyBb5/thumb-up-dynamic-gradient.png"
            className={styles["icon"]}
            width={70}
            height={70}
            quality={70}
          />
        </h1>
        <h2 className={styles["footer"]}>Connect with me online</h2>
        <h2 className={styles["footer2"]}>
          <a
            className={styles["footer2"]}
            href="https://github.com/jhkritz"
            target="_blank"
          >
            👾GITHUB &nbsp;
          </a>
          <a
            className={styles["footer2"]}
            href="https://www.linkedin.com/in/herman-kritzinger-42b04a259"
            target="_blank"
          >
            💼LINKEDIN &nbsp;
          </a>
          <a
            className={styles["footer2"]}
            href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:4a4cf875-763b-49cd-a759-9331d839220f"
            target="_blank"
          >
            📰RESUME
          </a>
        </h2>
      </div>
    </div>
  );
}
