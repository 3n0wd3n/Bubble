"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../UsageSections/usageSection.module.css";

export default function UsageSection() {
  return (
    <>
      {/* usage - create bubble */}
      <section id='master' className={styles.create_section}>
        {/* general container */}
        <div className={`${styles["container--create"]}`}>
          <motion.span
            className={styles.tagline}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            01 Create memories
          </motion.span>
          <div className={styles.create__content}>
            <motion.div
              className={styles.create__image}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src='/create-image.png'
                alt='Create image'
                width={600}
                height={733}
                style={{ width: "100%", height: "auto" }}
              />
            </motion.div>
            <div className={styles.create__container}>
              <motion.span
                className={styles.section_tag}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Capture
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Leave photos at specific locations
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Select a meaningful location, upload your photo or video and select who can see your bubble. Your memory
                becomes a hidden story waiting to be discovered by others.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
      {/* usage - observe photos of others */}
      <section className={styles.observe_section}>
        {/* general container */}
        <div className={`${styles["container--observe"]}`}>
          <motion.span
            className={styles.tagline}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            02 Discover stories
          </motion.span>
          <div className={styles.observe__content}>
            <div className={styles.observe__container}>
              <motion.span
                className={styles.section_tag}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Explore
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Reveal moments left by others around you.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Visit locations and unlock hidden stories left by others. Each place becomes a gateway to unexpected
                narratives.
              </motion.p>
            </div>
            <motion.div
              className={styles.observe__image}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src='/observe-image.png'
                alt='Observe image'
                width={600}
                height={639}
                style={{ width: "100%", height: "auto" }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* usage - share, follow, explore */}
      <section className={styles.follow_section}>
        {/* general container */}
        <div className={`${styles["container--follow"]}`}>
          <motion.span
            className={styles.tagline}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            03 Share experiences
          </motion.span>
          <div className={styles.follow__content}>
            <motion.div
              className={styles.follow__image}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src='/follow-image.png'
                alt='Follow image'
                width={632}
                height={625}
                style={{ width: "100%", height: "auto" }}
              />
            </motion.div>
            <div className={styles.follow__container}>
              <motion.span
                className={styles.section_tag}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Connect
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Build a global community of storytellers
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Interact with memories and create a network of shared experiences across different locations.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
