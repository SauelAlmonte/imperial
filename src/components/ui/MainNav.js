export const MainNav = () => (

    <>
        <div className="md:p-5 p-3 border-2 bd-color-black bg-gray-200">
            <div className="md:w-full flex justify-between">
                <ul>
                    <li className="font-bold text-2xl md:text-3xl text-black justify-start">IMPERIAL</li>
                </ul>
                <div className="flex">
                    <ul className="inline-flex text-black justify-end items-center space-x-3">
                        <li className="hover:underline text-sm md:text-base">Register</li>
                        <li className="hover:underline text-sm md:text-base">Login</li>
                    </ul>
                </div>
            </div>
        </div>

    </>
)