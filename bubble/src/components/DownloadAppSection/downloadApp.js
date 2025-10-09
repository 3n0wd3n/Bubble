"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./downloadApp.module.css";
import { motion } from "framer-motion";

export default function downloadApp() {
  return (
    <>
      {/* download app with qr */}
      <section className={styles.download_section}>
        {/* general container */}
        <div className={`${styles["container--download"]}`}>
          <article className={styles.download__content}>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Be the first to turn photos into an experience.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Download the app and begin transforming your locations into personal storytelling platforms.
            </motion.p>
            <motion.div
              className={styles.download__buttons}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <a href='#' className={`${styles.download__button} ${styles["download__button--filled"]}`}>
                <Image src='/apple-image.png' alt='Apple Download Button' width={33} height={33} />
                <div className={`${styles["download__button--text"]}`}>
                  <span>Download on the</span>
                  <span>App Store</span>
                </div>
              </a>
              <a href='#' className={`${styles.download__button} ${styles["download__button--ghost"]}`}>
                <Image src='/android-image.png' alt='Apple Download Button' width={30} height={30} />
                <div className={`${styles["download__button--text"]}`}>
                  <span>Download on the</span>
                  <span>Android</span>
                </div>
              </a>
            </motion.div>
          </article>
          <motion.div
            className={styles.qr__image}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              id='app'
              src='/qr-image.png'
              alt='QR image'
              width={250}
              height={250}
              style={{ width: "100%", height: "auto" }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
