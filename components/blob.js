import styles from "./blob.module.css";
import ReactDOM from "react-dom";

export default function Blob() {
  return (
    <div class={styles["container"]}>
      <h1 class={styles["title"]}>
        Creative developer & designer crafting <br></br> unique web experiences.
      </h1>
      <div class={styles["blob"]}>
        <div class={styles["medblob"]}>
          <div class={styles["smallblob"]}></div>
        </div>
      </div>
    </div>
  );
}
