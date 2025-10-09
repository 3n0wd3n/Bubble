"use client";
import Image from "next/image";
import styles from "./anotherSN.module.css";
import { motion } from "framer-motion";

export default function anotherSN() {
  return (
    <>
      {/* about - why would they need us */}
      <section id='about' className={styles.about}>
        {/* general container */}
        <div className={`${styles["container--about"]}`}>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Why would you need another social network?
          </motion.h2>
          <div className={styles.about__container}>
            <motion.article
              className={styles.about__item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image src='/IoShareSocialOutline.svg' alt='Share icon' width={48} height={48} />
              <div className={styles.item__text_container}>
                <p>
                  Allows you to share your memories in a unique way with friends, followers, or keep them for yourself.
                </p>
                <p>Capture moments exactly where they happen and decide who can unlock them.</p>
              </div>
            </motion.article>
            <motion.article
              className={styles.about__item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image src='/IoEarthOutline.svg' alt='Share icon' width={48} height={48} />
              <div className={styles.item__text_container}>
                <p>Lets you discover hidden stories left by others in real places.</p>
                <p>Explore memories waiting to be found and uncover stories tied to meaningful locations.</p>
              </div>
            </motion.article>
            <motion.article
              className={styles.about__item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image src='/IoSparklesOutline.svg' alt='Share icon' width={48} height={48} />
              <div className={styles.item__text_container}>
                <p>Brings excitement to your everyday life by exploring memories nearby</p>
                <p>Leave surprises nearby and explore new spots to turn everyday places into adventures.</p>
              </div>
            </motion.article>
            <motion.article
              className={styles.about__item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image src='/IoMap.svg' alt='Share icon' width={48} height={48} />
              <div className={styles.item__text_container}>
                <p>Transform space around you into unforgettable adventures</p>
                <p>Create a digital time capsule that connects people through shared experiences and locations.</p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>
    </>
  );
}
