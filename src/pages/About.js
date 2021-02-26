import {Footer, MainNav} from "../components/ui";

export const About = () => (
    <>
        <MainNav/>
            <div className="flex flex-grow flex-col min-h-screen">
                <div className="p-6 text-2xl font-bold flex-grow">
                    <h1 className="text-gray-100">About Us</h1>
                </div>
            </div>
        <Footer/>
    </>
)