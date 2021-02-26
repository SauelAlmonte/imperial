import {Footer, MainNav} from "../components/ui";

export const Contact = () => (
    <>
        <MainNav/>
            <div className="p-12 flex-grow items-center max-h-full md:max-h-screen">
                <div className="container p-6 border-2 border-black shadow-lg rounded-lg md:max-w-screen-xl mx-auto justify-center bg-gray-100">
                    <h4 className="font-bold text-xl mb-2">
                        Contact Us
                    </h4>
                    <form className="flex flex-col">
                        <label className="mb-2 mt-2">Name</label>
                        <input className="w-full p-2 border-2 border-black rounded-lg" type="text" name="name" placeholder="Enter Name..."/>
                        <label className="mb-2 mt-4">Email Address</label>
                        <input className="w-full p-2 border-2 border-black rounded-lg" type="text" name="email" placeholder="Enter Email..."/>
                        <label className="mb-2 mt-4">Subject</label>
                        <input className="w-full p-2 border-2 border-black rounded-lg" type="text" name="subject" placeholder=""/>
                        <label className="mb-2 mt-4">Content</label>
                        <textarea className="w-full p-2 border-2 border-black md:max-h-full rounded-lg" type="text" name="content" placeholder=""/>
                    </form>
                    <button className="border-2 border-black mt-4 px-2 py-1 rounded-lg shadow-md">Submit</button>
                </div>
            </div>
        <Footer/>
    </>
)