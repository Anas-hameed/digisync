import Paragraph from "../paragraph";

function Hero(){
    return(
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">Create 
                    <span className="text-violet-400"> Content </span><br/> with
                    <span className="text-violet-400"> AI </span> in just <br/> few <span className="text-violet-400">minutes</span> 
                </h1>
                
                <Paragraph content={"Artificial intelligence makes it fast & easy to create content for your blog, social media, website, and more!"}/>
                <div className="flex flex-wrap justify-center">
                    <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 hover:bg-violet-500 text-white ">Get started</button>
                    <button className="px-8 py-3 m-2 text-lg border rounded bg-black hover:bg-gray-800 text-white ">Learn more</button>
                </div>
            </div>
        </section>

    )
}

export default Hero;