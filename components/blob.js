import styles from "./blob.module.css";
import ReactDOM from "react-dom";
import Explore from "./explorebtn";

const getHeight = () => {
  let x = document.getElementById("top").scrollHeight;
  return x - 210;
};

const onClick = () => {
  window.scrollTo({
    left: 0,
    top: getHeight(),
    behavior: "smooth",
  });
};

export default function Blob() {
  return (
    <div id="top" className={styles["container"]}>
      <h1 className={styles["title"]}>
        creative <div className={styles["color"]}>developer & designer</div>{" "}
        crafting <br></br> unique web experiences.
      </h1>
      <div onClick={onClick} className={styles["exp"]}>
        <Explore></Explore>
      </div>
      <div className={styles["blob"]}>
        <div className={styles["medblob"]}>
          <div className={styles["smallblob"]}></div>
        </div>
      </div>
    </div>
  );
}
