import {Footer, MainNav} from "../components/ui";

export const Login = () => (
    <>
        <MainNav/>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-10 rounded shadow-2xl w-2/3 border-2 border-black">
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome!</h2>
                    <h2 className="text-xl font-bold mb-6 text-gray-800">Please Login</h2>
                    <form className="space-y-5">
                        <div>
                            <label className="block mb-1 font-bold text-gray-500">Email/Username</label>
                            <input type="text" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" />
                        </div>
                        <div>
                            <label className="block mb-1 font-bold text-gray-500">Password</label>
                            <input type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" />
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="agree" />
                            <label htmlFor="agree" className="ml-2 text-gray-700 text-sm">Remeber Login.</label>
                        </div>
                        <button
                            className="block w-full p-4 rounded text-black transition duration-300 border-2 border-black">Sign Up
                        </button>
                    </form>
                </div>

            </div>
        <Footer/>
    </>
)