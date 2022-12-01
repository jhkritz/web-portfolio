import styles from "./profile.module.css";

export default function Profile() {
  return (
    <div className={styles["parent"]}>
      <div className={styles["card-container"]}>
        <img
          className={styles["round"]}
          src="https://i.ibb.co/f2P5LHD/pfp.jpg"
          alt="user"
        />
        <h3 className={styles["h3"]}>Herman Kritzinger</h3>
        <h6 className={styles["h6"]}>Stellenbosch</h6>
        <p className={styles["par"]}>
          User interface designer and <br /> front-end developer
        </p>
        <div className={styles["buttons"]}>
          <button className={styles["primary"]}>
            <span>Message</span>
          </button>
        </div>
      </div>
      <div className={styles["about-container"]}>
        <h3 className={styles["right-h3"]}>Hello stranger &#x1F44B;</h3>
        <p className={styles["right-par"]}>
          I am passionate about creating digital products that enhance everyday
          experiences on the web.
        </p>
        <div className={styles["skills"]}>
          <h6 className={styles["skilltext"]}>Skills</h6>
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
        <div className={styles["skills"]}>
          <h6 className={styles["skilltext"]}>Interests</h6>
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
