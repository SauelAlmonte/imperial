import {Footer, MainNav} from "../components/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export const SocialFollow = () => {
    return (

        <>
            <MainNav/>
            <div className="flex flex-grow min-h-screen items-center justify-center mt-10">
                <div className="bg-white p-10 rounded-lg shadow-2xl w-2/3 border-2 border-black">
                    <div className="social-container">
                        <h3 className="text-black text-6xl mb-3 text-center">Social Follow</h3>
                        <div className="text-center my-6">

                            <a href="https://www.youtube.com/"
                               className="youtube social text-gray-800 mx-6">
                                <FontAwesomeIcon icon={faYoutube} size="6x" />
                            </a>
                            <a href="https://www.facebook.com/allmypeopleloco/"
                               className="facebook social text-gray-800 mx-6">
                                <FontAwesomeIcon icon={faFacebook} size="6x" />
                            </a>
                            <a href="https://twitter.com/TheCodinCoder" className="twitter social text-gray-800 mx-6">
                                <FontAwesomeIcon icon={faTwitter} size="6x" />
                            </a>
                            <a href="https://www.instagram.com/thecodincoder/"
                               className="instagram social text-gray-800 mx-6">
                                <FontAwesomeIcon icon={faInstagram} size="6x" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    );
}