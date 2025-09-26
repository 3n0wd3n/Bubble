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
            <div className={styles.image}>
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
                  alt='Intro image'
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
        <section>
          <h2></h2>
          <p></p>
        </section>
        {/* usage - share, follow, explore */}
        <section>
          <h2></h2>
          <p></p>
        </section>
        {/* download app with qr */}
        <section>
          <h2></h2>
          <p></p>
        </section>
        {/* f&q */}
        <section>
          <h2></h2>
          <p></p>
        </section>
        {/* get started */}
        <section>
          <h2></h2>
          <p></p>
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
