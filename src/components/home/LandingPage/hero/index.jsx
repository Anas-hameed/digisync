import Paragraph from "../paragraph";
import { Link } from 'react-router-dom';
import ilusteration from '~/media/Images/AI.svg';

function Hero() {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 md:py-32 md:px-12">
            <div className="flex flex-col py-10 items-center lg:flex-row">
                <div className="container mx-auto flex flex-col items-center  lg:items-start">
                    <h1 className="max-w-[350px] text-3xl font-medium font-poppins text-center md:text-4xl md:max-w-lg lg:text-start">Create Content with <span className="font-poppins font-bold">AI in just few minutes</span>
                    </h1>
                    <p className="text-center my-8 text-sm font-poppins md:text-lg xl:max-w-xl lg:max-w-lg lg:text-start">
                        Artificial intelligence makes it fast & easy to create content. With a single platform you can generate a whole Poster, or generate an email or generate an instant message for your audience
                    </p>

                    <div className="flex gap-4">
                        <Link to={"/login"}>
                            <button className="px-8 py-2 text-lg font-bold font-roboto rounded bg-[#1976d2] hover:bg-[#1565c0] text-white">Get started</button>
                        </Link>
                        <button className="px-8 py-2 text-lg font-bold font-roboto border rounded bg-black hover:bg-gray-800 text-white ">Read more</button>
                    </div>
                </div>
                <div className="w-full mx-auto flex items-center justify-center xl:block">
                <img src={ilusteration} alt="AI Ilusteration" className=" mt-16 ml-16 max-w-[400px] md:max-w-lg xl:max-w-xl lg:max-w-md" />
                </div>
            </div>
        </section>

    )
}

export default Hero;