import {Footer, MainNav} from "../components/ui";

export const Privacy = () => (
    <>
        <MainNav/>
        <div className="flex flex-grow min-h-screen justify-center items-center mt-10">
            <div className="bg-white p-10 rounded-lg shadow-2xl w-2/3 border-2 border-black">
                <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">Imeprial Privacy Policy</h1>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    1. What information do we collect?
                </h2>
                <p className="mb-3">
                    From anonymous browsing we collect non personally identifiable information such as your IP address.
                    Upon account creation, we may securely collect personally identifiable information
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    2. What do we use your information for?
                </h2>
                <p className="mb-3">
                    Any of the information we collect from you may be used in one of the following ways:
                    <ul className="p-2">
                        <li>a. Analytics</li>
                        <li>b. Security</li>
                        <li>c. Marketing/Advertising</li>
                    </ul>
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    3. What do you do with my uploads?
                </h2>
                <p className="mb-3">
                    Any uploaded tracks are removed from our servers immediately after Imperial
                    collects the necessary data to display to the user.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    4. Do we use cookies?
                </h2>
                <p className="mb-3">
                    We do not use cookies.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    5. Do we disclose any information to outside parties?
                </h2>
                <p className="mb-3">
                    Only non-personally identifiable visitor information may be provided to other parties
                    for marketing, advertising, or other uses.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    6. How secure is this service?
                </h2>
                <p className="mb-3">
                    We take security extremely seriously and make sure to always follow best practices.
                    We never store passwords in plain text and use SSL site wide after logging in.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    7. Third party links
                </h2>
                <p className="mb-3">
                    Occasionally, at our discretion, we may include or offer third party products or
                    services on our website. These third party sites have separate and independent privacy policies.
                    We therefore have no responsibility or liability for the content and activities of these linked sites.
                    Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    8. California Online Privacy Protection Act Compliance
                </h2>
                <p className="mb-3">
                    Because we value your privacy we have taken the necessary precautions to be in compliance
                    with the California Online Privacy Protection Act.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    9. Childrens Online Privacy Protection Act Compliance
                </h2>
                <p className="mb-3">
                    We are in compliance with the requirements of COPPA (Childrens Online Privacy Protection Act),
                    we do not collect any information from anyone under 13 years of age. Our website, products and
                    services are all directed to people who are at least 13 years old or older.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    10. Online Privacy Policy Only
                </h2>
                <p className="mb-3">
                    This online privacy policy applies only to information collected through our website
                    and not to information collected offline
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    11. Your Consent
                </h2>
                <p className="mb-3">
                    By using our site, you consent to our privacy policy.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    12. YouTube and Google
                </h2>
                <p className="mb-3">
                    The YouTube API is used in accordance with the YouTube and Google terms and privacy policy,
                    for the purpose of fetching video ID's for embeddable videos. YouTube Terms. Google Privacy.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    13. Changes to our Privacy Policy
                </h2>
                <p className="mb-3">
                    If we decide to change our privacy policy, we will update the Privacy Policy modification date below.

                    This policy was last modified on 03/11/2021
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    14. Contacting Us
                </h2>
                <p className="mb-3">
                    If there are any questions regarding this privacy policy you may submit your questions/concerns via
                    Contact link
                </p>
            </div>
        </div>
        <Footer/>
    </>
)