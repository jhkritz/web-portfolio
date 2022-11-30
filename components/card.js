import React, { useState } from "react";
import styles from "./card.module.css";

export default function ProductCard() {
  return (
    <div>
      <div class={styles["parent"]}>
        <div className={styles["heading"]}>
          <h1 className={styles["maintitle"]}>
            Work, work, work
            <img
              src="https://i.ibb.co/0Qw4Mbq/folder-dynamic-gradient.png"
              className="icon"
            ></img>
          </h1>
          <h2 className={styles["subtitle"]}>
            Each project is unique, feel free to explore.
          </h2>
        </div>
        <div class={styles["card-container"]}>
          <div class={styles["left-text"]}>
            <p>REACT,&nbsp; NEXT,&nbsp; NODE</p>
          </div>
          <div id="imagebox" class={styles["image"]}></div>
          <div class={styles["right-text"]}>
            <h1 class={styles["title"]}>Web Portfolio</h1>
            <p class={styles["description"]}>Dynamic skill showcase</p>
            <a href="#" class={styles["link"]}>
              View source code
            </a>
            <div class={styles["iconsbox"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class={styles["icons"]}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class={styles["icons"]}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class={styles["parent"]}>
        <div class={styles["card-container"]}>
          <div class={styles["left-text2"]}>
            <p>HTML,&nbsp; VUE,&nbsp; PYTHON</p>
          </div>
          <div id="imagebox" class={styles["image2"]}></div>
          <div class={styles["right-text2"]}>
            <h1 class={styles["title"]}>
              Sign <br />
              Language API
            </h1>
            <p class={styles["description"]}>
              Optical sign language <br />
              recognition and transcription
            </p>
            <a href="#" class={styles["link"]}>
              View source code
            </a>
            <div class={styles["iconsbox"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class={styles["icons"]}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class={styles["icons"]}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class={styles["parent"]}>
        <div class={styles["card-container"]}>
          <div class={styles["left-text3"]}>
            <p>FLUTTER,&nbsp; DART,&nbsp; LEXICA</p>
          </div>
          <div id="imagebox" class={styles["image3"]}></div>
          <div class={styles["right-text2"]}>
            <h1 class={styles["title"]}>
              AI generated <br /> image search
            </h1>
            <p class={styles["description"]}>
              Search engine for <br /> Stable Diffusion database
            </p>
            <a href="#" class={styles["link"]}>
              View source code
            </a>
            <div class={styles["iconsbox"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class={styles["icons"]}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class={styles["icons"]}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
