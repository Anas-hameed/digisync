import TemplatePreview from "../../components/template";
import data from "~/components/template/data.json";
import { useEffect, useState } from "react";

const Templates = () => {
    const [template, setTemplate] = useState(data.data);
    if (template.length === 0) {
        return <div className="flex justify-center items-center h-screen">
            <h1 className="text-2xl font-semibold">No Template Found</h1>
        </div>
    } else {

        return (
            <div className="flex flex-wrap py-24 px-8">
                {
                    template.map((item, index) => {
                        return (
                            <div>
                                <TemplatePreview data={item} key={index} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Templates;