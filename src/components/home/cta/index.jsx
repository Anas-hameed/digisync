import Heading from "../heading";
import Paragraph from "../paragraph";

function CTA(){

    return(
        <section className="py-6  text-black">
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                {/* <h1 className="text-5xl font-bold leading-none text-center">Sign up now</h1> */}
                <Heading content={"Sign up now"}/>
                <Paragraph content={"Start creating cool stuff with us ..."}/>
                <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
                    <button className="px-8 py-3 text-lg font-bold font-roboto rounded bg-[#1976d2] hover:bg-[#1565c0] text-white">Get started</button>
                    <button className="px-8 py-3 text-lg font-bold font-roboto border rounded bg-black text-white border-gray-300">Learn more</button>
                </div>
            </div>
        </section>

    );

}

export default CTA;