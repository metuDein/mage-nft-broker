import React from 'react'
import { Link } from 'react-router-dom'

const TermsAndCondition = () => {
    return (
        <main className='help--page'>
            <div className='help-sidebar'>

                <ul className='sidebar-tabs'>
                    <li><Link to={'/support-request'} style={{ background: "#fff", borderRadius: '10px', color: '#000', width: '100%', padding: '10px', textDecoration: 'none' }}> Contact  Us</Link></li>
                    <li> <Link to={'/faq-what-is-an-nft'} style={{ color: '#fff', padding: '10px 0' }}> Whats is an Nft </Link></li>
                    <li> <Link to={'/faq-how-to-create-an-nft'} style={{ color: '#fff' }}> How to Create an NFT </Link></li>
                    <li> <Link to={'/faq-who-is-tritonsprime'} style={{ color: '#fff' }}> Who is TritonsPrime?</Link></li>

                </ul>
            </div>

            <div className='help--article'>
                <h1 className='help--title-1' style={{ color: '#fff' }}>Terms and condition</h1>




                <div className='explain--nft-uses'>

                    <p>
                        Acceptance of Terms
                        By accessing and using TritonsPrime NFT Marketplace, you agree to be bound by these Terms and Conditions. If you do not agree with any of the terms, you should not use the platform.

                        Eligibility
                        You must be at least 18 years old to use TritonsPrime NFT Marketplace. By using the platform, you represent and warrant that you are of legal age and have the legal capacity to enter into a contract.

                        User Responsibilities
                        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate and up-to-date information when creating an account.

                        Intellectual Property Rights
                        All intellectual property rights in TritonsPrime NFT Marketplace, including but not limited to graphics, logos, and trademarks, are owned by TritonsPrime or its licensors. You may not use or reproduce any of these materials without prior written permission.

                        NFT Listings and Sales
                        Users can list their NFTs for sale on TritonsPrime NFT Marketplace. TritonsPrime reserves the right to remove any listing that violates these Terms and Conditions or infringes upon the rights of others. The sale and transfer of NFTs are solely between the buyer and seller, and TritonsPrime is not responsible for any disputes or issues that may arise.

                        Prohibited Activities
                        You agree not to engage in any of the following activities while using TritonsPrime NFT Marketplace:

                        Violating any laws or regulations
                        Uploading or distributing content that is illegal, defamatory, or infringing upon intellectual property rights
                        Using automated scripts or bots to manipulate the platform
                        Impersonating another person or entity
                        Disclaimers and Limitation of Liability
                        TritonsPrime NFT Marketplace is provided on an "as is" and "as available" basis. TritonsPrime does not guarantee the accuracy, availability, or reliability of the platform. In no event shall TritonsPrime be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use of the platform.

                        Privacy
                        TritonsPrime collects and processes personal data in accordance with its Privacy Policy. By using TritonsPrime NFT Marketplace, you consent to the collection, use, and disclosure of your personal information as described in the Privacy Policy.

                        Modifications to Terms and Conditions
                        TritonsPrime reserves the right to modify or update these Terms and Conditions at any time. It is your responsibility to review the Terms and Conditions periodically. Continued use of the platform after any modifications constitutes your acceptance of the updated Terms and Conditions.

                        Governing Law and Jurisdiction
                        These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction where TritonsPrime is based. Any disputes arising out of or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.

                        By using TritonsPrime NFT Marketplace, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                    </p>
                </div>



            </div>
        </main>
    )
}

export default TermsAndCondition