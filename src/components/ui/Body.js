export const Body = () => (

    <>
            <div className="flex-grow">
                <div className="md:container max-w-sm h-auto md:w-2/3 md:h-auto m-auto text-center mt-28">
                    <div className="border border-dashed border-black relative h-36 bg-gray-200">
                        <div className="p-10 absolute top-0 right-0 left-0 text-gray-400 md:container">
                            <h4>
                                Drop files anywhere to upload
                                <br/> or
                            </h4>
                            <p className="">
                                Select Files
                            </p>
                        </div>
                    </div>
                    <input type="file" multiple className="md:visible invisible w-auto h-auto cursor-pointer block opacity-50 hover:color-gray-100 border border-dashed border-black"/>
                </div>
            </div>


    </>
)