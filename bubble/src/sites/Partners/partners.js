"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import pageStyles from "../../app/page.module.css";
import partnersStyles from "./partners.module.css";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";

export default function PartnersPage() {
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
    <div className={pageStyles.page}>
      <Header scrolled={scrolled} setScrolled={setScrolled} isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* section partners form */}
      <section className={partnersStyles.partners}>
        <Image
          className={partnersStyles.partners_bg_image}
          src='/bg-partners.svg'
          alt='Background image for partners site - logo image'
          width={760 * 1.1}
          height={882 * 1.1}
        />
        {/* general container */}
        <div className={`${partnersStyles["container--partners"]}`}>
          <div className={partnersStyles.partners_container}>
            <div className={partnersStyles.info_container}>
              <div className={partnersStyles.steps}>
                <span className={partnersStyles.tagline}>Steps</span>
                <ul className={partnersStyles.step_items}>
                  <li className={partnersStyles.step_item}>
                    <span>01</span>SUBMIT INITIAL DETAILS
                  </li>
                  <span className={partnersStyles.delimiter}></span>
                  <li className={partnersStyles.step_item}>
                    <span>02</span>WE REVIEW THE REQUEST
                  </li>
                  <span className={partnersStyles.delimiter}></span>
                  <li className={partnersStyles.step_item}>
                    <span>03</span>SHARE YOUR CAMPAIGN
                  </li>
                  <span className={partnersStyles.delimiter}></span>
                  <li className={partnersStyles.step_item}>
                    <span>04</span>WE CHECK & APPROVE IT
                  </li>
                  <span className={partnersStyles.delimiter}></span>
                  <li className={partnersStyles.step_item}>
                    <span>05</span>GO LIVE
                  </li>
                </ul>
              </div>
              <address className={partnersStyles.contact}>
                <div className={partnersStyles.contact_item}>
                  <div className={partnersStyles.contact_item__img_container}>
                    <Image src='/call.svg' alt='SVG Arrow' width={24} height={24} />
                  </div>
                  <p className={partnersStyles.contact_item__content}>
                    <strong>Phone:</strong>
                    <a href='tel:+61281234567'>+61 2 8123 4567</a>
                  </p>
                </div>
                <div className={partnersStyles.contact_item}>
                  <div className={partnersStyles.contact_item__img_container}>
                    <Image src='/location_on.svg' alt='SVG Arrow' width={24} height={24} />
                  </div>
                  <p className={partnersStyles.contact_item__content}>
                    <strong>Office:</strong>
                    Level 5, 123 Digital Lane, Sydney NSW 2000, Australia
                  </p>
                </div>
              </address>
            </div>
            <div className={partnersStyles.form_container}>
              <div className={partnersStyles.form_header}>
                <h1>Becoming a partner</h1>
                <p>
                  Partner with us to share your story with a growing, engaged audience. We your advertisement will be
                  part of the adventures.
                </p>
              </div>
              <form className={partnersStyles.form_content} action='/subscribe' method='post'>
                <input
                  className={partnersStyles.form_input}
                  type='text'
                  id='companyName'
                  name='companyName'
                  placeholder='Company name'
                  required
                />
                <div className={partnersStyles.form_content_items_container}>
                  <input
                    className={partnersStyles.form_input}
                    type='text'
                    id='contactPerson'
                    name='contactPerson'
                    placeholder='Contact person name'
                    required
                  />
                  <input
                    className={partnersStyles.form_input}
                    type='email'
                    id='newsletter-email'
                    name='email'
                    placeholder='Email'
                    required
                  />
                </div>
                <input
                  className={partnersStyles.form_input}
                  type='url'
                  id='website'
                  name='website'
                  placeholder='Website'
                />
                <div className={partnersStyles.form_textarea_container}>
                  <p className={partnersStyles.form_textarea_text}>Anything else you would like to share.</p>
                  <textarea
                    className={partnersStyles.form_input}
                    type='text'
                    id='message'
                    name='message'
                    placeholder='Please let us know ..'
                  ></textarea>
                </div>
                <div className={partnersStyles.form_terms_container}>
                  <p className={partnersStyles.form_terms}>
                    By submit, you agree with <a href='/privacy'>terms</a> & <a href='#'>conditions</a>.
                  </p>
                  <button className={partnersStyles.form_submit} type='submit'>
                    Submit application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
