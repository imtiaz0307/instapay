import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoWhatsapp,
  BiLogoYoutube,
} from "react-icons/bi";
import styles from "./styles/FooterNew.module.css";
import logo from "../assets/logo.svg";
import footer_right from "../assets/footer_right.png";
import contact_us from "../assets/contact.svg";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FooterNew = () => {
  const links = [
    {
      link: "#",
      icon: <BiLogoInstagram color="black" size={20} />,
    },
    {
      link: "#",
      icon: <BiLogoLinkedin color="black" size={20} />,
    },
    {
      link: "#",
      icon: <BiLogoFacebook color="black" size={20} />,
    },
    {
      link: "#",
      icon: <BiLogoWhatsapp color="black" size={20} />,
    },
    {
      link: "#",
      icon: <BiLogoYoutube color="black" size={20} />,
    },
    {
      link: "#",
      icon: <FaXTwitter color="black" size={20} />,
    },
  ];
  const linksData = [
    // {
    //   name: "LEGAL & REGULATORY",
    //   link: "/legal-and-regulatory",
    // },
    {
      name: "Terms and Conditions",
      link: "/terms-and-conditions",
    },
    {
      name: "AFFILIATION CERTIFICATE",
      link: "/affiliation-certificates",
    },
    {
      name: "PROHIBITED COUNTRIES",
      link: "/prohibited-countries",
    },
    // {
    //   name: "API DOCUMENTATION",
    //   link: "/",
    // },
    {
      name: "PRIVACY POLICY",
      link: "/privacy-policy",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
    {
      name: "REFUND POLICY",
      link: "/refund-policy",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.top}>
            <div className={styles.about}>
              <img src={logo} alt="Instapay" />
              <div className={styles.socials}>
                {links.map((link, index) => (
                  <a key={index} href={link.link} target="_blank">
                    {link.icon}
                  </a>
                ))}
              </div>
              <span>® 2023 All rights reserved.</span>
            </div>
            <div className={styles.links}>
              {linksData.map((it) => (
                <Link to={it.link} key={it.name} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{it.name.toUpperCase()}</Link>
              ))}
            </div>
            <div className={styles.contact_us}>
              {/* <h3>CONTACT US</h3> */}
              <Link to="/contact-us" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <img src={contact_us} alt="contact us" />
              </Link>
              {/* <p>
                Interested in diving deeper? Reach out to us. In case of genuine
                interest, we'll furnish you with all the necessary details,
                ensuring a transparent
              </p> */}
              <div>
                <h5>KEMIT KINGDOM (K2) SA</h5>
                <p>ROUTE DES FELAISES 7,</p>
                <p>2000 NEUChâTEL</p>
                <p>SWITZERLAND</p>
                <h5>VAT: CHE-260.546.812</h5>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.right}>
                    <img src={footer_right} alt="instapay" />
                </div> */}
      </div>
    </footer>
  );
};

export default FooterNew;
