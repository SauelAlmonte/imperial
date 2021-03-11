import {Footer, MainNav} from "../components/ui";

export const Donate = () => (
    <>
        <MainNav/>
        <div className="flex flex-grow min-h-screen justify-center items-center mt-10">
            <div className="bg-white p-10 rounded-lg shadow-2xl w-2/3 border-2 border-black">
                <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">Frequently Asked Questions</h1>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    1. What is Imperial?
                </h2>
                <p className="mb-3">
                    is a web application that allows users to upload tracks for both key and BPM estimation.
                    The goal of Imperial is to become a community driven resource for DJs, producers,
                    and mashup artists around the world.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    2. What is the Database?
                </h2>
                <p className="mb-3">
                    The Database is our searchable and editable track collection populated with keys and BPMs to
                    thousands of user submitted tracks. Users vote on the accuracy of the information and contribute
                    to correct any incomplete or incorrect data.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    3. How accurate is Imperial?
                </h2>
                <p className="mb-3">
                    Key and BPM extraction is a highly complex process which can only result in estimations.
                    The accuracy may vary based on a multitude of factors. Imperial's accuracy remains
                    competitive with the best products in the industry.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    4. What does a key of 9A for example mean?
                </h2>
                <p className="mb-3">
                    To make key identification more recognizable and user friendly, we altered the well known
                    circle of fifths. We rotated the outer ring five degrees clockwise, and the inner ring one
                    degree counter-clockwise. We then numbered each section as a clock 1-12 and suffixed the inner
                    ring A and the outer ring B. "A" being a minor key, "B" being a major key. This rotation allows
                    a key of [X]A have compatible keys of [X-1]A, [X+1]A, and [X]B.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    5. Is Imperial free?
                </h2>
                <p className="mb-3">
                    Yes, all of the services we provide are completely free.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    6. Why would I use Imperial?
                </h2>
                <p className="mb-3">
                    Imperial is used mostly by DJ's and mashup artists to collect key information of their own
                    libraries, or to search for compatible tracks that they may not own.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    7. What do you do with my uploaded tracks? Do you keep them?
                </h2>
                <p className="mb-3">
                    No. We delete all tracks uploaded to our servers immediately after they are analyzed.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    8. What if I don't want my track to be searchable in the database?
                </h2>
                <p className="mb-3">
                    After analyzing your tracks, you always have the option to opt out of adding them to the database.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    9. Why don't my uploaded tracks show up in the database?
                </h2>
                <p className="mb-3">
                    At this point in time all tracks are manually validated before they are made visible and
                    searchable in the database. Bear with us, we're doing our best!
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    10. I made track changes, why don't they show up?
                </h2>
                <p className="mb-3">
                    Currently we need to manually validate each update until we get our automatic validation
                    system in place. Please be patient, we'll get them up!
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    11. Can I download tracks off of Imperial?
                </h2>
                <p className="mb-3">
                    No. Since Imperial does not store any uploaded tracks, they cannot be downloaded.
                </p>
                <h2 className="text-xl mb-2 font-bold text-gray-800 ">
                    12. I found a bug what do I do?
                </h2>
                <p className="mb-3">
                    First, we apologize for any inconvenience this may have caused. We would appreciate if you
                    could report any bugs with as much detailed information as possible by contacting us here.
                    Please include your browser information as well as what exactly you were doing at the time.
                </p>
            </div>
        </div>
        <Footer/>
    </>
)