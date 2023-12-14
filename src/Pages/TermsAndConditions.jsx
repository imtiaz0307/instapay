import React from 'react'
import styles from "./styles/TermsAndConditions.module.css"
import NavbarFooter from '../components/NavbarFooter'
import SidebarFixed from '../components/SidebarFixed'
import { Link } from "react-router-dom"

const TermsAndConditions = () => {

    const listLinks = [
        {
            name: "Terms of Thunes",
            link: "https://www.thunes.com"
        },
        {
            name: "Terms of MFS Africa",
            link: "https://www.onafriq.com"
        },
        {
            name: "Terms of Checkin.com",
            link: "https://www.checkin.com"
        },
        {
            name: "Terms of CoinPayments",
            link: "https://www.coinpayments.net"
        },
        {
            name: "Terms of DTONE",
            link: "https://www.dtone.com",
            text: "(Service provider for mobile airtime recharge)"
        },
    ]

    return (
        <div>
            <div style={{ position: "fixed", left: 0, height: "100vh", top: 0 }}>
                <SidebarFixed featureText={"Terms And Conditions"} color='#000' />
            </div>
            <div style={{ position: "sticky", top: 0 }}>
                <NavbarFooter />
            </div>
            <main className={styles.content}>

                <h4>Terms and Conditions to InstaPay services.</h4>
                <h2>Terms and Conditions of Use and Sale</h2>

                <div className={styles.plain_text_container}>
                    <h4>Preamble</h4>
                    <p>InstaPay Chat Bot is a cutting-edge service operated by KEMIT KINGDOM (hereinafter referred to as “K2 SA”), a public limited company governed by Swiss law, registration number CHE-260.546.812. K2 SA is headquartered at Route des Falaises 7 - 2000 Neuchâtel, Switzerland. K2 SA specializes in innovative financial technology solutions, focusing on seamless money transfer and payment services. Our application targets social media platforms, leveraging a chat bot to enable real-time financial transactions among users. Key features include Send Money, Request Money, Send a Quote, Convert Crypto to Fiat, and QR Code Payment.
                    </p>
                    <br />
                    <br />
                    <p>For inquiries regarding these Terms and Conditions of Use and Sale (hereinafter also referred to as the “Terms and Conditions of Use” or simply “Terms and Conditions”), please contact us via email at: <Link to={"mailto:support@insta-pay.ch"}>info@insta-pay.ch</Link></p>
                    <br />
                    <br />
                    <p>By using our Services, users enter into a contractual relationship with KEMIT KINGDOM, which is governed by these Terms and Conditions of Use.</p>
                </div>

                <div className={styles.plain_text_container}>
                    <h4>Contract</h4>
                    <p>The contract between the User and K2 SA comprises the following integral elements:</p>
                    <ul className={styles.unordered}>
                        <li>The complete Terms and Conditions of Use.</li>
                        <li>The Privacy Policy.</li>
                    </ul>
                    <p>Users should be aware that external providers collaborating with Kemit Kingdom to ensure the smooth functioning of our Services, such as payment providers mentioned in Article 2.8 of these Terms and Conditions, have their own terms and conditions. Acceptance of these external terms is a prerequisite for using the respective services.</p>
                    <p>We encourage users to familiarize themselves with these conditions, available at the following links:</p>
                    <ul className={styles.unordered}>
                        {listLinks.map(item => (
                            <li key={item.name}>
                                <Link target='_blank' to={item.link}>{item.name}</Link>
                                {
                                    item?.text && <span>{item.text}</span>
                                }
                            </li>
                        ))}
                    </ul>
                    <p>These Terms and Conditions are organized into several sections for ease of understanding. We strongly advise reading these Terms and Conditions thoroughly before acceptance.</p>

                    <br />
                    <br />
                    <p>By registering for InstaPay, and using any of our services or those provided by our third-party service providers, you acknowledge, agree, and commit to comply with these Terms and Conditions. You also understand and agree that the use of the application and certain services is contingent upon your successful identification by us, in accordance with the policies and procedures notified to you.</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h5>Sections of the Terms and Conditions</h5>
                    <br />
                    <br />
                    <div className={styles.ptc_sec}>
                        <h5>Section 1: </h5>
                        <p>Definitions and Interpretations</p>
                    </div>
                    <div className={styles.ptc_sec}>
                        <h5>Section 2: </h5>
                        <p>Terms and Conditions Applicable to InstaPay Services</p>
                    </div>
                    <div className={styles.ptc_sec}>
                        <h5>Section 3: </h5>
                        <p>Terms and Conditions Applicable to InstaPay Mobile Wallet </p>
                    </div>
                </div>

                <div className={styles.plain_text}>
                    <h4>1. Definitions and Interpretations</h4>
                    <div className={styles.pt_sub}>
                        <h5>1.1 Definitions and Terminologies</h5>
                        <p>The following terms have the meanings set out below, unless the context indicates otherwise:</p>
                        <br />
                        <br />
                        <br />
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Account/User Account”</span> <span>: Includes InstaPay Chat Bot, InstaPay Wallet, Visa Prepaid Card Account, or IBAN account.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Affiliate”</span> <span>: An entity that is controlled by, controls, or is under common control with a person, where "control" implies ownership of a majority of the voting power.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Alert/Electronic Advice”</span> <span>: In-app, SMS, or email notifications sent to your registered contact details.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Application”</span> <span>: Refers to the InstaPay Chatbot and InstaPay mobile application.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“ATM”</span> <span>: Automated teller machine for accessing funds in your Account/s.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Available Balance”</span> <span>: Funds received from third parties or social media interactions, restricted due to exceeding maximum monthly balance/transfer limits.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Billing Organisations/Service Providers”</span> <span>: Third-party entities registered with InstaPay for bill payments.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Card Transaction”</span> <span>: Payments or charges made using your Visa Prepaid Card, with or without a physical signature or authorization.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Card-Not-Present Transaction”</span> <span>: Transactions where the cardholder and card are not physically present, including online, mail, or phone orders.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Contract”</span> <span>: The agreement between the User and KEMIT KINGDOM for Service usage under specific conditions.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Current Balance”</span> <span>: Immediate usable funds in your Wallet.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Deposit”</span> <span>: Funds added to your account to load your wallet or card.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Electronic Instructions”</span> <span>: Communications or instructions sent via InstaPay platforms using electronic authentication/security codes.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Electronic Services”</span> <span>: Payment and other services offered electronically, including those requiring PINs or Cards.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“External Account”</span> <span>: Accounts operated outside K2 SA, including bank accounts, e-wallets, and crypto wallets.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Group”</span> <span>: Kemit Kingdom - K2 - SA and its subsidiaries.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“FINMA”</span> <span>: Swiss Financial Market Supervisory Authority.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Identification Checks”</span> <span>: KYC/KYB processes for verifying user identities, including document checks for account upgrades and service access.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“InstaPay Platform”</span> <span>: Portals where InstaPay services are accessible, including the Chat Bot, User Dashboard, and mobile app.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Kemit Kingdom, InstaPay, InstaPay platform, InstaPay App, Our, We and Us”</span> <span>: Means Kemit Kingdom organization and its successors and assigns, that operates the InstaPay products and services.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“KEMIT KINGDOM, we, our”</span> <span>: Refers to Kemit Kingdom and its staff or collaborators.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“KYC / KYB”</span> <span>: Know Your Customer/Business processes.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Merchant”</span> <span>: Entities accepting payments via InstaPay for goods or services.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Social Media platform”</span> <span>: Platforms where InstaPay Chatbot is accessible.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Mobile Phone/Device”</span> <span>: Handset used to access InstaPay services.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Notification”</span> <span>: Electronic alerts sent to registered contact methods.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Participant”</span> <span>: Entities involved in providing InstaPay services.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Partner Financial Institution(s)”</span> <span>: Banks holding Wallet assets.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Payment”</span> <span>: Service for making payments or transfers via InstaPay platforms.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Password”</span> <span>: Unique login credentials for InstaPay platforms.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Personal data”</span> <span>: Information relating to an identifiable person.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Personal Information”</span> <span>: User-provided data for using KEMIT KINGDOM services.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Point of Sale/POS Transaction(s)”</span> <span>: Payments made using QR Codes, chips, or magnetic stripes at payment interfaces.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Premium access”</span> <span>: User account type as described in Article 13.4.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Prepaid Card”</span> <span>: Refers to InstaPay Visa Virtual and Physical Prepaid Cards.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Providers”</span> <span>: Entities partnered with Kemit Kingdom for InstaPay services.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Professional User(s)”</span> <span>: Legal entities holding InstaPay accounts.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Security Codes”</span> <span>: Passwords, PINs, OTPs, and other codes for InstaPay service access.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Security Devices”</span> <span>: Equipment provided for accessing InstaPay services.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Service(s)”</span> <span>: Described in Article 2, refers to all InstaPay services.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Silver access”</span> <span>: User account type as described in Article 13.4.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Social Plugin(s)”</span> <span>: InstaPay applications on third-party websites or apps.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Standard access”</span> <span>: User account type as described in Article 13.4.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Third Party Provider/Third Party”</span> <span>: Entities partnered with Kemit Kingdom for InstaPay services.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Transaction”</span> <span>: Operations processed through InstaPay, including payments, fund transfers, and administrative functions.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Transaction History”</span> <span>: Record of all transactions via InstaPay platforms.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“User Account”</span> <span>: Account created on the Application, applicable to both Basic and Premium Access.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“User ID”</span> <span>: Identification for accessing InstaPay services.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“User(s)” or “Client(s)”</span> <span>: Individuals with an InstaPay account.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Visa Prepaid Card”</span> <span>: Visa virtual and physical prepaid cards issued by KEMIT KINGDOM.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“InstaPay App”</span> <span>: Mobile application for InstaPay services.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“InstaPay QR Code”</span> <span>: Payment facility using QR code scanning.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“InstaPay Services”</span> <span>: Services connected with InstaPay platforms, including wallet, card, and customer support.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“InstaPay Wallet Account”</span> <span>: Prepaid multi-service payment instrument offered by Kemit Kingdom, with Basic, Standard, and Premium account types.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Wallet”</span> <span>: Service of electronic wallet as described in Articles 13.1.1 and following, operated by K2 SA as part of the InstaPay network.</span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Website”</span> <span>: Refers to the website owned, established and maintained by K2 SA located at <Link to={"/"}>www.insta-pay.ch</Link></span></p>
                        <p style={{ marginBottom: "10px" }}><span style={{ color: "#5926f0" }}>“Write comments and rating”</span> <span>: User feedback feature for services acquired through InstaPay.</span></p>

                    </div>
                    <div className={styles.pt_sub}>
                        <h5>1.2 Data Protection</h5>
                        <p>We are committed to protecting your personal data in compliance with the EU General Data Protection Regulations 2016/679 (“GDPR”) and other applicable privacy laws. For more detailed information, please refer to our <Link to={"/privacy-policy"}>Privacy Policy.</Link></p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>1.3 Interpretations</h5>

                        <p>In these Terms and Conditions:</p>
                        <ul>
                            <li>“You”, “Your”, or “Customer” refers to you, the customer.</li>
                            <li>“We”, “Our”, or “Us” means Kemit Kingdom – K2 – SA, its successors, assigns, and Affiliates, where applicable.</li>
                        </ul>

                        <p>References to:</p>
                        <ul>
                            <li>An “amendment” include modifications, replacements, or re-enactments.</li>
                            <li>An “authorization” or “approval” encompass consents, clearances, permissions, and similar legal endorsements.</li>
                            <li>“Law” covers all legal directives, including statutes, rules, regulations, judgments, and interpretations by judicial authorities.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.plain_text}>
                    <h4>2. Use of the Services</h4>
                    <p>InstaPay offers a range of services related to its function as a payment platform.</p>
                    <div className={styles.pt_sub}>
                        <h5>2.1 Financial Services</h5>
                        <p>Upon subscribing to Premium Access, Users gain access to all financial features of the Wallet. Our Financial Services, as detailed in Article 15.1.2, are facilitated through partnerships with external payment service providers like Thunes, MFS Africa, and Swiss Remit. These services include, but are not limited to:</p>
                        <ul>
                            <li>Transferring values between External Accounts and Wallets.</li>
                            <li>Wallet-to-Wallet transfers.</li>
                            <li>Transfers involving the InstaPay Prepaid Visa card.</li>
                        </ul>
                        <br />
                        <br />
                        <p>Note: Transfers are subject to fees and commissions, which vary by country and transaction type.</p>
                    </div>
                </div>
                <div className={styles.plain_text}>
                    <h4>3. Fight against Fraud and Money Laundering</h4>
                    <p>K2 SA adheres to strict anti-money laundering policies, including client verification and transaction monitoring. Suspicious activities can be reported via <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} to={"/contact-us"}>this form</Link>. We reserve the right to refuse or terminate accounts based on the results of identity checks or suspicions of illegal activities.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>4. User's Obligation</h4>
                    <p>User must: </p>
                    <ul>
                        <li>Protect their smartphone against unauthorized use.</li>
                        <li>Keep all codes, including InstaPay service and device lock codes, confidential.</li>
                        <li>Immediately change lock codes if unauthorized access is suspected.</li>
                        <li>Inform K2 SA immediately in case of smartphone loss or theft.</li>
                        <li>Avoid jailbreaking or rooting the smartphone.</li>
                        <li>Regularly verify payments and report discrepancies to K2 SA within 30 days.</li>
                    </ul>
                    <p>Users must also comply with all legal and fiscal obligations, including income declaration and tax payments.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>5. Code of Good Conduct</h4>
                    <p>By using InstaPay, you agree to adhere to our community standards, which prohibit:</p>

                    <ul>
                        <li>Offering or soliciting sexual services, and the sale or purchase of firearms, alcohol, tobacco, drugs, and medicines (regardless of local legality).</li>
                        <li>Selling live animals, engaging in poaching, or trading endangered species or their parts.</li>
                        <li>Posting content that is hateful, violent, racist, or promotes terrorism or organized crime.</li>
                        <li>Attaching inappropriate content to payment requests, including explicit nudity or sexual acts.</li>
                    </ul>
                    <p>This list is not exhaustive. You are expected to behave lawfully, ethically, and respectfully towards other users, avoiding any actions that could harm their dignity or privacy. Violations may result in suspension or deletion of your account.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>6. Disclaimers</h4>
                    <p>You use InstaPay at your own risk. Our services and any documents provided are "as is" and "as available," without any warranties, express or implied. We are not liable for any unlawful user conduct on our platforms.</p>
                    <br />
                    <p>We do not guarantee that InstaPay services will always meet your needs, be error-free, or operate without interruptions. You are responsible for any risks to your device or data from downloads made through our service.</p>
                    <br />
                    <p>No advice or information, whether oral or written, obtained from us creates any warranty not expressly stated in these Terms and Conditions.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>7. Liability</h4>
                    <p>K2 SA reserves the right to modify, suspend, or discontinue services at any time for technical, legal, or operational reasons. We strive to minimize disruptions and will endeavor to notify users of significant changes when feasible.</p>

                    <div className={styles.pt_sub}>
                        <h5>7.1 Exclusions of Liability:</h5>
                        <ul>
                            <li>We are not liable for losses not caused by our breach, unforeseeable losses, or user-submitted content that is defamatory, offensive, or illegal.</li>
                        </ul>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>7.2 Professional Users:</h5>
                        <ul>
                            <li>For commercial users, our liability is limited to the greater of: (a) transaction income in the 6 months prior to a complaint, or (b) CHF 500.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.plain_text}>
                    <h4>8. Privacy Policy</h4>
                    <p>By using InstaPay, you consent to the collection and use of your personal data as outlined in our <Link to={"/privacy-policy"}>Privacy Policy</Link>. This includes sensitive data for account verification and data required by legal entities.</p>

                    <div className={styles.pt_sub}>
                        <h5>8.1 Data Collection:</h5>
                        <ul>
                            <li>We collect different data based on account type and transaction requirements. For details, refer to our client acceptance policy.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.plain_text}>
                    <h4>9. Amendments</h4>
                    <p>We continuously improve our services, which may necessitate updates to these Terms. Changes will be communicated via email at least 30 days in advance, except in urgent legal situations.</p>

                    <div className={styles.pt_sub}>
                        <h5>9.1 Acceptance of Terms:</h5>
                        <ul>
                            <li>Continued use of InstaPay after changes take effect signifies your acceptance of the revised terms.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.plain_text}>
                    <h4>10. Severability</h4>
                    <p>If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect. K2 SA and the user will endeavor to replace any invalid provision with a valid one that closely matches the original intent and purpose.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>11. Applicable Law and Jurisdiction</h4>
                    <p>These Terms and our Privacy Policy are governed by Swiss law. Disputes arising under these Terms will be resolved in the courts of Neuchâtel, Switzerland, subject to appeal to the Federal Court.</p>
                    <div className={styles.pt_sub}>
                        <h5>11.1 Dispute Resolution:</h5>
                        <ul>
                            <li>Professional Users and other users should bring disputes to the jurisdiction of Neuchâtel courts.</li>
                            <li>For parties covered by consumer protection laws, disputes will be resolved in accordance with the relevant laws.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.plain_text}>
                    <h4>12. Terms and Conditions Applicable Only to the InstaPay Chat Bot</h4>
                    <p>This section is applicable only to the InstaPay Chat Bot services. If you do not agree to the terms of this Agreement, Please DO NOT accept the Agreement.</p>
                    <div className={styles.pt_sub}>
                        <h5>12.1 Acceptance of the agreement</h5>
                        <p>By registering for an InstaPay account or using the InstaPay platform ("Service"), you are agreeing to be legally bound by this Agreement, our Privacy Policy, and any additional terms presented to you if you utilize our products or services. If you do not consent to these terms, please refrain from using the Service.</p>
                        <br />
                        <p>We reserve the right to modify this Agreement and the InstaPay Services for reasons such as legal compliance, new features, or changes in business practices. The latest version of the Agreement will be available on the app and at <Link to={"/"}>www.insta-pay.ch</Link>. We recommend regularly reviewing the most current version. Significant changes affecting your rights or obligations will be communicated in advance through the Service or email. Continued use of the Service after changes signifies your acceptance of the revised Agreement.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.2 Eligibility</h5>
                        <p>To create an InstaPay account and access our Services, you must be at least 16 years old. Minors should review this Agreement with a legal guardian. By using the Service, you confirm that you are legally capable of entering into binding contracts.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.3 Your Account</h5>
                        <p>You can sign up or log in to the InstaPay chat bot and user web portal using your created credentials. You are responsible for keeping your login credentials confidential and for all activities under your account. If unauthorized access occurs, immediately change your password or contact <Link to={"/"}>support@insta-pay.ch</Link></p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.4 Scope of License</h5>
                        <p>KEMIT KINGDOM grants you a personal, non-transferable, and non-exclusive license to use the InstaPay Software on your devices, subject to this Agreement's terms, including future updates or revisions.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.5 Restriction</h5>
                        <p>Without KEMIT KINGDOM's prior written consent, you must not:</p>
                        <ul>
                            <li>Reproduce, sublicense, sell, rent, lease, export, import, distribute, or transfer rights to the Software;</li>
                            <li>Modify, create derivative works, reverse engineer, decompile, or attempt to discover the source code of the Software;</li>
                            <li>Remove or alter any proprietary notices in the Software;</li>
                            <li>Use the Software for commercial purposes without a license.</li>
                        </ul>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.6 Consent to use of data</h5>
                        <p>We collect and use information about your device, usage, and location to support Software updates and services, in line with our Privacy Policy. By using our services, you consent to our data practices as outlined in the Privacy Policy.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.7 Modifications </h5>
                        <p>We may amend this Agreement at any time, with the revised version available on our website. Significant amendments will be communicated to you. Continued use of the Software after amendments indicates your acceptance of the new terms.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.8 Termination </h5>
                        <p>This Agreement remains effective while you use InstaPay Services or have an account. You may terminate your use of the Software or request account termination at any time. KEMIT KINGDOM may also terminate or suspend your account if you breach this Agreement. Upon termination, you must cease all use of the Software and destroy all copies.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.9 Intellectual Property</h5>
                        <p>All intellectual property in the Software is protected under copyright, trademark, and other laws. KEMIT KINGDOM retains all rights in the Service and its content. You must not use, copy, or alter any intellectual property without prior consent.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.10 Fund Transfer through InstaPay Wallet</h5>
                        <p>Fund transfers via InstaPay Wallet to third-party accounts are subject to the terms of those third parties. KEMIT KINGDOM is not liable for errors in transfer details provided by you. We reserve the right to set and modify transfer limits.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.11 Account Balance and Transaction History</h5>
                        <p>Monitor your account balance and transaction history. Report any unauthorized transactions or discrepancies within 14 days. KEMIT KINGDOM's records are binding in case of disputes.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.12 Security Codes</h5>
                        <p>You are responsible for the security of your InstaPay credentials. Notify us immediately if you suspect unauthorized use or if your account security is compromised.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.13 Security, software, and Hardware</h5>
                        <p>You are responsible for maintaining the security and compatibility of your devices with InstaPay Services. KEMIT KINGDOM is not liable for losses due to incompatibility or security breaches.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.14 Record Maintenance</h5>
                        <p>KEMIT KINGDOM will maintain transaction records as required by law. Our records are conclusive in case of disputes.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.15 Changes and Fees</h5>
                        <p>Refer to our Rates and Fees for details. We reserve the right to modify fees, with reasonable notice in most cases.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.16 Problems with Goods and Services</h5>
                        <p>We are not liable for issues with goods or services purchased through InstaPay. Disputes should be resolved with the provider.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.17 Disclaimers</h5>
                        <p>The Software is provided "as-is" without warranty. KEMIT KINGDOM is not liable for any losses or damages related to the use of the Software.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.18 Indemnification</h5>
                        <p>You agree to indemnify KEMIT KINGDOM against any third-party claims related to your use of the Service.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>12.19 Choice of Law and Jurisdiction</h5>
                        <p>This Agreement is governed by Swiss law. Disputes will be resolved in the jurisdiction court of Geneva.</p>
                    </div>
                </div>
                <div className={styles.plain_text}>
                    <h4>13.	Terms and Conditions Applicable to InstaPay Wallet</h4>
                    <p>This section exclusively pertains to the InstaPay Wallet service. If you disagree with these terms, please DO NOT accepting the Agreement.</p>
                    <div className={styles.pt_sub}>
                        <h5>13.1 Access to the Service</h5>
                        <p>InstaPay offers three distinct Access types for User Account creation, primarily dependent on the User's nature (individual or legal entity) and the anticipated Wallet credit amounts.</p>
                        <br />
                        <p>
                            In combating fraud and money laundering, and considering the transaction volumes through InstaPay, K2 SA is mandated to conduct various verifications. Users must provide specific information and documents for each Access type, the extent of which varies based on the Access level.
                        </p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>13.1.1 The Wallet</h5>
                        <div className={styles.pts_sub}>
                            <h5>13.1.1.1 What is a Wallet?</h5>
                            <p>An electronic wallet, InstaPay facilitates payment and money transfer operations. It supports services like bank deposits to partner banks, transactions on Mobile Money accounts/partner Wallet applications, money transfers (including cash withdrawals and crypto wallet transactions), and payments via cards (Visa/Mastercard).</p>
                            <br />
                            <p>Premium Access may result in significant currency flows in and out of the Wallet, potentially involving international transactions and currency conversions. K2 SA collaborates with payment providers (as per Article 2.1) to offer competitive conversion rates, enhancing transaction profitability for Users.</p>
                        </div>
                        <div className={styles.pts_sub}>
                            <h5>13.1.1.2 Creation of Wallet?</h5>
                            <p>A Wallet is automatically created upon User registration. Users may opt for an Upgrade Access to unlock additional features, lift transactional restrictions, and increase the Wallet's deposit limit. Opening a SILVER account (for individuals) or a PREMIUM account (for professionals/corporates) requires identity verification as per Article 16, incurring non-refundable costs payable at account opening or upon upgrading from a Standard Account.</p>
                            <br />
                            <p>Natural Persons:</p>
                            <br />
                            <ul>
                                <li>During registration, Users can opt for a Upgraded Account, or defer this decision.</li>
                                <li>Within the app, Users can navigate to “Profile” → “Profile Settings” → “Upgrade account” to select a “SILVER Account"</li>
                            </ul>
                            <br />
                            <p>Legal Persons:</p>
                            <br />
                            <ul>
                                <li>Legal entities can request a Premium Business/Company account during registration or later.</li>
                                <li>In-app, navigate to “Profile” → “Profile Settings” → “Upgrade account” → “upgrade now”.</li>
                            </ul>
                            <br />
                            <p>K2 SA may request additional information, block Wallets or transactions, and suspend User accounts as needed for legal or regulatory compliance.</p>
                            <br />
                            <p>A multi-currency Wallet</p>
                            <br />
                            <ul>
                                <li>The default Wallet currency is the User's local currency, but other currencies can be added.</li>
                                <li>Users can transfer funds between different currency balances.</li>
                            </ul>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <p>Restrictions:</p>
                            <br />
                            <ul>
                                <li>Users cannot combine multiple Wallets.</li>
                                <li>Transactional rules vary by Access type (Standard, Silver, Premium), detailed in Articles 15.4 and onwards.</li>
                            </ul>
                            <br />
                            <p>Current Balance and Available Balance</p>
                            <br />
                            <ul>
                                <li>The Current Balance is immediately usable, subject to a 30-day billing cycle.</li>
                                <li>The Available Balance includes temporarily blocked funds due to exceeded transactional limits, released to the Current Balance after the billing cycle.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>13.1.2 Money Transfer And Payment Operation</h5>
                        <p>Your Wallet supports various money transfer and payment services. However, the actual payment to recipients depends on payment providers and may be subject to regulatory restrictions. Users are responsible for understanding payment terms for specific countries.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>13.1.3 Creation of an InstaPay Account</h5>
                        <p>To create an account, visit <Link to={"/"}>www.insta-pay.ch</Link>, complete the sign-up form, and link InstaPay with desired social media platforms. Standard Wallet Accounts are free. An OTP code is generated for phone number verification and service linkage.</p>
                        <br />
                        <p>By accepting these Terms, you acknowledge:</p>
                        <br />
                        <ul>
                            <li>Minimum age requirement of 16.</li>
                            <li>Compliance with our Terms and non-eligibility if previously deactivated.</li>
                            <li>Legal entitlement to our products and services.</li>
                        </ul>
                        <br />
                        <p>Standard access offers limited application and Wallet features, with a monthly balance cap of CHF 150 (country-dependent, max CHF 250). For full feature access, an upgrade is required, with conditions outlined in Article 15.4.</p>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>13.2 Eligibility for InstaPay Wallet service</h5>
                        <br />
                        <ul>
                            <li>Minimum age of 16 and legal capacity to contract.</li>
                            <li>Valid, active mobile number and email address.</li>
                            <li>InstaPay App downloaded on a mobile device (future requirement).</li>
                            <li>Compliance with KYC/KYB checks for Premium Account upgrades.</li>
                            <li>Successful OTP verification.</li>
                            <li>Acknowledgment of InstaPay's right to reject application requests.</li>
                            <li>Limit of one Account per individual/entity.</li>
                        </ul>

                    </div>
                    <div className={styles.pt_sub}>
                        <h5>13.3 Features of InstaPay Wallet & Services</h5>
                        <p>InstaPay Wallet Services are used at your own risk. Disputes on Electronic Statements must be raised within 14 days of availability on InstaPay Chat Bot and User online dashboard. Some services are provided by Third Parties, requiring acceptance of Additional Terms.</p>
                        <div style={{ marginLeft: "2rem" }}>
                            <p style={{ fontWeight: 700 }}>Wallet Funding: </p>
                            <ul>
                                <li>Bank Transfer, Credit/Debit card (3D Secure only), PayPal, Google Pay, Apple Pay, Third Party Mobile Wallets.</li>
                            </ul>
                            <p style={{ fontWeight: 700 }}>Fund Transfer: </p>
                            <ul>
                                <li>Bank Deposit, Mobile Money/Mobile Wallet, Cash Pick-up, Card Payment, Crypto Wallet (country limitations apply).
                                </li>
                            </ul>
                            <p style={{ fontWeight: 700 }}>P2P Payment: </p>
                            <ul>
                                <li>Wallet to Wallet, Wallet to Card transfers.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>13.4 Applicable Limits</h5>
                        <br />
                        <br />
                        <div style={{ marginLeft: "2rem" }}>
                            <p style={{ fontWeight: 700 }}>Standard Account – SDD (Simplify Due Diligence)</p>
                            <ul>
                                <li>Default Wallet currency based on home country.</li>
                                <li>Maximum Wallet balance: CHF 250 per month.</li>
                                <li>Maximum cumulative monthly funds: CHF 250.</li>
                                <li>Restrictions on exceeding balance limits and money transfer transactions not allowed.</li>
                            </ul>

                            <br />
                            <br />
                            <p style={{ fontWeight: 700 }}>Silver Account – CDD (Customer Due Diligence):</p>
                            <ul>
                                <li>Maximum Wallet balance: CHF 10,000 per month.</li>
                                <li>Maximum cumulative monthly funds: CHF 10,000.</li>
                                <li>Restrictions on exceeding balance limits and transaction frequencies.</li>
                            </ul>
                            <br />
                            <br />
                            <p style={{ fontWeight: 700 }}>Premium Account – EDD (Enhanced Due Diligence): </p>
                            <ul>
                                <li>For legal entities, with no maximum balance.</li>
                                <li>Maximum transaction amount: CHF 50,000 per transaction.</li>
                                <li>Daily transaction limit: 3 transactions.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>13.5 Loading funds into InstaPay Wallet</h5>
                        <div className={styles.table_con}>
                            <h6>Standard Wallet</h6>
                            <div className={styles.table}>
                                <div className={styles.table_full}>
                                    Transaction limits for InstaPay Wallet
                                </div>
                                <div>Minimum Per txn. Amount</div>
                                <div>CHF 1.00 or equivalent</div>
                                <div>Maximum Per txn. Amount</div>
                                <div>CHF 150 or equivalent</div>
                                <div>Maximum daily Amount Limit</div>
                                <div>CHF 150 or equivalent</div>
                                <div>Maximum Monthly Amount Limit</div>
                                <div>CHF 150 or equivalent</div>
                            </div>
                        </div>
                        <div className={styles.table_con}>
                            <h6>Silver Wallet</h6>
                            <div className={styles.table}>
                                <div className={styles.table_full}>
                                    Transaction limits for Silver Wallet
                                </div>
                                <div>Minimum Per txn. Amount</div>
                                <div>CHF 1.00 or equivalent</div>
                                <div>Maximum Per txn. Amount</div>
                                <div>CHF 5000 or equivalent</div>
                                <div>Maximum daily Amount Limit</div>
                                <div>CHF 3000 or equivalent</div>
                                <div>Maximum Monthly Amount Limit</div>
                                <div>CHF 10,000 or equivalent</div>
                            </div>
                        </div>
                        <div className={styles.table_con}>
                            <h6>Premium Wallet</h6>
                            <div className={styles.table}>
                                <div className={styles.table_full}>
                                    Transaction limits for Silver Wallet
                                </div>
                                <div>Minimum Per txn. Amount</div>
                                <div>CHF 1.00 or equivalent</div>
                                <div>Maximum Per txn. Amount</div>
                                <div>CHF 50,000</div>
                                <div>Maximum daily Amount Limit</div>
                                <div>CHF 200,000</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.pt_sub}>
                        <h5>13.6 Fund Deposits and Status</h5>
                        <p>InstaPay Wallet Services are used at your own risk. Disputes on Electronic Statements must be raised within 14 days of availability on InstaPay Chat Bot and User online dashboard. Some services are provided by Third Parties, requiring acceptance of Additional Terms.</p>
                        <br />
                        <br />
                        <p>13.6.1 Kemit Kingdom is entitled to retain client deposits in its books for a maximum of 60 calendar days or up to a total amount of $10,000 for individual accounts and $250,000 for business accounts. Clients are obliged to initiate the transfer of the deposited funds by the latest on the 60th day following the initial deposit. After this period, the client agrees that InstaPay will automatically return the funds to one of the accounts registered on the platform by the client (bank account, mobile money account, or payment card); this will be considered a transfer order. If the client's account from which the funds were sent has been closed in the meantime, Kemit Kingdom will issue a check to be sent by registered mail to the client. If the company cannot be found, due to a change of address or bankruptcy, specific provisions will be applied.</p>
                        <br />
                        <br />
                        <p>13.6.2 Deposits with Kemit Kingdom do not accrue any interest.</p>
                        <br />
                        <br />
                        <p>13.6.3 Deposits are not covered by the Swiss deposit guarantee of CHF 100,000 per client.</p>
                        <br />
                        <br />
                        <p>13.6.4 Deposits received in client Wallets are held in a segregated bank account (or client account) to ensure that, in the event of insolvency and/or legal proceedings against Kemit Kingdom, no creditor can claim the funds held in this segregated account (or client account).</p>
                    </div>
                </div>
                <div className={styles.plain_text}>
                    <h4>14.	KYC / Know Your Customer requirements & Account Opening</h4>
                    <p>Given the significant amounts expected to flow through the InstaPay Application, implementing a robust process to verify user identities and the source of their funds is crucial. This ensures the integrity of these transactions.</p>
                    <br />
                    <p>Initial Steps:</p>
                    <br />
                    <ul>
                        <li>User data is initially collected and stored on K2 SA's servers.</li>
                        <li>InstaPay utilizes Checkin.com's digital verification tool for automating document verification, transferring data to its server.</li>
                        <li>Post-verification, results are communicated to K2 SA and stored.</li>
                    </ul>
                    <br />
                    <p>Collaboration with Partner Financial Institutions:</p>
                    <br />
                    <ul>
                        <li>K2 SA and Partner Financial Institutions exchange information and opinions on user requests.</li>
                        <li>K2 SA's compliance team conducts a thorough analysis and makes the final decision on user access upgrades.</li>
                    </ul>
                    <br />
                    <p>For detailed information on user registration and verification processes, refer to Article 3 on fraud and money laundering prevention.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>14.1 SDD – Simplify Due Diligence</h4>
                    <p>This requirements apply for Silver Account. You may provide us with the following information:</p>
                    <br />
                    <p style={{ fontWeight: 700 }}>Individual</p>
                    <br />
                    <ul>
                        <li>First Name</li>
                        <li>Last Name</li>
                        <li>A valid Mobile Number</li>
                        <li>A valid E-mail address</li>
                        <li>Your date of birth</li>
                        <li>Gender</li>
                        <li>Country</li>
                        <li>Selection of Wallet Based Currency</li>
                        <li>Geolocation, IP address</li>
                        <li>Device Fingerprint</li>
                    </ul>
                    <br />
                    <p style={{ fontWeight: 700 }}>Corporate/Business</p>
                    <br />
                    <ul>
                        <li>Corporate/Business Full Name</li>
                        <li>Company registered number</li>
                        <li>Registered country</li>
                        <li>Contact email</li>
                        <li>Selection of Wallet Based Currency</li>
                    </ul>
                </div>
                <div className={styles.plain_text}>
                    <h4>14.2 CDD – Customer Due Diligence</h4>
                    <p>All requirements from SDD</p>
                    <br />
                    <ul>
                        <li>Proof of Current Address (e.g., utility bill, employer agreement)</li>
                        <li>Valid ID</li>
                        <li>Agreement to biometric and video identification</li>
                    </ul>
                    <br />
                    <br />
                    <p>Note: Account migration to Silver may be denied if there are doubts about the user's identity or provided information.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>14.3 EDD – Enhanced Due Diligence</h4>
                    <p style={{ fontWeight: 700 }}>Applies to Corporate/Business Accounts:</p>
                    <br />
                    <ul>
                        <li>All requirements from CDD</li>
                        <li>Certificate of Incorporation</li>
                        <li>ID Copies of Legal Representatives</li>
                        <li>Ownership Structure, Corporate Proof of Address</li>
                        <li>Bank Account Statement</li>
                        <li>Verification bank transfer of $1.00 (refundable) to KEMIT KINGDOM bank account for background checks</li>
                    </ul>
                    <br />
                    <br />
                    <p>Note: Account migration to Premium may be denied if there are doubts about the user's identity or provided information.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>14.4 Overview of KYC Levels</h4>
                    <div className={styles.kyc_table}>
                        <div>KYC Level</div>
                        <div>Standard Address</div>
                        <div>CDD</div>
                        <div>EDD</div>
                        <div>Max Annual Load Limit - InstaPay Wallet</div>
                        <div>CHF 150</div>
                        <div>CHF 50,000</div>
                        <div>CHF 500,000</div>
                        <div>Max Single Load Value - InstaPay Wallet</div>
                        <div>CHF 150</div>
                        <div>CHF 3,000</div>
                        <div>CHF 50,000</div>
                        <div>Max Number of Single Loads Per Day - InstaPay Wallet</div>
                        <div>N/A</div>
                        <div>3</div>
                        <div>5</div>
                        <div>Max Daily Transaction - InstaPay Wallet</div>
                        <div>N/A</div>
                        <div>3</div>
                        <div>5</div>
                        <div>Max Monthly Amount Limit - InstaPay Wallet</div>
                        <div>CHF 150</div>
                        <div>CHF 10,000</div>
                        <div>CHF 200,000</div>
                    </div>
                    <br />
                    <p>Note: The above limits are subject to change in the near future.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>15.	ID documents and biometric authentication</h4>
                    <p>By using InstaPay Services, you authorize KEMIT KINGDOM to collect data for identity verification. You agree to use Checkin.com's verification system, providing necessary ID and identification documents. KEMIT KINGDOM commits to ensuring the security and confidentiality of your personal identity data in this process.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>16.	Consent for OTP</h4>
                    <p>You acknowledge and consent to the use of OTP (One Time PIN) based authentication for registering and opening an account with InstaPay Services.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>17.	Payment using InstaPay Wallet</h4>
                    <p>You acknowledge and consent to the use of OTP (One Time PIN) based authentication for registering and opening an account with InstaPay Services.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>17.1 You may be use InstaPay Wallet services to:</h4>
                    <br />
                    <p>a. Top-up/Fund Your InstaPay Wallet:</p>
                    <ul>
                        <li>Via Bank Transfer</li>
                        <li>Using Credit/Debit Card</li>
                        <li>Through Mobile Wallet / Mobile Money Account from your local operator</li>
                    </ul>
                    <br />
                    <br />

                    <p>b. Make Payments To:</p>
                    <ul>
                        <li>Other InstaPay Wallet Users:</li>
                        <li>Individuals</li>
                        <li>Corporates/Businesses</li>
                        <li>Associations</li>
                    </ul>
                    <br />
                    <br />

                    <p>c. Make Payments For:</p>
                    <ul>
                        <li>Your InstaPay Visa Virtual or Physical Card</li>
                        <li>Card Issuing Fees</li>
                        <li>KYC / KYB Verification Process and Account Upgrade</li>
                    </ul>
                    <br />
                    <br />

                    <p>d. Transfer Funds Via InstaPay Platform (Including Chat Bot):</p>
                    <ul>
                        <li>Bank Deposit</li>
                        <li>Mobile Money/Mobile Wallet Transfer</li>
                        <li>Cash Pick-up Transfer</li>
                        <li>Payment Card (Visa / Mastercard) Transfer</li>
                        <li>To a Third Party Crypto Wallet or Your Own</li>
                    </ul>
                    <br />
                    <br />

                    <p>e. Money Exchange:</p>
                    <ul>
                        <li>From Your Base Currency Wallet to Another Currency</li>
                        <li>Convert Fiat to Crypto</li>
                    </ul>
                    <br />
                    <br />

                    <p>f. Social Networking Activities Within InstaPay Chat Bot:</p>
                    <ul>
                        <li>Payment Requests:</li>
                        <li>Instant Payment</li>
                        <li>Subscription Payment</li>
                        <li>Scheduled Payment</li>
                        <li>Security Deposit Payment</li>
                        <li>Installment Plan Payment</li>
                        <li>Split Payment</li>
                    </ul>
                </div>
                <div className={styles.plain_text}>
                    <h4>17.2 Hold on your Wallet account:</h4>
                    <p>We may place a hold on your InstaPay Wallet account for transactions, reducing your Current Balance by the held amount. This hold may last up to 10 days, after which the full transaction amount will be debited. Scenarios leading to a debit freeze include, but are not limited to, various payment requests like Scheduled, Security Deposit, Subscription, Installment Plan, and Split Payments.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>17.3 Use of InstaPay Wallet Services & Third-Party Wallet services</h4>
                    <p>The balance in your account can be used for transactions like money transfers, wallet recharges, and payments for goods or services from associated merchants. KEMIT KINGDOM disclaims responsibility for third-party products or services and will not be liable for any issues arising from their use. You are responsible for content uploaded to the InstaPay platform and must ensure it complies with applicable laws.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>17.4 Electronic Instructions</h4>
                    <p>You agree that KEMIT KINGDOM may act upon Electronic Instructions received from your registered communication address or using your Security Codes. You are responsible for all transactions and any risks associated with the use of InstaPay services.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>17.5 Processing of Transactions</h4>
                    <p>Transactions on InstaPay may be instantaneous but are subject to system availability and limitations. We are not responsible for not processing transactions or any consequences thereof.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>17.6 Rights and obligations of InstaPay</h4>
                    <p>InstaPay will execute authenticated payment instructions unless certain conditions are not met, such as inadequate funds or suspicion of unlawful transactions. KEMIT KINGDOM is not obligated to accept payment instructions and will debit your wallet for executed transactions.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>17.7 Foreign Exchange Transactions</h4>
                    <p>Transactions involving foreign exchange are subject to charges and fees as prescribed on the InstaPay platform.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>17.8 Foreign Account Tax Compliance Act (FATCA)</h4>
                    <p>Transactions involving foreign exchange are subject to charges and fees as prescribed on the InstaPay platform.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>17.8.1 Disclosure of information</h4>
                    <p>You authorize us to disclose Personal Information as required by laws like FATCA to various entities and authorities.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>17.8.2 Notification of change in circumstances</h4>
                    <p>You agree to promptly notify us of any changes in your particulars or circumstances.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>17.8.3 Cooperation with enquiries</h4>
                    <p>You will cooperate fully with any enquiries for compliance with applicable laws, including FATCA.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>17.8.4 Inconsistent terms</h4>
                    <p>In case of inconsistency, these terms will prevail regarding compliance with tax, reporting, and withholding requirements.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>17.9 Nomination</h4>
                    <p>You can nominate a non-minor individual through the InstaPay platform. In the event of an account holder's death, the balance will be transferred to the registered nominee.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>17.10 Suspension/Closure/Conversion/Termination by KEMIT KINGDOM</h4>
                    <p>We may suspend or terminate your InstaPay Wallet Service for various reasons, including death, incapacity, provision of false information, or legal requirements. Termination will be effective from the date specified in the notice.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>17.11 Procedure in case of death or Incompetence</h4>
                    <p>In the event of a customer's death or incompetence, KEMIT KINGDOM will suspend the account and handle the remaining balance at its discretion, subject to regulations.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>17.12 Termination by the Customer</h4>
                    <p>If you decide to terminate your use of InstaPay:</p>
                    <br />
                    <ul>
                        <li>Ensure the account balance is zero before deletion.</li>
                        <li>Understand that deletion of the account alone does not terminate the service.</li>
                        <li>You will not be entitled to any compensation from KEMIT KINGDOM for termination.</li>
                    </ul>
                    <br />
                    <p>You agree that KEMIT KINGDOM is not liable for any loss due to inaccurate or incomplete Electronic Instructions or third-party failures. You also agree not to access your InstaPay account through unauthorized means and to keep your User ID, Password, and Security Codes confidential.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>18. Prohibited Countries</h4>
                </div>
                <div className={styles.plain_text}>
                    <h4>18.1 Our Commitment</h4>
                    <p>At KEMIT KINGDOM, our commitment to combating money laundering and terrorism financing is steadfast. In line with this commitment and in compliance with international sanctions and regulations, we have identified certain countries where our services cannot be used.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>18.2 Our Commitment</h4>
                    <p>The following countries are currently on our list of prohibited countries:</p>
                    <br />
                    <ul>
                        <li>Crimea</li>
                        <li>Cuba</li>
                        <li>Iran</li>
                        <li>Libya</li>
                        <li>North Korea</li>
                        <li>South Sudan</li>
                        <li>Sudan</li>
                        <li>Syria</li>
                        <li>Venezuela</li>
                        <li>Russia</li>
                        <li>Belarus</li>
                        <li>Eritrea</li>
                        <li>Yemen</li>
                    </ul>
                </div>
                <div className={styles.plain_text}>
                    <h4>18.3 Our Policy</h4>
                    <p>Due to stringent internal policies against money laundering and terrorism financing, as well as adherence to international sanctions, we are unable to process payments from or to the countries listed above. This policy is an essential part of our commitment to legal compliance and ethical business practices.</p>
                </div>
                <div className={styles.plain_text}>
                    <h4>18.4 Regular Update</h4>
                    <p>This list of prohibited countries is subject to change. Changes may occur in response to evolving international regulations and contexts. We encourage our users to regularly review this section for any updates to ensure ongoing compliance with our service terms.</p>
                </div>
            </main>
        </div>
    )
}

export default TermsAndConditions