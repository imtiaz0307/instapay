import React from "react";
import styles from "./styles/PrivacyPolicy.module.css";
import NavbarFooter from "../components/NavbarFooter";
import SidebarFixed from "../components/SidebarFixed";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const dataCollect = [
    "personal particulars (e.g. name, contact details, residential address, proof of address, date of birth, identity card/passport details, and/or corporate details including board of directors, shareholders and beneficial owner/s)",
    "financial details (e.g. income, expenses)",
    "the comments and rating evaluation you received from other users for the services they paid for",
    "employment details (e.g. occupation, directorships and other positions held, employment history, salary, and/or benefits)",
    "information about your risk profile",
    "banking information (e.g. account numbers and banking transactions)",
    "personal opinions made known to us (e.g. feedback or responses to surveys)",
    "Information obtained with consent from your mobile device like device location, device information (including storage, model, mobile network) transactional and promotional SMS, communication information including contacts and call logs",
  ];

  const purposes = [
    "developing and providing payment facilities, products or services (whether made available by us or through us), including but not limited to:",
    "Wallet, Prepaid card or other transactions and clearing or reporting on these transactions;",
    "carrying out research, planning and statistical analysis; or",
    "analytics for the purposes of developing or improving our products, services, security, service quality, and advertising strategies;",
    "assessing and processing applications, instructions or requests from you or our customers;",
    "communicating with you, including providing you with updates on changes to products, services and banking facilities (whether made available by us or through us) including any additions, expansions, suspensions and replacements of or to such products, services and financial facilities and their terms and conditions;",
    "managing our platform and business operations and complying with internal policies and procedures;",
    "responding to queries or feedback;",
    "addressing or investigating any complaints, claims or disputes;",
    "verifying your identity for the purposes of providing financial facilities, products or services;",
    "conducting screenings or due diligence checks as may be required under applicable law, regulation or directive;",
    "complying with all applicable laws, regulations, rules, directives, orders, instructions and requests from any local or foreign authorities, including regulatory, governmental, tax and law enforcement authorities or other authorities;",
    "monitoring products and services provided by or made available through us;",
    "complying with obligations and requirements imposed on us from time to time by our service providers;",
    "financial reporting, regulatory reporting, management reporting, risk management (including transaction monitoring), audit and record-keeping purposes;",
    "enabling any actual or proposed assignee or transferee, participant or sub-participant of Wakanda Messenger rights or obligations to evaluate any proposed transaction;",
    "enforcing obligations owed to us; and/or",
    "seeking professional advice, including legal advice.",
  ];

  const disclosureConditions = [
    "where the disclosure has been agreed in a written contract or otherwise between InstaPay and the customer;",
    "where InstaPay is required to disclose the personal information to a third party on a need-to-know basis, provided that in such case InstaPay shall inform such third party of the confidential nature of the personal information and shall keep the same standards of information/ data security as that of InstaPay.",
    "where request for disclosure is requested by local authority under applicable law or regulations.",
  ];

  return (
    <div>
      <div style={{ position: "fixed", left: 0, height: "100vh", top: 0 }}>
        <SidebarFixed featureText={"Privacy Policy"} color="#000" />
      </div>
      <div style={{ position: "sticky", top: 0 }}>
        <NavbarFooter />
      </div>
      <main className={styles.content}>
        <h4>This policy applies to INSTAPAY services.</h4>
        <h2>Privacy Policy</h2>

        <div>
          <h4>
            Clear and easily accessible Statements of Practices and Policies
          </h4>

          <p>
            As a part of Kemit Kingdom ongoing efforts to ensure the compliance
            of modern Fintech approach, customer trust/ satisfaction, security
            oriented service and financial services, Kemit Kingdom has adopted
            the privacy policy aimed at protecting individual’s personal
            information entrusted and disclosed to InstaPay (the "Policy"). This
            Policy governs the way in which InstaPay collects, uses, discloses,
            stores, secures and disposes of personal information.
          </p>

          <br />
          <br />

          <p>
            In this policy ("us", "we", "our", “K2” or “Kemit Kingdom SA”) means
            InstaPay, that operates{" "}
            <Link to={"/"}>https://www.insta-pay.ch/</Link> (the "App", “Chat
            Bot”), and “you”, “your” or “yours” means the persons to whom this
            policy applies.
          </p>

          <br />
          <br />
          <p>
            This page informs you of our policies regarding the collection, use
            and disclosure of Personal Information we receive from users of the
            Site.
          </p>
          <br />
          <br />
          <p>
            We use your Personal Information only for providing and improving
            InstaPay app. By using the app, you agree to the collection and use
            of information in accordance with this policy.
          </p>
        </div>

        <div>
          <h4>What Personal Information Do We Collect</h4>

          <p>
            “Personal Information” is data that can be used to identify a
            natural person. Some examples of personal information that we may
            collect are:
          </p>
          <br />
          <br />
          <ul>
            {dataCollect.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Use of Personal Information</h4>
          <p>
            InstaPay app collects and uses the financial information and other
            personal information from its customers. This information is used
            for specific business purposes or for other related purposes
            designated by InstaPay or for a lawful purpose to comply with the
            applicable laws and regulations, and will include:
          </p>
          <br />
          <br />
          <ul>
            {purposes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <br />
          <br />
          <p>
            We may also use personal information for purposes set out in the
            terms and conditions that govern our relationship with you or our
            customer.
          </p>

          <br />
          <br />
          <p>
            InstaPay may divulge some personal information collected from the
            customer, for cross selling or any other purposes.
          </p>
          <br />
          <br />
          <p>
            The authenticity of the personal information provided by the
            customer shall not be the responsibility of InstaPay.
          </p>
          <br />
          <br />
          <p>
            Any information that is freely available or accessible in public
            domain shall not be regarded as personal information for the
            purposes of this Policy and InstaPay shall not be responsible for
            the same.
          </p>
        </div>

        <div>
          <h4>Disclosure of personal information</h4>
          <p>
            The personal information collected by InstaPay shall not be
            disclosed to other organization except:
          </p>
          <br />
          <br />
          <ul>
            {disclosureConditions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>
            Withdrawal of Consent to use or correction of your Personal
            Information
          </h4>
          <p>
            Sharing of personal information with InstaPay is voluntary and in
            case customer wishes to withdraw its consent or make modifications
            to the personal information, customer can do so by suspending their
            subscription to the Wakanda app and customer accepts the effects of
            such withdrawal.
          </p>
        </div>

        <div>
          <h4>Cookies and Related Technologies</h4>
          <p>
            Our website and mobile application (“app”) use cookies. A cookie is
            a small text file placed on your computer or mobile device when you
            visit a website or use an app. Cookies collect information about
            users and their visit to the website or use of the app, such as
            their Internet protocol (IP) address, how they arrived at the
            website (for example, through a search engine or a link from another
            website) and how they navigate within the website or app. We use
            cookies and other technologies to facilitate your internet sessions
            and use of our apps, offer you products and/or services according to
            your preferred settings, track use of our websites and apps and to
            compile statistics about activities carried out on our websites
            and/or through our apps.
          </p>
          <br />
          <br />
          <p>
            A pixel tag, also known as a web beacon, is an invisible tag placed
            on certain pages of our website but not on your computer. Pixel tags
            are usually used in conjunction with cookies and are used to monitor
            the behaviour of users visiting the website.
          </p>
          <br />
          <br />
          <p>
            You may set up your web browser to block cookies which will in turn
            disable the pixel tags from monitoring your website visit. You may
            also remove cookies stored from your computer or mobile device.
            However, if you do block cookies and pixel tags, you may not be able
            to use certain features and functions of our websites.
          </p>
          <br />
          <br />
          <p>
            We seek certain app permissions at the time of installation on your
            mobile device, providing us access to data on your mobile device to
            make your financial experience personalized and enabling us to offer
            you relevant products and services. Should you wish to modify or
            disable these permissions, you can change the app settings on your
            mobile device at any time. Do note that some of the functionality
            and offers on the app may get impacted by this action.
          </p>
        </div>

        <div>
          <h4>Other websites</h4>
          <p>
            Our websites may contain links to other websites which are not
            maintained by InstaPay. This privacy policy only applies to the
            websites of Instapay. When visiting these third party websites, you
            should read their privacy policies which will apply to your use of
            the websites.
          </p>
        </div>

        <div>
          <h4>Reasonable Security Practices and Procedures</h4>
          <p>
            InstaPay shall take reasonable steps and measures to protect the
            security of the customer’s personal information from misuse and
            loss, unauthorised access, modification, or disclosure. InstaPay
            maintains its security systems to ensure that the personal
            information of the customer is appropriately protected. InstaPay
            ensures that its employees respect the confidentiality of any
            personal information held by InstaPay.
          </p>
        </div>

        <div>
          <h4>Changes To This Privacy Policy</h4>
          <p>
            This Privacy Policy is effective as of November 1st, 2023 and will
            remain in effect except with respect to any changes in its
            provisions in the future, which will be in effect immediately after
            being posted on this page.
          </p>
          <br />
          <br />
          <p>
            We reserve the right to update or change our Privacy Policy at any
            time and you should check this Privacy Policy periodically. Your
            continued use of the Service after we post any modifications to the
            Privacy Policy on this page will constitute your acknowledgment of
            the modifications and your consent to abide and be bound by the
            modified Privacy Policy.
          </p>
          <br />
          <br />
          <p>
            If we make any material changes to this Privacy Policy, we will
            notify you either through the email address you have provided us, or
            by placing a prominent notice on our website.
          </p>
        </div>
        <div>
          <h4>Response to Enquiries and Complaints</h4>
          <p>
            To contact us on any aspect of this policy or for any
            discrepancies/grievances with respect to your personal information,
            you may write to our support at:{" "}
            <Link to={"mailto:support@insta-pay.ch"}>support@insta-pay.ch</Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
