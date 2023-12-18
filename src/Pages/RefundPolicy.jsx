import React from 'react'
import { Link } from 'react-router-dom'
import SidebarFixed from '../components/SidebarFixed'
import NavbarFooter from '../components/NavbarFooter'
import styles from "./styles/RefundPolicy.module.css"

const RefundPolicy = () => {
    return (
        <div>
            <div style={{ position: "fixed", left: 0, height: "100vh", top: 0 }} className={styles.side}>
                <SidebarFixed featureText={"Refund Policy"} color='#000' />
            </div>
            <div style={{ position: "sticky", top: 0 }}>
                <NavbarFooter />
            </div>
            <main className={styles.content}>
                <h4>This policy applies to InstaPay services.</h4>
                <h2>InstaPay Refund Policy</h2>

                <div className={styles.text_contatiner}>
                    <h4>1. Introduction</h4>
                    <p>Welcome to InstaPay. This policy outlines our approach to refunds, acknowledging the inherent risks of online transactions and the irrevocable nature of most transactions made through the InstaPay Wallet.</p>
                </div>

                <div className={styles.text_contatiner}>
                    <h4>2. Acknowledgment of Risks and Transaction Irrevocability</h4>
                    <p>By using InstaPay, you acknowledge various risks associated with digital wallet transactions. These include, but are not limited to, financial losses, technical errors, password theft, unauthorized access, and third-party interception of transaction details. You agree that, except as specified for Card Transactions, all transactions processed through InstaPay are irrevocable and non-refundable.</p>
                </div>

                <div className={styles.text_contatiner}>
                    <h4>3. Card Transactions Refunds</h4>
                    <p>Refunds for Card Transactions are subject to the rules set by the applicable International Payment Systems, including specific thresholds and deadlines.</p>
                </div>

                <div className={styles.text_contatiner}>
                    <h4>4. Cancellation of Wallet Account</h4>
                    <p>You may cancel your Wallet Account by notifying our customer support 30 business days prior to the intended cancellation date. However, cancellation does not entitle you to a refund for any completed or pending transactions or incurred fees, including those related to foreign currency transactions.</p>
                </div>

                <div className={styles.text_contatiner}>
                    <h4>5. Processing of Refunds in Special Circumstances</h4>
                    <ul>
                        <li>In cases of failed, returned, rejected, or canceled transactions, refunds may be credited to your wallet account, even if such credit results in exceeding the Maximum Value or Monthly Transfer limit.</li>
                        <li>No refunds will be credited once the Wallet is closed.</li>
                    </ul>
                </div>
                <div className={styles.text_contatiner}>
                    <h4>6. Refunds for Non-Delivery or Rejection of Goods/Services</h4>
                    <p>Refunds due to non-delivery or rejection of goods/services are processed only upon the request of the relevant merchant or third-party. InstaPay does not refund any payment processing charges levied on such transactions.</p>
                </div>
                <div className={styles.text_contatiner}>
                    <h4>7. Limitation of Liability</h4>
                    <p>InstaPay is not liable for any loss or damage arising from defects in goods/services, merchant or third party refusal to accept payments, terminal malfunctions, technical failures, unauthorized sharing of account details, misrepresentations, or discrepancies in merchant charges. Refunds due to merchant cancellation/rejection requests are subject to the merchant's terms.</p>
                </div>
                <div className={styles.text_contatiner}>
                    <h4>8. Modifications to the Refund Policy</h4>
                    <p>InstaPay reserves the right to modify this refund policy. Any changes will be communicated through our official channels.</p>
                </div>
                <div className={styles.text_contatiner}>
                    <h4>9. Contact Us</h4>
                    <p>For any queries or clarifications related to refunds, please contact our customer support team at  <Link to={"mailto:support@insta-pay.ch"}>support@insta-pay.ch</Link></p>
                </div>
            </main>
        </div>
    )
}

export default RefundPolicy