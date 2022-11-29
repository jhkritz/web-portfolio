import styles from "./blob.module.css";
import ReactDOM from "react-dom";
import Explore from "./explorebtn";

const onClick = () =>
  window.scrollTo({
    left: 0,
    top: document.getElementById("top").scrollHeight,
    behavior: "smooth",
  });

export default function Blob() {
  return (
    <div id="top" class={styles["container"]}>
      <h1 class={styles["title"]}>
        Creative developer & designer crafting <br></br> unique web experiences.
      </h1>
      <div onClick={onClick} class={styles["exp"]}>
        <Explore></Explore>
      </div>
      <div class={styles["blob"]}>
        <div class={styles["medblob"]}>
          <div class={styles["smallblob"]}></div>
        </div>
      </div>
    </div>
  );
}
