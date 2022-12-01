import styles from "./profile.module.css";

export default function Profile() {
  return (
    <div class={styles["parent"]}>
      <meta charset="UTF-8" />

      <div class={styles["card-container"]}>
        <img
          class={styles["round"]}
          src="https://i.ibb.co/f2P5LHD/pfp.jpg"
          alt="user"
        />
        <h3 class={styles["h3"]}>Herman Kritzinger</h3>
        <h6 class={styles["h6"]}>Stellenbosch</h6>
        <p class={styles["par"]}>
          User interface designer and <br /> front-end developer
        </p>
        <div class={styles["buttons"]}>
          <button class={styles["primary"]}>
            <span>Message</span>
          </button>
        </div>
      </div>
      <div class={styles["about-container"]}>
        <h3 class={styles["right-h3"]}>Hello stranger &#x1F44B;</h3>
        <p class={styles["right-par"]}>
          I am passionate about creating digital products that enhance everyday
          experiences on the web.
        </p>
        <div class={styles["skills"]}>
          <h6 class={styles["skilltext"]}>Skills</h6>
          <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </div>
        <div class={styles["skills"]}>
          <h6 class={styles["skilltext"]}>Interests</h6>
          <ul>
            <li>Machine Learning</li>
            <li>Cloud Computing</li>
            <li>Web3</li>
            <li>3D Modelling</li>
            <li>Game Design</li>
            <li>Image Diffusion</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
