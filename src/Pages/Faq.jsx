import React from 'react'
import NavbarFooter from '../components/NavbarFooter'
import styles from "./styles/Faq.module.css"
import SidebarFixed from '../components/SidebarFixed'
import { ChevronDown, ChevronRight } from 'react-feather'
import { useState } from 'react'

const Faq = () => {
    const [showInternational, setShowInternational] = useState(false)
    const [showw2w, setShoww2w] = useState(false)
    const [showRf, setShowRf] = useState(false)
    const [showQuote, setShowQuote] = useState(false)
    const [showCf, setShowCf] = useState(false)
    const [showKyc, setShowKyc] = useState(false)
    const [showKyb, setShowKyb] = useState(false)

    const sendMoney = {
        head: "SEND MONEY",
        sub_head: "International Transfer",
        questions: [
            {
                question: "1. How do I initiate an International Transfer using INSTAPAY?",
                question_text: "A. To initiate an International Transfer:",
                answers: [
                    `Navigate to the "Send Money" sec&on.`,
                    `Choose "Interna&onal Transfer."`,
                    `Provide the recipient's details, including their bank account informa&on or mobile number.`,
                    `Enter the amount and choose the currency for the transfer.`,
                    `Review and confirm the details, and the transfer will be processed.`
                ]
            },
            {
                question: "2. Are there any fees for International Transfers?",
                question_text: "A. Yes, there's a nominal fee for Interna&onal Transfers which varies based on the receiving country and the amount sent. The exact fee will be displayed during the transac&on process for clarity."
            },
            {
                question: "3. How long does an International Transfer take?",
                question_text: "A. Most Interna&onal Transfers are completed within 1-3 business days. However, the exact dura&on may vary depending on the receiving bank or financial ins&tu&on's processing &mes."
            },
            {
                question: "4. Can I track the status of my International Transfer?",
                question_text: "A. Absolutely! You can track the status in the \"Transac&on History\" sec&on in your INSTAPAY account. You'll also receive email no&fica&ons upda&ng you about the transfer's progress."
            }
        ]

    }

    const w2w = {
        head: "Wallet to Wallet Transfer",
        questions: [
            {
                question: "1. How do I transfer money from my INSTAPAY wallet to another INSTAPAY wallet?",
                question_text: "To execute a Wallet to Wallet transfer:",
                answers: [
                    `Go to the "Send Money" section.`,
                    `Select "Wallet to Wallet Transfer."`,
                    `Input the recipient's INSTAPAY ID or associated mobile number.`,
                    `Fill in the amount you wish to transfer.`,
                    `Review and confirm the transac&on.`
                ]
            },
            {
                question: "2. Is there a fee for Wallet to Wallet Transfers?",
                question_text: "No, Wallet to Wallet Transfers on INSTAPAY are free of charge."
            },
            {
                question: "3. How long does a Wallet to Wallet Transfer take?",
                question_text: "Wallet to Wallet Transfers are instantaneous. The recipient will get a no&fica&on the moment you confirm the transac&on"
            },
            {
                question: "4. What if I mistakenly sent money to the wrong INSTAPAY wallet?",
                question_text: "If you realize you've sent money to the wrong INSTAPAY wallet, contact our support team immediately at support@instapay.com. While we cannot guarantee retrieval in every case due to the real-&me nature of the transfer, we will do our best to assist you."
            },
            {
                question: "5. Is there a limit to how much I can transfer between INSTAPAY wallets?",
                question_text: "Yes, there are daily and monthly transfer limits to ensure security. The specific limits can be found in your account seVngs or by contac&ng our support team."
            }
        ]
    }

    const requestFundsData = [
        {
            head: "Request Funds",
            sub_head_standard: "Standard Request",
            questions_standard: [
                {
                    question: "1. How do I send a standard fund request using INSTAPAY?",
                    question_text: "To ini&ate a Standard Request:",
                    answers: [
                        `Navigate to the "Request Funds" sec&on.`,
                        `Choose "Standard Request."`,
                        `Enter the recipient's INSTAPAY ID or associated mobile number.`,
                        `Input the amount you wish to request.`,
                        `Add any necessary details or notes.`,
                        `Review and send the request.`
                    ]
                },
                {
                    question: "2. Is there a limit to the amount I can request?",
                    question_text: "There's a maximum amount you can request in a single transac&on, which can be found in your account seVngs or by contac&ng our support team."
                }
            ],
            sub_head_subscription: "Subscription Request",
            questions_subscription: [
                {
                    question: "1. What is a Subscription Request?",
                    question_text: "A Subscrip&on Request allows you to ask for funds at regular intervals, such as monthly or yearly, without having to send a new request each &me."
                },
                {
                    question: "2. How do I set up a Subscription Request?",
                    question_text: "Navigate to the \"Request Funds\" sec&on, choose \"Subscrip&on Request,\" provide the necessary details, including frequency and dura&on, and then send the request."
                }
            ],
            sub_head_scheduled: "Scheduled Request",
            questions_scheduled: [
                {
                    question: "1. Can I schedule a fund request for a future date?",
                    question_text: "Yes, with the Scheduled Request op&on, you can set a future date and &me for your request to be sent out."
                },
                {
                    question: "2. How do I create a Scheduled Request?",
                    question_text: "In the \"Request Funds\" sec&on, select \"Scheduled Request,\" fill in the necessary details, set the desired date and &me, and save the request."
                }
            ],
            sub_head_deposit: "Deposit Request",
            questions_deposit: [
                {
                    question: "1. How does a Deposit Request work?",
                    question_text: "A Deposit Request allows you to request an ini&al deposit or down payment, usually for goods or services that will be delivered or completed at a later date."
                },
                {
                    question: "2. To make a Deposit Request, what steps should I follow?",
                    question_text: "Choose \"Deposit Request\" in the \"Request Funds\" sec&on, provide the required details about the goods or services, input the deposit amount, and send the request."
                }
            ],
            sub_head_instalment: "Instalment Plan",
            questions_instalment: [
                {
                    question: "1. Can I request payments in instalments?",
                    question_text: "Yes, with the Instalment Plan op&on, you can break down a larger amount into smaller, more manageable instalments."
                },
                {
                    question: "2. How do I set up an Instalment Plan?",
                    question_text: "Select \"Instalment Plan\" in the \"Request Funds\" sec&on, detail the total amount, number of instalments, and frequency, then send the request to the recipient."
                }
            ],
            sub_head_split_payment: "Split Payment",
            questions_split_payment: [
                {
                    question: "1. What is a Split Payment request?",
                    question_text: "A Split Payment allows mul&ple users to divide and share the cost of a single transac&on, making it ideal for group giXs, shared expenses, or collabora&ve projects."
                },
                {
                    question: "2. How do I ini'ate a Split Payment request?",
                    question_text: "Navigate to the \"Request Funds\" sec&on, select \"Split Payment,\" input the total amount, specify the individuals among whom the amount should be split, and send the request."
                }
            ]
        }
    ];

    const provideQuoteData = [
        {
            head: "Provide a Quote",
            questions: [
                {
                    question: "1. What does 'Provide a Quote' mean in INSTAPAY?",
                    question_text: "The 'Provide a Quote' feature allows sellers or service providers to give potential clients an estimate of the costs for goods or services before any commitment is made. It offers transparency and clarity, helping both parties agree on terms before proceeding."
                },
                {
                    question: "2. Why should I use the Provide a Quote feature?",
                    question_text: "Using this feature can enhance trust between you and your clients. By providing a detailed quote, you set clear expectations regarding the costs involved, minimizing potential misunderstandings or disputes."
                }
            ],
            sub_head_creating: "Creating a Quote",
            questions_creating: [
                {
                    question: "1. How do I create a quote on INSTAPAY?",
                    question_text: "To create a quote:",
                    answers: [
                        `Navigate to the "Provide a Quote" section.`,
                        `Input details about the goods or services you are offering.`,
                        `Break down the costs, including any taxes, discounts, or additional fees.`,
                        `Add any relevant terms and conditions.`,
                        `Review the details and send the quote to the client.`
                    ]
                },
                {
                    question: "2. Can I edit a quote after sending it?",
                    question_text: "Quotes cannot be modified once sent. If you need to make changes, you'll have to send a revised quote and inform the recipient about the updates."
                }
            ],
            sub_head_receiving: "Receiving and Responding to a Quote",
            questions_receiving: [
                {
                    question: "1. How do I accept a quote I've received?",
                    question_text: "Upon receiving a quote, you'll see an 'Accept' option. Click on it, review the terms, and proceed with the payment or any other action as instructed."
                },
                {
                    question: "2. What if I disagree with the provided quote?",
                    question_text: "If you have concerns or disagreements about a quote, it's best to communicate directly with the sender to discuss adjustments or clarifications. INSTAPAY provides a built-in chat feature for such communications."
                }
            ],
            sub_head_expiry_reminders: "Quote Expiry and Reminders",
            questions_expiry_reminders: [
                {
                    question: "1. Do quotes have an expiration date?",
                    question_text: "Yes, quotes typically have an expiration date set by the sender. This information will be clearly displayed on the quote."
                },
                {
                    question: "2. What happens if a quote expires?",
                    question_text: "Once a quote expires, you won't be able to accept it via INSTAPAY. If you're still interested in the goods or services, you should contact the provider to request a new quote or check for availability."
                },
                {
                    question: "3. Will I get reminders before a quote expires?",
                    question_text: "INSTAPAY sends notifications to remind recipients of upcoming quote expirations. This ensures that potential clients have ample time to review and respond."
                }
            ]
        }
    ];

    // const crowdfundingData = [
    //     {
    //         head: "CROWDFUNDING",
    //         questions: [
    //             {
    //                 question: "1. What are the types of campaigns available on INSTAPAY?",
    //                 question_text: "We offer two types of campaigns:",
    //                 answers: [
    //                     "All-or-Nothing: Campaigns only receive funds if they reach their set goal.",
    //                     "Keep-it-All: Campaigns retain all contributions regardless of whether they meet their goal."
    //                 ]
    //             },
    //             {
    //                 question: "2. How do I know which type of campaign I'm contributing to?",
    //                 question_text: "The campaign type is displayed prominently in the 'Campaign Snapshot' section."
    //             }
    //         ],
    //         sub_head_donating: "DONATING",
    //         questions_donating: [
    //             {
    //                 question: "1. How do I donate to a campaign?",
    //                 question_text: "You can donate by clicking on a campaign's link on Instagram, which will ini&ate the INSTAPAY chatbot to guide you through the dona&on process."
    //             },
    //             {
    //                 question: "2. The campaign I wanted to donate to has ended. Can I s'll contribute?",
    //                 question_text: "Once a campaign ends, contribu&ons are no longer accepted. However, you can stay updated on other campaigns by subscribing to our notifications."
    //             }
    //         ],
    //         sub_head_sharing: "Sharing",
    //         questions_sharing: [
    //             {
    //                 question: "1. How can I share a campaign with my friends?",
    //                 question_text: "AXer making a dona&on, the chatbot will give you op&ons to share the campaign on popular social media pla_orms or copy a direct link."
    //             },
    //             {
    //                 question: "2. I've donated to a campaign. How do I encourage others to do the same?",
    //                 question_text: "Sharing the campaign on your social media pla_orms, par&cularly Instagram, and explaining why you support the cause can encourage your friends and followers to donate too."
    //             }
    //         ],
    //         sub_head_safety: "SAFETY & VERIFICATION",
    //         questions_safety: [
    //             {
    //                 question: "1. How do I know if a campaign is legitimate?",
    //                 question_text: `Campaigns verified by INSTAPAY will have a "Verification Badge." However, always exercise cau&on and do your research before donating.`
    //             },
    //             {
    //                 question: "2. How is my payment information kept secure?",
    //                 question_text: "INSTAPAY uses state-of-the-art encryption techniques to ensure your payment details and personal information are kept secure."
    //             }
    //         ],
    //         sub_head_other: "OTHER QUERIES",
    //         questions_other: [
    //             {
    //                 question: "1. I encountered an issue while donating. How can I get assistance?",
    //                 question_text: `Please reach out to our support team at support@instapay.com, and they'll be happy to assist you.`
    //             },
    //             {
    //                 question: "2. Can I get updates on campaigns I'm interested in?",
    //                 question_text: `Yes! When interacting with the chatbot, choose the op&on to "stay updated on other inspiring campaigns" to receive notifications about campaigns that align with your interests.`
    //             }
    //         ],
    //     }
    // ];


    const instapayKYCData = [
        {
            head: "INSTAPAY KYC (Know Your Customer)",
            questions: [
                {
                    question: "1. Why is KYC required on INSTAPAY?",
                    question_text: "To ensure the security and authenticity of our platform and its users, INSTAPAY mandates the Know Your Customer (KYC) process. This rigorous verification process helps prevent fraud, money laundering, and ensures that only legitimate users can perform transactions."
                },
                {
                    question: "2. What documents do private individuals need for KYC verification?",
                    question_text: "For Individuals - Individual Accounts, the following documents and information are required:",
                    answers: [
                        `Present Your Personal Activity: Description - Provide a short description of your primary occupation or the main purpose of using INSTAPAY.`,
                        `Employment Field: Options available in a dropdown list, such as Arts & Entertainment, Banking & Finance, Education & Research, etc. If your employment sector isn't listed, please select "Other" and provide details in the free text field.`,
                        `Primary Identity Document: This should be a government-issued identification with a photo. Acceptable documents include:`,
                        `2.2 A valid national identity card`,
                        `2.3 A valid passport`,
                        `2.4 Valid residence permits (only from European countries or Switzerland)`,
                        `Other: Proof of address - A recent (less than 3 months old) bank statement or utility bill with your name, address, and date of issue, Biometric Facial Recognition - A video comparison with your passport photograph to validate identity`,
                        `Additional documents: In specific cases, especially when heightened verification is deemed necessary, Kemit Kingdom reserves the right to request any additional documents (EDD - Enhanced Due Diligence) or further details.`
                    ]
                },
                {
                    question: "3. How long does the KYC verification process take?",
                    question_text: "Once all required documents and information are submitted, the verification process typically takes between 24 to 48 hours. However, if additional documents (EDD) are requested, this timeline might be extended."
                },
                {
                    question: "4. Is my personal information safe with INSTAPAY?",
                    question_text: "Absolutely. INSTAPAY prioritizes the privacy and security of user data. We employ state-of-the-art encryption techniques and rigorous data protection policies to ensure your information is kept confidential and safe from any unauthorized access."
                },
                {
                    question: "5. I'm having issues with the KYC process. Who can I contact?",
                    question_text: "Should you encounter any challenges or have queries regarding the KYC process, please reach out to our dedicated support team at support@instapay.com. They're trained to assist you in ensuring a smooth verification process."
                }
            ]
        }
    ];

    const instapayKYBData = [
        {
            head: "INSTAPAY KYB (Know Your Business)",
            questions: [
                {
                    question: "1. What is INSTAPAY KYB?",
                    question_text: "KYB (Know Your Business) is a verification process implemented by INSTAPAY to identify and verify the legitimacy of its business customers. This process ensures the security and integrity of transactions made via our platform."
                },
                {
                    question: "2. Why is KYB necessary?",
                    question_text: "KYB is essential to prevent fraudulent activities, maintain compliance with global financial regulations, and safeguard the interests of all our stakeholders."
                },
                {
                    question: "3. What entities need to undergo KYB with INSTAPAY?",
                    answers: [
                        "Private Limited Companies or equivalent",
                        "Publicly Listed Companies",
                        "Associations, NGOs, and Charities",
                        "Sole Proprietorships",
                        "Individual Accounts for Natural Persons"
                    ],
                },
                {
                    question: "4. How recent should the Company Registry Extract be?",
                    question_text: "The Company Registry Extract should be current, with an issuance date not exceeding 3 months."
                },
                {
                    question: "5. How do I prove the authority of a legal representative?",
                    question_text: "The legal representative is often named in the company's registry extract. If not, a Power of Attorney or Delegation of Powers is needed."
                },
                {
                    question: "6. What identification documents are accepted for verification?",
                    answers: [
                        "Valid National Identity Card",
                        "Valid Passport",
                        "Valid Resident Permits (only if issued by a European country and Switzerland)",
                        "Valid Biometric Driving License with MRZ for certain entities"
                    ],
                },
                {
                    question: "7. How do I provide proof of address?",
                    question_text: "Accepted documents include a utility bill (e.g., gas, electricity, phone bill), bank statement, or a government-issued document showcasing the end-user’s address and name, such as a Residential Certificate."
                },
                {
                    question: "8. What happens if my company has undergone recent changes not reflected in the latest document?",
                    question_text: "Kemit Kingdom may request supplementary documents or information for a comprehensive verification in line with legal obligations. Always ensure your documents are updated and reflect recent changes."
                },
                {
                    question: "9. For NGOs and Charities, who are considered the Ultimate Beneficial Owners (UBOs)?",
                    question_text: "Given their unique structure, NGOs and Charities usually don't have beneficial owners. However, board members are treated as UBOs for screening purposes."
                },
                {
                    question: "10. What is the requirement for sole proprietorship registration?",
                    question_text: "The requirement varies by country. Generally, a sole trader's registry extract verifies that an individual is professionally active as a sole trader."
                },
                {
                    question: "11. Can Kemit Kingdom request additional documents beyond what's listed?",
                    question_text: "Yes, Kemit Kingdom reserves the right to request any supplementary documents or information as necessary for comprehensive verifications."
                },
                {
                    question: "12. What should I do if I encounter issues during the KYB process?",
                    question_text: "Please reach out to our support team through support@instapay.com. We're here to help!"
                }
            ]
        }
    ];



    return (
        <div>
            <div style={{ position: "fixed", left: 0, height: "100vh", top: 0 }}>
                <SidebarFixed featureText={"FAQ"} color='#000' />
            </div>
            <div style={{ position: "sticky", top: 0 }}>
                <NavbarFooter />
            </div>

            <main className={styles.content}>
                <h4>Have Doubts?</h4>
                <h2>Frequently Asked Questions.</h2>

                <h5>General Information</h5>

                {/* send money */}
                <div className={styles.question_container}>
                    <div className={styles.head} onClick={() => setShowInternational(!showInternational)}>
                        <h3>{sendMoney.head}</h3>
                        {
                            showInternational
                                ?
                                <ChevronDown />
                                :
                                <ChevronRight />
                        }
                    </div>
                    {
                        showInternational
                        &&
                        <div className={styles.body}>
                            <h6>{sendMoney.sub_head}</h6>
                            {
                                sendMoney.questions.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>

                {/* w2w */}
                <div className={styles.question_container}>
                    <div className={styles.head} onClick={() => setShoww2w(!showw2w)}>
                        <h3>{w2w.head}</h3>
                        {
                            showw2w
                                ?
                                <ChevronDown />
                                :
                                <ChevronRight />
                        }
                    </div>
                    {
                        showw2w
                        &&
                        <div className={styles.body}>
                            <h6>{w2w.sub_head}</h6>
                            {
                                w2w.questions.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>

                {/* request funds */}
                <div className={styles.question_container}>
                    <div className={styles.head} onClick={() => setShowRf(!showRf)}>
                        <h3>{requestFundsData[0].head}</h3>
                        {
                            showRf
                                ?
                                <ChevronDown />
                                :
                                <ChevronRight />
                        }
                    </div>
                    {
                        showRf
                        &&
                        <div className={styles.body}>
                            <h6>{requestFundsData[0].sub_head_standard}</h6>
                            {
                                requestFundsData[0].questions_standard.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }

                            <h6>{requestFundsData[0].sub_head_subscription}</h6>
                            {
                                requestFundsData[0].questions_subscription.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }

                            <h6>{requestFundsData[0].sub_head_scheduled}</h6>
                            {
                                requestFundsData[0].questions_scheduled.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }

                            <h6>{requestFundsData[0].sub_head_deposit}</h6>
                            {
                                requestFundsData[0].questions_deposit.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }

                            <h6>{requestFundsData[0].sub_head_instalment}</h6>
                            {
                                requestFundsData[0].questions_instalment.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }

                            <h6>{requestFundsData[0].sub_head_split_payment}</h6>
                            {
                                requestFundsData[0].questions_split_payment.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>

                {/* quote */}
                <div className={styles.question_container}>
                    <div className={styles.head} onClick={() => setShowQuote(!showQuote)}>
                        <h3>{provideQuoteData[0].head}</h3>
                        {
                            showQuote
                                ?
                                <ChevronDown />
                                :
                                <ChevronRight />
                        }
                    </div>
                    {
                        showQuote
                        &&
                        <div className={styles.body}>
                            <h6>{provideQuoteData[0].sub_head}</h6>
                            {
                                provideQuoteData[0].questions.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }

                            <h6>{provideQuoteData[0].sub_head_creating}</h6>
                            {
                                provideQuoteData[0].questions_creating.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }

                            <h6>{provideQuoteData[0].sub_head_receiving}</h6>
                            {
                                provideQuoteData[0].questions_receiving.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }

                            <h6>{provideQuoteData[0].sub_head_expiry_reminders}</h6>
                            {
                                provideQuoteData[0].questions_expiry_reminders.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>

                {/* crowd fund */}
                {/*<div className={styles.question_container}>
                    <div className={styles.head} onClick={() => setShowCf(!showCf)}>
                        <h3>{crowdfundingData[0].head}</h3>
                        {
                            showCf
                                ?
                                <ChevronDown />
                                :
                                <ChevronRight />
                        }
                    </div>
                    {
                        showCf
                        &&
                        <div className={styles.body}>

                            <h6>{crowdfundingData[0].sub_head}</h6>
                            {
                                crowdfundingData[0].questions.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }

                            <h6>{crowdfundingData[0].sub_head_donating}</h6>
                            {
                                crowdfundingData[0].questions_donating.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }

                            <h6>{crowdfundingData[0].sub_head_sharing}</h6>
                            {
                                crowdfundingData[0].questions_sharing.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }

                            <h6>{crowdfundingData[0].sub_head_safety}</h6>
                            {
                                crowdfundingData[0].questions_safety.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }

                            <h6>{crowdfundingData[0].sub_head_other}</h6>
                            {
                                crowdfundingData[0].questions_other.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>*/}

                {/* kyc */}
                <div className={styles.question_container}>
                    <div className={styles.head} onClick={() => setShowKyc(!showKyc)}>
                        <h3>{instapayKYCData[0].head}</h3>
                        {
                            showKyc
                                ?
                                <ChevronDown />
                                :
                                <ChevronRight />
                        }
                    </div>
                    {
                        showKyc
                        &&
                        <div className={styles.body}>

                            <h6>{instapayKYCData[0].sub_head}</h6>
                            {
                                instapayKYCData[0].questions.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>

                {/* kyb */}
                <div className={styles.question_container}>
                    <div className={styles.head} onClick={() => setShowKyb(!showKyb)}>
                        <h3>{instapayKYBData[0].head}</h3>
                        {
                            showKyb
                                ?
                                <ChevronDown />
                                :
                                <ChevronRight />
                        }
                    </div>
                    {
                        showKyb
                        &&
                        <div className={styles.body}>

                            <h6>{instapayKYBData[0].sub_head}</h6>
                            {
                                instapayKYBData[0].questions.map(item => (
                                    <div key={item.question}>
                                        <h5>{item.question}</h5>
                                        {
                                            item?.question_text &&
                                            <h6>{item?.question_text}</h6>
                                        }
                                        {
                                            item?.answers
                                            &&
                                            <ul>
                                                {
                                                    item?.answers.map(it => (
                                                        <li key={it}>{it}</li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>
            </main>
        </div>
    )
}

export default Faq