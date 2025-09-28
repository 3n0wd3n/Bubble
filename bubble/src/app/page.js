// TODO: create router for more pages, add gifs with animations instead of just photos, create animation when scrolling
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* general container */}
      <div className={`${styles["container--header"]}`}>
        {/* header */}
        <header className={styles.header}>
          {/* navigation */}
          <nav className={styles.nav}>
            <div className={styles.nav__container}>
              {/* logo */}
              <Link href='/' className='logo'>
                <Image src='/logo_nav.png' alt='Bubble logo' width={48} height={48} />
              </Link>
              {/* links */}
              <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                  <a href='#'>Really? Another Social App</a>
                </li>
                <li className={styles.nav__item}>
                  <a href='#'>How To Master Bubble</a>
                </li>
                <li className={styles.nav__item}>
                  <a href='#'>F&Q</a>
                </li>
                <li className={styles.nav__item}>
                  <a href='#'>Partners</a>
                </li>
              </ul>
            </div>
            {/* buttons */}
            <div className={styles.nav__buttons}>
              <a href='#' className={`${styles.nav__button} ${styles["nav__button--ghost"]}`}>
                Advertise on Bubble
              </a>
              <a href='#' className={`${styles.nav__button} ${styles["nav__button--filled"]}`}>
                Get the app
              </a>
            </div>
          </nav>
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
                <span>Bubble.</span>
                <h1>
                  A new <span className={`${styles["outlined-text"]}`}>social network</span> where photos and videos are
                  tied to real-world places
                </h1>
              </div>
              <p>
                Leave photos or videos at real locations and create stories waiting to be discovered. Every place
                becomes a canvas for your most meaningful moments.
              </p>
              <div className={styles.intro__buttons}>
                <a href='#' className={`${styles.intro__button} ${styles["intro__button--filled"]}`}>
                  Get the app
                </a>
                <a href='#' className={`${styles.intro__button} ${styles["intro__button--ghost"]}`}>
                  Advertise on Bubble
                </a>
              </div>
            </div>
            <div className={styles.intro__image}>
              <Image
                src='/intro_image.png'
                alt='Intro image'
                width={619}
                height={613}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </section>
        {/* about - why would they need us */}
        <section className={styles.about}>
          {/* general container */}
          <div className={`${styles["container--about"]}`}>
            <h2>Why would you need another social network? </h2>
            <div className={styles.about__container}>
              <article className={styles.about__item}>
                <Image src='/IoShareSocialOutline.svg' alt='Share icon' width={48} height={48} />
                <div className={styles.item__text_container}>
                  <p>
                    Allows you to share your memories in a unique way with friends, followers, or keep them for
                    yourself.
                  </p>
                  <p>Capture moments exactly where they happen and decide who can unlock them.</p>
                </div>
              </article>
              <article className={styles.about__item}>
                <Image src='/IoEarthOutline.svg' alt='Share icon' width={48} height={48} />
                <div className={styles.item__text_container}>
                  <p>Lets you discover hidden stories left by others in real places.</p>
                  <p>Explore memories waiting to be found and uncover stories tied to meaningful locations.</p>
                </div>
              </article>
              <article className={styles.about__item}>
                <Image src='/IoSparklesOutline.svg' alt='Share icon' width={48} height={48} />
                <div className={styles.item__text_container}>
                  <p>Brings excitement to your everyday life by exploring memories nearby</p>
                  <p>Leave surprises nearby and explore new spots to turn everyday places into adventures.</p>
                </div>
              </article>
              <article className={styles.about__item}>
                <Image src='/IoMap.svg' alt='Share icon' width={48} height={48} />
                <div className={styles.item__text_container}>
                  <p>Transform space around you into unforgettable adventures</p>
                  <p>Create a digital time capsule that connects people through shared experiences and locations.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* usage - create bubble */}
        <section className={styles.create_section}>
          {/* general container */}
          <div className={`${styles["container--create"]}`}>
            <span className={styles.tagline}>01 Create memmories</span>
            <div className={styles.create__content}>
              <div className={styles.create__image}>
                <Image
                  src='/create-image.png'
                  alt='Create image'
                  width={600}
                  height={733}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className={styles.create__container}>
                <span>Capture</span>
                <h2>Leave photos at specific locations</h2>
                <p>
                  Select a meaningful location, upload your photo or video and select who can see your bubble. Your
                  memory becomes a hidden story waiting to be discovered by others.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* usage - observe photos of others */}
        <section className={styles.observe_section}>
          {/* general container */}
          <div className={`${styles["container--observe"]}`}>
            <span className={styles.tagline}>02 Discover stories</span>
            <div className={styles.observe__content}>
              <div className={styles.observe__container}>
                <span>Explore</span>
                <h2>Reveal moments left by others around you.</h2>
                <p>
                  Visit locations and unlock hidden stories left by others. Each place becomes a gateway to unexpected
                  narratives.
                </p>
              </div>
              <div className={styles.observe__image}>
                <Image
                  src='/observe-image.png'
                  alt='Observe image'
                  width={600}
                  height={639}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </section>
        {/* usage - share, follow, explore */}
        <section className={styles.follow_section}>
          {/* general container */}
          <div className={`${styles["container--follow"]}`}>
            <span className={styles.tagline}>03 Share experiences</span>
            <div className={styles.follow__content}>
              <div className={styles.follow__image}>
                <Image
                  src='/follow-image.png'
                  alt='Follow image'
                  width={632}
                  height={625}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className={styles.follow__container}>
                <span>Connect</span>
                <h2>Build a global community of storytellers</h2>
                <p>Interact with memories and create a network of shared experiences across different locations.</p>
              </div>
            </div>
          </div>
        </section>
        {/* download app with qr */}
        <section className={styles.download_section}>
          {/* general container */}
          <div className={`${styles["container--download"]}`}>
            <article className={styles.download__content}>
              <h2>Be the first to turn photos into an experience.</h2>
              <p>Download the app and begin transforming your locations into personal storytelling platforms.</p>
              <div className={styles.download__buttons}>
                <a href='#' className={`${styles.download__button} ${styles["download__button--filled"]}`}>
                  <Image src='/apple-image.png' alt='Apple Download Button' width={40} height={40} />
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
              </div>
            </article>
            <div className={styles.qr__image}>
              <Image
                src='/qr-image.png'
                alt='QR image'
                width={450}
                height={450}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </section>
        {/* f&q */}
        <section className={styles.faq_section}>
          <div className={styles.faq__heading}>
            <h2>FAQs</h2>
            <p>Get answers to common questions about our Bubble platform.</p>
          </div>
          <div className={styles.faq__rows_container}>
            <div className={styles.faq__row}>
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
            </div>
            <div className={styles.faq__row}>
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
            </div>
          </div>
        </section>
        {/* get started */}
        <section className={styles.get_start_section}>
          <h2>Get Started</h2>
          <div className={styles.get_start__card_container}>
            <article className={`${styles.get_start__card} ${styles["get_start__card--partner"]}`}>
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
            </article>
            <article className={`${styles.get_start__card} ${styles["get_start__card--user"]}`}>
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
            </article>
          </div>
        </section>
        {/* contact us */}
        <section>
          <h2></h2>
          <p></p>
        </section>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
