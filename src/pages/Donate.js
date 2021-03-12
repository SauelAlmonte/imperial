import {Footer, MainNav} from "../components/ui";

export const Donate = () => (
    <>
        <MainNav/>
        <div className="flex flex-grow min-h-screen items-center justify-center mt-10">
            <div className="bg-white p-10 rounded-lg shadow-2xl w-2/3 border-2 border-black">
                <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">Donate to Imperial</h1>
                <p className="text-center text-2xl mb-3">
                    Thank you for visiting Imperial!...
                </p>
                <p className="text-center text-xl">
                    If you have found Imperial useful, please think of donating?
                </p>
                <p className="text-center text-xl mb-3">
                    Every Donation is helpful! With donations we at Imperial will be able to
                    continue providing excellent content and services.
                </p>
                <p className="text-center text-xl font-bold">
                    The Donate button below will bring you to PayPal's Secure Website
                </p>
                <div className="container mt-6">
                    <form className="text-center" action="https://www.paypal.com/donate" method="post" target="_top">
                        <input type="hidden" name="hosted_button_id" value="3ZSQTCU6QZS3A" />
                        <input className="w-56" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"  name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                        <img className="" alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                </div>
            </div>
        </div>
        <Footer/>
    </>
)