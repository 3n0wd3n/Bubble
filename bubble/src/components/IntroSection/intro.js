"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./intro.module.css";
import { motion } from "framer-motion";

export default function Intro({ isMobile }) {
  const [startFloating, setStartFloating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartFloating(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.intro}>
      <div className={styles["container--intro"]}>
        <div className={styles.intro__content}>
          <div className={styles.intro__heading_container}>
            <motion.span
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Bubble.
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A new <span className={styles["outlined-text"]}>social network</span> where photos and videos are tied to
              real-world places
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Leave photos or videos at real locations and create stories waiting to be discovered. Every place becomes a
            canvas for your most meaningful moments.
          </motion.p>

          <motion.div
            className={styles.intro__buttons}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a href='#app' className={`${styles.intro__button} ${styles["intro__button--filled"]}`}>
              Get the app
            </a>
            <a href='#' className={`${styles.intro__button} ${styles["intro__button--ghost"]}`}>
              <p>{isMobile ? "Advertise" : "Advertise on Bubble"}</p>
            </a>
          </motion.div>
        </div>
        <motion.div
          className={styles.intro__image}
          initial={{ opacity: 0, y: 40 }}
          animate={
            startFloating
              ? {
                  opacity: 1,
                  y: [0, -10, 0, 10, 0],
                }
              : { opacity: 1, y: 0 }
          }
          transition={
            startFloating
              ? {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }
              : { duration: 0.8, delay: 0.1 }
          }
        >
          <Image
            src='/intro_image.png'
            alt='Intro image'
            width={619}
            height={613}
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
