function FAQ() {

    return (

        <section className=" bg-white text-black dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center items-center px-4 py-16  md:py-32 md:px-10 lg:px-32 xl:max-w-3xl mx-auto md:p-8">
                <h2 className="text-2xl font-bold text-center font-poppins sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 text-center font-poppins dark:text-gray-400">Our aim is to automate the whole process of digital
                    Marketing.</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none font-poppins focus-visible:ring-violet-400">What is creative automation?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 font-poppins dark:text-gray-400">Creative automation refers to the use of artificial intelligence technology in the performance of creative production function.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none font-poppins focus-visible:ring-violet-400">How AI will create Posters in just few minutes?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 font-poppins dark:text-gray-400">We are using cutting edge technologies for example DALL- E2 for background generation and gpt2 for tagline generation. It helps to create awesome posters in just few minutes.</p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none font-poppins focus-visible:ring-violet-400">How AI will create Email and SMS in just few minutes?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 font-poppins dark:text-gray-400">Say GoodBye to the old method of spending hours and days on Email ans SMS
                            writing and its marketing.Our application will automatically generate
                            email content for you based on a specific description that user will enter
                            about the email (for example subject of the email , receiver information and
                            first few lines etc) and will also automate the sending process. </p>
                    </details>
                </div>
            </div>
        </section>

    )

}

export default FAQ;