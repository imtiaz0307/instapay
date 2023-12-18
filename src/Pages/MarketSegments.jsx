import NavbarFooter from "../components/NavbarFooter"
import SidebarFixed from "../components/SidebarFixed"
import styles from "./styles/MarketSegment.module.css"
import i_1 from "../assets/market_segments/1.png"
import i_2 from "../assets/market_segments/2.png"
import i_3 from "../assets/market_segments/3.png"
import i_4 from "../assets/market_segments/4.png"
import i_5 from "../assets/market_segments/5.png"
import i_6 from "../assets/market_segments/6.png"
import i_7 from "../assets/market_segments/7.png"
import i_8 from "../assets/market_segments/8.png"
import i_9 from "../assets/market_segments/9.png"
import i_10 from "../assets/market_segments/10.png"
import i_11 from "../assets/market_segments/11.png"
import i_12 from "../assets/market_segments/12.png"
import i_13 from "../assets/market_segments/13.png"

const MarketSegments = () => {
    return (
        <div>
            <div style={{ position: "fixed", left: 0, height: "100vh", top: 0 }} className={styles.side}>
                <SidebarFixed featureText={"Market Segments"} color="#000" />
            </div>
            <div style={{ position: "sticky", top: 0 }}>
                <NavbarFooter />
            </div>
            <main className={styles.content}>
                <h4>Any Queries?</h4>
                <h2>Market Segments</h2>

                <div>
                    <h4>
                        InstaPay caters to a diverse range of market segments by providing versatile payment solutions. Here's a list of the key market segments that InstaPay serves:
                    </h4>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.row}>
                        <img src={i_1} alt="image_1" />
                        <div>

                            <h3>Social Media Users:</h3>
                            <ul>
                                <li>Individuals active on platforms like Instagram, WhatsApp, Telegram, and Twitter.</li>
                                <li>Influencers, content creators, and social media personalities looking to monetize their online presence.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <img src={i_2} alt="image_2" />
                        <div>

                            <h3>Freelancers and Gig Economy Workers</h3>
                            <ul>
                                <li>Independent professionals and contractors seeking efficient ways to receive payments for their services.</li>
                                <li>Gig workers in sectors like writing, graphic design, digital marketing, etc.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <img src={i_3} alt="image_3" />
                        <div>

                            <h3>Small and Medium Enterprises (SMEs)</h3>
                            <ul>
                                <li>Businesses requiring streamlined payment solutions for transactions with customers and suppliers.</li>
                                <li>SMEs looking for efficient cross-border payment options.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <img src={i_4} alt="image_4" />
                        <div>

                            <h3>E-commerce Platforms:</h3>
                            <ul>
                                <li>Online retailers and marketplaces integrating seamless payment methods for their customers.</li>
                                <li>E-commerce businesses seeking to offer diverse payment options, including social media payments.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <img src={i_5} alt="image_5" />
                        <div>

                            <h3>Peer-to-Peer (P2P) Transactions:</h3>
                            <ul>
                                <li>Individuals looking for an easy way to transfer money to friends and family.</li>
                                <li>Users seeking a secure platform for small-scale personal transactions.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <img src={i_6} alt="image_6" />
                        <div>

                            <h3>Subscription-Based Services:</h3>
                            <ul>
                                <li>Businesses and platforms that operate on a subscription model, including digital services, software, and media platforms.</li>
                                <li>Users subscribing to various services and looking for an easy way to handle recurring payments.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <img src={i_7} alt="image_7" />
                        <div>

                            <h3>Cross-border Transactions and Remittances:</h3>
                            <ul>
                                <li>Expatriates and immigrants sending money back to their home countries.</li>
                                <li>Businesses involved in international trade requiring efficient cross-border payment solutions.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <img src={i_8} alt="image_8" />
                        <div>

                            <h3>Cryptocurrency Enthusiasts:</h3>
                            <ul>
                                <li>Users interested in converting cryptocurrencies to fiat and vice versa.</li>
                                <li>Cryptocurrency traders and investors looking for real-time transaction capabilities.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <img src={i_9} alt="image_9" />
                        <div>

                            <h3>Non-Profit Organizations and Fundraising:</h3>
                            <ul>
                                <li>Charities and NGOs requiring an efficient platform for accepting donations.</li>
                                <li>Organizers of fundraising campaigns leveraging social media for outreach.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <img src={i_10} alt="image_10" />
                        <div>

                            <h3>Event Planning and Ticketing:</h3>
                            <ul>
                                <li>Event organizers who need to collect payments for events like concerts, festivals, and conferences.</li>
                                <li>Participants looking for a hassle-free way to pay for event access.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <img src={i_11} alt="image_11" style={{ width: "45%" }} />
                        <div>

                            <h3>B2B Transactions:</h3>
                            <ul>
                                <li>Companies engaged in business-to-business transactions requiring efficient payment processing.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <img src={i_12} alt="image_12" />
                        <div>

                            <h3>Retail Customers:</h3>
                            <ul>
                                <li>Consumers in retail stores who prefer using digital payment methods over traditional cash or card transactions.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <img src={i_13} alt="image_13" />
                        <div>

                            <h3>Payment Service Providers (PSPs) and Financial Institutions:</h3>
                            <ul>
                                <li>PSPs looking to expand their offerings with social media integrated payment solutions.</li>
                                <li>Banks and other financial institutions seeking innovative digital payment solutions to offer their clients.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>InstaPay's versatility in addressing these diverse segments makes it a comprehensive solution for a wide array of payment needs across different industries and individual preferences.</h4>
                </div>
            </main>
        </div>
    )
}

export default MarketSegments