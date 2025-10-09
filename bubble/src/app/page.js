"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import AnotherSN from "../components/WhyAnotherSNSection/anotherSN";
import DownloadApp from "../components/DownloadAppSection/downloadApp";
import FAQ from "../components/FAQSection/faq";
import GetStart from "../components/GetStartedSection/getStarted";
import Contact from "../components/ContactSection/contact";
import Intro from "../components/IntroSection/intro";
import UsageSection from "@/components/UsageSections/usageSection";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile === null) return null;

  return (
    <div className={styles.page}>
      {/* header */}
      <Header scrolled={scrolled} setScrolled={setScrolled} isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* main */}
      <main className={styles.main}>
        {/* intro */}
        <Intro isMobile={isMobile} />
        {/* about - why would they need us */}
        <AnotherSN />
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
                  Select a meaningful location, upload your photo or video and select who can see your bubble. Your
                  memory becomes a hidden story waiting to be discovered by others.
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
        {/* download app with qr */}
        <DownloadApp />
        {/* f&q */}
        <FAQ />
        {/* get started */}
        <GetStart />
        {/* contact us */}
        <Contact />
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}
