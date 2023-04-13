import { useState } from "react";
import Heading from "../heading";
import Paragraph from "../paragraph";

function CTA() {
    const [triggerScroll,setTriggerScroll]= useState(false);
    return (
        <section className="py-6  text-black">
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                {/* <h1 className="text-5xl font-bold leading-none text-center">Sign up now</h1> */}
                <Heading content={"Sign up now"} />
                <Paragraph content={"Start creating cool stuff with us ..."} />
                <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
                    <button className="px-8 py-3 text-lg font-bold font-roboto rounded bg-[#1976d2] hover:bg-[#1565c0] text-white">Get started</button>
                    <button className="px-8 py-3 text-lg font-bold font-roboto border rounded bg-black text-white border-gray-300">Learn more</button>
                </div>
            </div>
            <div className={`relative overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 ${triggerScroll?'-translate-x-[600px]':'translate-x-[200]'}`} onBlur={()=>setTriggerScroll(false)} onScroll={()=>setTriggerScroll(true)}>
                <div className="absolute inset-0 bg-gray-100 opacity-0 hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-gray-900 font-bold mb-2 text-xl">Card Title</h2>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
                </div>
            </div>
        </section>

    );

}

export default CTA;