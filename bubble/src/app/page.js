"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import AnotherSN from "../components/WhyAnotherSNSection-2dn_version/anotherSN-2nd_version";
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
      <Header scrolled={scrolled} setScrolled={setScrolled} isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className={styles.main}>
        <Intro isMobile={isMobile} />
        <AnotherSN />
        <UsageSection />
        <DownloadApp />
        <FAQ />
        <GetStart />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
