import React, { useState } from "react";
import styles from "./card.module.css";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div>
      <div className={styles["parent"]}>
        <div className={styles["heading"]}>
          <h1 className={styles["maintitle"]}>
            Work, work, work
            <Image
              src="https://i.ibb.co/0Qw4Mbq/folder-dynamic-gradient.png"
              width={70}
              height={70}
              quality={70}
              className={styles["icon"]}
            />
          </h1>
          <h2 className={styles["subtitle"]}>
            Each project is unique, feel free to explore.
          </h2>
        </div>
        <div className={styles["card-container"]}>
          <div className={styles["left-text"]}>
            <p>REACT,&nbsp; NEXT,&nbsp; NODE</p>
          </div>
          <div id="imagebox" className={styles["image"]}></div>
          <div className={styles["right-text"]}>
            <h1 className={styles["title"]}>Web Portfolio</h1>
            <p className={styles["description"]}>Dynamic skill showcase</p>
            <a
              href="https://github.com/jhkritz/web-portfolio"
              target="_blank"
              className={styles["link"]}
            >
              View source code
            </a>
            <div className={styles["iconsbox"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={styles["icons"]}
                href="https://github.com/jhkritz/web-portfolio"
              >
                <a
                  href="https://github.com/jhkritz/web-portfolio"
                  target="_blank"
                  className={styles["linkbtn"]}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </a>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={styles["icons"]}
              >
                <a
                  href="https://github.com/jhkritz/web-portfolio"
                  target="_blank"
                  className={styles["linkbtn"]}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </a>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["parent"]}>
        <div className={styles["card-container"]}>
          <div className={styles["left-text2"]}>
            <p>HTML,&nbsp; VUE,&nbsp; PYTHON</p>
          </div>
          <div id="imagebox" className={styles["image2"]}></div>
          <div className={styles["right-text2"]}>
            <h1 className={styles["title"]}>
              Sign <br />
              Language API
            </h1>
            <p className={styles["description"]}>
              Optical sign language <br />
              recognition and transcription
            </p>
            <a
              href="https://github.com/jhkritz/sign-language-api"
              className={styles["link"]}
              target="_blank"
            >
              View source code
            </a>
            <div className={styles["iconsbox"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={styles["icons"]}
              >
                <a
                  href="https://rocky-taiga-14209.herokuapp.com/"
                  target="_blank"
                  className={styles["linkbtn"]}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </a>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={styles["icons"]}
              >
                <a
                  href="https://github.com/jhkritz/sign-language-api"
                  target="_blank"
                  className={styles["linkbtn"]}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </a>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["parent"]}>
        <div className={styles["card-container"]}>
          <div className={styles["left-text3"]}>
            <p>FLUTTER,&nbsp; DART,&nbsp; LEXICA</p>
          </div>
          <div id="imagebox" className={styles["image3"]}></div>
          <div className={styles["right-text2"]}>
            <h1 className={styles["title"]}>
              AI generated <br /> image search
            </h1>
            <p className={styles["description"]}>
              Search engine for <br /> Stable Diffusion database
            </p>
            <a href="#" className={styles["link"]}>
              View source code
            </a>
            <div className={styles["iconsbox"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={styles["icons"]}
              >
                <a
                  href="https://rocky-taiga-14209.herokuapp.com/"
                  target="_blank"
                  className={styles["linkbtn"]}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </a>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={styles["icons"]}
              >
                <a
                  href="https://rocky-taiga-14209.herokuapp.com/"
                  target="_blank"
                  className={styles["linkbtn"]}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </a>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["heading"]}>
        <h1 className={styles["maintitle"]}>
          Who am I?
          <Image
            src="https://i.ibb.co/zxJHv7p/mic-dynamic-gradient.png"
            width={70}
            height={70}
            quality={70}
            className={styles["icon"]}
          />
        </h1>
        <h2 className={styles["subtitle2"]}>Find out below.</h2>
      </div>
    </div>
  );
}
