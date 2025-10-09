"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../UsageSections/usageSection.module.css";

const fadeInUp = (delay = 0.4) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
  viewport: { once: true, amount: 0.3 },
});

const sections = [
  {
    id: "create",
    number: "01",
    tagline: "Create memories",
    tag: "Capture",
    title: "Leave photos at specific locations",
    text: "Select a meaningful location, upload your photo or video and select who can see your bubble. Your memory becomes a hidden story waiting to be discovered by others.",
    image: { src: "/create-image.png", alt: "Create image", width: 600, height: 733 },
    reverse: false,
  },
  {
    id: "observe",
    number: "02",
    tagline: "Discover stories",
    tag: "Explore",
    title: "Reveal moments left by others around you.",
    text: "Visit locations and unlock hidden stories left by others. Each place becomes a gateway to unexpected narratives.",
    image: { src: "/observe-image.png", alt: "Observe image", width: 600, height: 639 },
    reverse: true,
  },
  {
    id: "follow",
    number: "03",
    tagline: "Share experiences",
    tag: "Connect",
    title: "Build a global community of storytellers",
    text: "Interact with memories and create a network of shared experiences across different locations.",
    image: { src: "/follow-image.png", alt: "Follow image", width: 632, height: 625 },
    reverse: false,
  },
];

function UsageItem({ section }) {
  const containerClass = styles[`container--${section.id}`];
  const contentClass = styles[`${section.id}__content`];
  const imageClass = styles[`${section.id}__image`];
  const textClass = styles[`${section.id}__container`];

  return (
    <section id={section.id} className={styles[`${section.id}_section`]}>
      <div className={containerClass}>
        <motion.span className={styles.tagline} {...fadeInUp(0.4)}>
          {section.number} {section.tagline}
        </motion.span>

        <div className={contentClass}>
          {!section.reverse && (
            <motion.div className={imageClass} {...fadeInUp(0.4)}>
              <Image {...section.image} style={{ width: "100%", height: "auto" }} />
            </motion.div>
          )}

          <div className={textClass}>
            <motion.span className={styles.section_tag} {...fadeInUp(0.4)}>
              {section.tag}
            </motion.span>
            <motion.h2 {...fadeInUp(0.8)}>{section.title}</motion.h2>
            <motion.p {...fadeInUp(1)}>{section.text}</motion.p>
          </div>

          {section.reverse && (
            <motion.div className={imageClass} {...fadeInUp(0.4)}>
              <Image {...section.image} style={{ width: "100%", height: "auto" }} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function UsageSection() {
  return (
    <>
      {sections.map((section) => (
        <UsageItem key={section.id} section={section} />
      ))}
    </>
  );
}
