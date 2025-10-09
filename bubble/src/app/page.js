"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import AnotherSN from "../components/WhyAnotherSNSection/anotherSN";
import DownloadApp from "../components/DownloadAppSection/downloadApp";
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
        <section className={styles.intro}>
          {/* general container */}
          <div className={`${styles["container--intro"]}`}>
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
                  A new <span className={styles["outlined-text"]}>social network</span> where photos and videos are tied
                  to real-world places
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Leave photos or videos at real locations and create stories waiting to be discovered. Every place
                becomes a canvas for your most meaningful moments.
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
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
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
        <section id='faq' className={styles.faq_section}>
          <div className={styles.faq__heading}>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              FAQs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Get answers to common questions about our Bubble platform.
            </motion.p>
          </div>
          <div className={styles.faq__rows_container}>
            <motion.div
              className={styles.faq__row}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <article className={styles.faq__row_item}>
                <Image src='/IoAddCircleOutline.svg' alt='Share icon' width={48} height={48} />
                <h5>How do I create a bubble?</h5>
                <p>
                  Select a location from your trips or be in the spot, upload a photo or video, and add your story
                  details.
                </p>
              </article>
              <article className={styles.faq__row_item}>
                <Image src='/enhanced_encryption.svg' alt='Share icon' width={48} height={48} />
                <h5>Is my data secure?</h5>
                <p>We use advanced encryption to protect your personal bubbles.</p>
              </article>
              <article className={styles.faq__row_item}>
                <Image src='/share_location.svg' alt='Location icon' width={48} height={48} />
                <h5>Can I share bubbles privately?</h5>
                <p>Yes, you can control who sees your location-based selecting right people.</p>
              </article>
            </motion.div>
            <motion.div
              className={styles.faq__row}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <article className={styles.faq__row_item}>
                <Image src='/apps.svg' alt='Apps icon' width={48} height={48} />
                <h5>Is the app free?</h5>
                <p>Basic features are free, with premium options available.</p>
              </article>
              <article className={styles.faq__row_item}>
                <Image src='/IoInfiniteOutline.svg' alt='Infinite icon' width={48} height={48} />
                <h5>How many bubbles can I create?</h5>
                <p>Unlimited memories with our standard and premium plans.</p>
              </article>
              <article className={styles.faq__row_item}>
                <Image src='/android.svg' alt='Android icon' width={48} height={48} />
                <h5>Works on which devices?</h5>
                <p>Available on iOS and Android mobile devices.</p>
              </article>
            </motion.div>
          </div>
        </section>

        {/* get started */}
        <section id='partners' className={styles.get_start_section}>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Get Started
          </motion.h2>

          <div className={styles.get_start__card_container}>
            <motion.article
              className={`${styles.get_start__card} ${styles["get_start__card--partner"]}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.get_start__card_content}>
                <h3>Partner with Bubble</h3>
                <p>
                  By joining the Bubble, you unlock the ability to advertise your brand, access exclusive growth
                  features, and build connections with our community.
                </p>
              </div>
              <a href='#' className={styles.get_start__card_link}>
                Get Started
                <Image
                  src='/FaArrowRight.svg'
                  alt='SVG Arrow'
                  width={16}
                  height={16}
                  className={styles.get_start__link_icon}
                />
              </a>
            </motion.article>
            <motion.article
              className={`${styles.get_start__card} ${styles["get_start__card--user"]}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={styles.get_start__card_content}>
                <h3>Be part of the Bubble</h3>
                <p>
                  Enjoy our new and unique view to the photos and videos and share this excitement with your friends and
                  followers.
                </p>
              </div>
              <a href='#' className={styles.get_start__card_link}>
                Get Started
                <Image
                  src='/FaArrowRight.svg'
                  alt='SVG Arrow'
                  width={16}
                  height={16}
                  className={styles.get_start__link_icon}
                />
              </a>
            </motion.article>
          </div>
        </section>

        {/* contact us */}
        <section className={styles.contact_section}>
          <motion.header
            className={styles.contact__header}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={`${styles.tagline} ${styles["tagline--light"]}`}>Connect</span>
            <h2>Contact us</h2>
            <p>We’re here to help you start your bubble-sharing journey and answer any questions.</p>
          </motion.header>

          <address className={styles.contact__info}>
            <motion.div
              className={styles.contact__info_item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image src='/mail.svg' alt='SVG Arrow' width={24} height={24} className={styles.get_start__link_icon} />
              <p className={styles.contact__item_content}>
                <strong>Email:</strong>
                <a href='mailto:support@memoriesapp.com'>support@bubble.com</a>
              </p>
            </motion.div>
            <motion.div
              className={styles.contact__info_item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image src='/call.svg' alt='SVG Arrow' width={24} height={24} className={styles.get_start__link_icon} />
              <p className={styles.contact__item_content}>
                <strong>Phone:</strong>
                <a href='tel:+61281234567'>+61 2 8123 4567</a>
              </p>
            </motion.div>
            <motion.div
              className={styles.contact__info_item}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                src='/location_on.svg'
                alt='SVG Arrow'
                width={24}
                height={24}
                className={styles.get_start__link_icon}
              />
              <p className={styles.contact__item_content}>
                <strong>Office:</strong>
                Level 5, 123 Digital Lane, Sydney NSW 2000, Australia
              </p>
            </motion.div>
          </address>
        </section>
      </main>
      {/* footer */}
      <Footer />
    </div>
  );
}
