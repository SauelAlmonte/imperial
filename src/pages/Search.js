import {Footer, MainNav} from "../components/ui";

export const Search = () => (
    <>
        <MainNav/>
            <div className="p-20 h-auto md:h-screen">
                <div className="bg-white flex items-center rounded-full shadow-xl border-2 border-black md:max-w-screen mx-auto">
                    <input className="rounded-full w-auto md:w-full py-5 px-8 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />

                        <div className="pl-8 p-1 md:p-1">
                            <button className="bg-gray-300 text-black rounded-full focus:outline-none px-2 py-2 md:w-16 md:h-16 flex items-center justify-center border-2 border-black hover:bg-gray-400">
                                Search
                            </button>
                        </div>
                </div>
            </div>
        <Footer/>
    </>
)