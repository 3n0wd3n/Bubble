"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import UsageSection from "@/components/usageSection";

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
      {/* general container */}
      <div className={`${styles["container--header"]}`}>
        {/* header */}
        <header className={styles.header}>
          {/* navigation */}
          <motion.nav
            className={`${styles.nav} ${scrolled ? styles["nav--scrolled"] : ""}`}
            initial={!isMobile ? { opacity: 0, y: 40 } : false}
            animate={!isMobile ? { opacity: 1, y: 0 } : false}
            transition={!isMobile ? { duration: 0.6, delay: 0.4 } : {}}
          >
            <div className={styles.nav__container}>
              {/* logo */}
              <Link href='#' className='logo'>
                <Image src='/logo_nav.png' alt='Bubble logo' width={48} height={48} />
              </Link>
              {/* hamburger */}
              <button className={styles.nav__toggle} onClick={() => setIsOpen(!isOpen)} aria-label='Toggle navigation'>
                <span />
                <span />
                <span />
              </button>
              {/* links */}
              <ul className={`${styles.nav__list} ${isOpen ? styles["nav__list--open"] : ""}`}>
                <div className={styles.nav__toggle_container}>
                  {/* logo */}
                  <Link href='#' className='logo'>
                    <Image src='/logo_nav.png' alt='Bubble logo' width={48} height={48} />
                  </Link>
                  <button
                    className={styles.nav__toggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label='Toggle navigation'
                  >
                    <span />
                    <span />
                    <span />
                  </button>
                </div>
                <li className={styles.nav__item} onClick={() => setIsOpen(!isOpen)}>
                  <a href='#about'>Really? Another Social App</a>
                </li>
                <li className={styles.nav__item} onClick={() => setIsOpen(!isOpen)}>
                  <a href='#master'>How To Master Bubble</a>
                </li>
                <li className={styles.nav__item} onClick={() => setIsOpen(!isOpen)}>
                  <a href='#faq'>F&Q</a>
                </li>
                <li className={styles.nav__item} onClick={() => setIsOpen(!isOpen)}>
                  <a href='#partners'>Partners</a>
                </li>
                <div className={`${styles.nav__buttons} ${isOpen ? styles["nav__buttons--open"] : ""}`}>
                  <a href='#' className={`${styles.nav__button} ${styles["nav__button--ghost"]}`}>
                    Advertise on Bubble
                  </a>
                  <a href='#app' className={`${styles.nav__button} ${styles["nav__button--filled"]}`}>
                    Get the app
                  </a>
                </div>
              </ul>
            </div>
            {/* buttons */}
            <div className={styles.nav__buttons}>
              <a href='#' className={`${styles.nav__button} ${styles["nav__button--ghost"]}`}>
                Advertise on Bubble
              </a>
              <a href='#app' className={`${styles.nav__button} ${styles["nav__button--filled"]}`}>
                Get the app
              </a>
            </div>
          </motion.nav>
        </header>
      </div>
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
                    Allows you to share your memories in a unique way with friends, followers, or keep them for
                    yourself.
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
              01 Create memmories
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
                <h5>How do I create a bubble?</h5>
                <p>
                  Select a location from your trips or be in the spot, upload a photo or video, and add your story
                  details.
                </p>
              </article>
              <article className={styles.faq__row_item}>
                <Image src='/share_location.svg' alt='Location icon' width={48} height={48} />
                <h5>How do I create a bubble?</h5>
                <p>
                  Select a location from your trips or be in the spot, upload a photo or video, and add your story
                  details.
                </p>
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
                <h5>How do I create a bubble?</h5>
                <p>
                  Select a location from your trips or be in the spot, upload a photo or video, and add your story
                  details.
                </p>
              </article>
              <article className={styles.faq__row_item}>
                <Image src='/IoInfiniteOutline.svg' alt='Infinite icon' width={48} height={48} />
                <h5>How do I create a bubble?</h5>
                <p>
                  Select a location from your trips or be in the spot, upload a photo or video, and add your story
                  details.
                </p>
              </article>
              <article className={styles.faq__row_item}>
                <Image src='/android.svg' alt='Android icon' width={48} height={48} />
                <h5>How do I create a bubble?</h5>
                <p>
                  Select a location from your trips or be in the spot, upload a photo or video, and add your story
                  details.
                </p>
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
      <footer className={styles.footer}>
        {/* general container */}
        <div className={`${styles["container--footer"]}`}>
          <motion.div
            className={styles.footer__nav_container}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <nav className={styles.footer__nav}>
              {/* logo */}
              <Link href='#' className='logo'>
                <Image src='/logo_nav.png' alt='Bubble logo' width={48} height={48} />
              </Link>
              <div className={styles.footer__nav_item}>
                <h3>Product</h3>
                <ul className={styles.footer__nav_links}>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Features</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Download</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Pricing</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Updates</a>
                  </li>
                </ul>
              </div>
              <div className={styles.footer__nav_item}>
                <h3>Company</h3>
                <ul className={styles.footer__nav_links}>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>About us</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Careers</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Press</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Contact</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Blog</a>
                  </li>
                </ul>
              </div>
              <div className={styles.footer__nav_item}>
                <h3>Resources</h3>
                <ul className={styles.footer__nav_links}>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Help center</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Support</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Community</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Developers</a>
                  </li>
                  <li className={styles.footer__nav_links_item}>
                    <a href='#'>Subscribe</a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className={styles.footer__newsletter}>
              <header className={styles.footer__newsletter_header}>
                <h3>Newsletter</h3>
                <p>Stay updated on new features and community stories.</p>
              </header>
              <div className={styles.footer__newsletter_form}>
                <form className={styles.footer__form_content} action='/subscribe' method='post'>
                  <input
                    className={styles.footer__form_input}
                    type='email'
                    id='newsletter-email'
                    name='email'
                    placeholder='Enter your email address'
                    required
                  />
                  <button className={styles.footer__form_submit} type='submit'>
                    Subscribe
                  </button>
                </form>
                <p>
                  By subscribing, you agree to our <a href='/privacy'>privacy policy</a> and{" "}
                  <a href='#'>terms of service</a>.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className={styles.footer__bottom}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className={styles.footer__bottom_legal_container}>
              <p>© 2025 Bubble App. All rights reserved.</p>
              <ul className={styles.footer__bottom_legal}>
                <li>
                  <a href='#'>Privacy policy</a>
                </li>
                <li>
                  <a href='#'>Terms of service</a>
                </li>
                <li>
                  <a href='#'>Cookie settings</a>
                </li>
              </ul>
            </div>

            <ul className={styles.footer__bottom_social}>
              <li>
                <Link href='/' className='logo'>
                  <Image src='/Facebook.svg' alt='FB logo' width={24} height={24} />
                </Link>
              </li>
              <li>
                <Link href='/' className='logo'>
                  <Image src='/Instagram.svg' alt='IG logo' width={24} height={24} />
                </Link>
              </li>
              <li>
                <Link href='/' className='logo'>
                  <Image src='/X.svg' alt='X logo' width={24} height={24} />
                </Link>
              </li>
              <li>
                <Link href='/' className='logo'>
                  <Image src='/LinkedIn.svg' alt='LinkedIn logo' width={24} height={24} />
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
