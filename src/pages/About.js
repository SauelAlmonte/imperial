import {Footer, MainNav} from "../components/ui";

export const About = () => (
    <>
        <MainNav/>
            <div className="flex flex-grow min-h-screen justify-center items-center">
                <div className="bg-white p-10 rounded-lg shadow-2xl w-2/3 border-2 border-black">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">About Us</h2>
                    <p className="text-xl font-bold mb-6 text-gray-800 ">
                        Imperial is a one stop web application for all beat makers.
                        GetSongKEY is an open source database of song Keys (CC BY 4.0).
                        <br />
                        What's the colored notation next to song keys?
                        It is the "Open Key" notation, a system created for Traktor,
                        a DJ software developed by Native Instruments. It simplifies
                        the circle of fifths for people having little to no musical background.


                    </p>

                </div>
            </div>
        <Footer/>
    </>
)