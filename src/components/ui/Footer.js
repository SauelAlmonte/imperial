import {Link} from "react-router-dom";

export const Footer = () => (

    <>

        <div className="md:w-full text-center bg-gray-200 pin-bottom mt-20">
            <div className="container px-6 pt-4 pb-6 mx-auto">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full text-center md:w-1/4 md:text-left">
                        <h5 className="mb-6 font-bold text-black uppercase">Legal</h5>
                        <ul className="block space-y-2 mb-4">
                            <li className="text-black hover:underline text-sm md:text-base">
                                <Link to="/">Terms</Link>
                            </li>
                            <li className="text-black hover:underline text-sm md:text-base">
                                <Link to="/">Privacy</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full text-center md:w-1/4 md:text-left">
                        <h5 className="mb-6 font-bold text-black uppercase">Social</h5>
                        <ul className="block space-y-2 mb-4">
                            <li className="text-black hover:underline text-sm md:text-base">
                                <Link to="/">Facebook</Link>
                            </li>
                            <li className="text-black hover:underline text-sm md:text-base">
                                <Link to="/">Twitter</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full text-center md:w-1/4 md:text-left">
                        <h5 className="mb-6 font-bold text-black uppercase">Company</h5>
                        <ul className="block space-y-2 mb-4">
                            <li className="text-black hover:underline text-sm md:text-base">
                                <Link to="/About">About Us</Link>
                            </li>
                            <li className="text-black hover:underline text-sm md:text-base">
                                <Link to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full text-center md:w-1/4 md:text-left">
                        <h5 className="mb-6 font-bold text-black uppercase">Links</h5>
                        <ul className="block space-y-2 mb-4">
                            <li className="text-black hover:underline text-sm md:text-base">
                                <Link to="/">Support</Link>
                            </li>
                            <li className="text-black hover:underline text-sm md:text-base">
                                <Link to="/">FAQ</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

    </>

)