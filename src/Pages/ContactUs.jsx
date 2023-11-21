import React from "react";
import NavbarFooter from "../components/NavbarFooter";
import SidebarFixed from "../components/SidebarFixed";
import styles from "./styles/Contact.module.css";


const ContactUs = () => {
  return (
    <div>
      <div style={{ position: "fixed", left: 0, height: "100vh", top: 0 }}>
        <SidebarFixed featureText={"Contact US"} color="#000" />
      </div>
      <div style={{ position: "sticky", top: 0 }}>
        <NavbarFooter />
      </div>
      <main className={styles.content}>
        <h4>Any Queries?</h4>
        <h2>Contact us</h2>

        <div>
          <h6>Send your Views or Regards to us.</h6>
          <div className={styles.contact}>
            <div className={styles.inputs}>
              <input type="text" name="" placeholder="Your name" />
              <input type="text" name="" placeholder="Email" />
              <input
                type="text"
                name=""
                placeholder="Phone number (Optional)"
              />
            </div>
            <textarea
              className={styles.textarea}
              placeholder="Type in your message"
              rows="8"
            />
          </div>
          <div
            className={styles.buttons}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <input type="checkbox" name="subscribe" />
              <p>I agree to get Tactical and Financial Advice sent to me. </p>
              <span>(btw we don't spam)</span>
            </div>
            <button>Send Message!</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
