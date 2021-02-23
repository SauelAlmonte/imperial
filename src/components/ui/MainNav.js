import {Link} from "react-router-dom";

export const MainNav = () => (

    <>

        <div className="md:p-5 p-3 border-2 bd-color-black bg-gray-200">
            <div className="md:w-full flex justify-between">
                <ul>
                    <li className="font-bold text-xl md:text-3xl text-black justify-start">
                        <Link to="/">IMPERIAL</Link>
                    </li>
                </ul>
                <div className="flex">
                    <ul className="inline-flex text-black justify-end items-center space-x-3">
                        <li className="hover:underline text-sm md:text-base">
                            <Link to="/Search">Search</Link>
                        </li>
                        <li className="hover:underline text-sm md:text-base">
                            <Link to="/Login">Login</Link>
                        </li>
                        <li className="hover:underline text-sm md:text-base">
                            <Link to="/SignUp">SignUp</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </>
)