import {Footer, MainNav} from "../components/ui";

export const Search = () => (
    <>
        <MainNav/>
            <div className="p-24 h-auto md:h-screen">
                <div className="bg-white flex items-center rounded-full shadow-xl border-2 border-black md:max-w-screen-xl mx-auto">
                    <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />

                        <div className="p-4">
                            <button className="bg-gray-300 text-black rounded-full p-2 focus:outline-none w-16 h-16 flex items-center justify-center border-2 border-black">
                                Search
                            </button>
                        </div>
                </div>
            </div>
        <Footer/>
    </>
)