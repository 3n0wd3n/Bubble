# JS

    "use client";
    import Image from "next/image";
    import { useInView } from "react-intersection-observer";
    import { motion } from "framer-motion";
    import { useEffect, useState } from "react";
    import styles from "../UsageSections/usageSection.module.css";

    // first version
    const fadeInUpFromBottom = (delay = 0.4, startFloating = false) => {
    if (startFloating) {
        return {
        initial: { opacity: 1, y: 0 },
        animate: { y: [0, -6, 0] },
        transition: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
        },
        };
    } else {
        return {
        initial: { opacity: 0, y: 40 },
        animate: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay },
        };
    }
    };

    const fadeInUpFromTop = (delay = 0.4) => ({
    initial: { opacity: 0, y: -40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
    viewport: { once: true, amount: 0.3 },
    });

    // second version
    const fadeInUp = (delay = 0.4) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay },
    viewport: { once: true, amount: 0.3 },
    });

    const sections = [
    // first version
    // {
    //   id: "create",
    //   number: "01",
    //   tagline: "Create memories",
    //   tag: "Capture",
    //   title: "Leave photos at specific locations",
    //   text: "Select a meaningful location, upload your photo or video and select who can see your bubble. Your memory becomes a hidden story waiting to be discovered by others.",
    //   imageOne: { src: "/create-first-half.png", alt: "Create image - first layer", width: 600, height: 733 },
    //   imageTwo: { src: "/create-second-half.png", alt: "Create image - second layer", width: 600, height: 733 },
    //   reverse: false,
    // },
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
    // cons for second version
    const imageContainerClass = styles[`usage__${section.id}ImageWrapper`];
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
    const [startFloating, setStartFloating] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setStartFloating(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (inView) {
        const timer = setTimeout(() => setStartFloating(true), 1000);
        return () => clearTimeout(timer);
        }
    }, [inView]);

    return (
        <section id={section.id} className={styles[`${section.id}_section`]}>
        <div className={containerClass}>
            <motion.span className={styles.tagline} {...fadeInUp(0.4)}>
            {section.number} {section.tagline}
            </motion.span>

            <div className={contentClass}>
            {/* first version */}
            {/* {!section.reverse && (
                <div className={`${styles.usage__ImageWrapper} ${imageContainerClass}`}>
                <motion.div className={styles.usage__imageLayer} {...fadeInUpFromTop(0.4)}>
                    <Image {...section.imageOne} style={{ width: "100%", height: "auto" }} />
                </motion.div>
                <motion.div className={styles.usage__imageLayer} {...fadeInUpFromBottom(0.4, startFloating)}>
                    <Image {...section.imageTwo} style={{ width: "100%", height: "auto" }} />
                </motion.div>
                </div>
            )} */}

            {/* second version of animation */}
            {section.reverse && (
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

            {/* first version */}
            {/* {section.reverse && (
                <div className={`${styles.usage__ImageWrapper} ${imageContainerClass}`}>
                <motion.div className={styles.usage__imageLayer} {...fadeInUpFromTop(0.4)}>
                    <Image {...section.imageOne} style={{ width: "100%", height: "auto" }} />
                </motion.div>
                <motion.div className={styles.usage__imageLayer} {...fadeInUpFromBottom(0.4, startFloating)}>
                    <Image {...section.imageTwo} style={{ width: "100%", height: "auto" }} />
                </motion.div>
                </div>
            )} */}

            {/* second version of animation */}
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

# CSS

    .intro {
    background-color: var(--primary);
    }

    .container--intro {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 80px;
    flex-wrap: wrap;
    padding-top: 80px;
    padding-bottom: 56px;
    padding-left: 64px;
    padding-right: 64px;
    }

    .intro__content {
    display: flex;
    flex-direction: column;
    flex: 1 1 400px;
    gap: 48px;
    }

    .intro__heading_container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    }

    .intro__heading_container h1 {
    font-size: 56px;
    }

    .intro__heading_container .outlined-text {
    /* -webkit-text-stroke: 1px black; */
    font-weight: 600;
    position: relative;
    display: inline-block;
    color: transparent;
    background: linear-gradient(90deg, #00ffd5, #0479ff);
    -webkit-background-clip: text;
    background-clip: text;
    animation: pulseFill 2.5s ease-in-out infinite;
    }

    @keyframes pulseFill {
    0% {
        background-size: 100% 100%;
        background-position: 0% 50%;
        opacity: 1;
    }
    50% {
        background-size: 130% 130%;
        background-position: 100% 50%;
        opacity: 0.4;
    }
    100% {
        background-size: 100% 100%;
        background-position: 0% 50%;
        opacity: 1;
    }
    }

    .intro__buttons {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    }

    .intro__button {
    padding: 8px 20px;
    border-radius: var(--border-radius-btn-primary);
    }

    .intro__button--filled {
    background-color: var(--secondary);
    color: var(--primary);
    transition: 0.3s ease;
    }

    .intro__button--filled:hover {
    color: var(--primary);
    opacity: 0.9;
    }

    .intro__button--ghost {
    font-weight: 600;
    border: 1px solid var(--primary);
    transition: opacity 0.3s ease;
    }

    .intro__button--ghost:hover {
    opacity: 0.8;
    }

    /* IMAGE */

    /* first version of animation */
    .intro__imageWrapper {
    position: relative;
    width: 100%;
    max-width: 619px;
    aspect-ratio: 619 / 613;
    overflow: hidden;
    flex: 1 1 400px;
    }

    .intro__imageLayer {
    position: absolute;
    inset: 0;
    }

    /* second version of animation */
    /* .intro__image {
    flex: 1 1 400px;
    } */

    /* IMAGE */

    @media (max-width: 1080px) {
    .container--intro {
        gap: 48px;
        padding-top: 40px;
        padding-bottom: 56px;
        padding-left: 32px;
        padding-right: 32px;
    }

    .intro__content {
        gap: 24px;
    }

    .intro__heading_container h1 {
        font-size: 40px;
    }

    .intro__buttons {
        justify-content: center;
    }

    .intro__button--filled,
    .intro__button--ghost {
        width: 126px;
        text-align: center;
    }

    .intro__button--ghost {
        box-shadow: 0px 2px 2px rgb(216, 216, 216);
    }

    .intro__image:hover {
        transform: unset;
    }
    }
