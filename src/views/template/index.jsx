import TemplatePreview from "../../components/template";
import usePosterContent from "../../hooks/usePosterContent";
import { Link } from "react-router-dom";
import { useState } from "react";
import Preview from '../../components/preview/index';


const Templates = () => {
    const { image, selectedPoster } = usePosterContent();
    const [isOpen, setIsOpen] = useState(false);

    if (image.length === 0) {
        return <div className="flex flex-col justify-center items-center h-[75vh]">

                <h2 className="text-2xl font-semibold font-poppins">No Template Generated</h2>
                <Link to="/poster-generation" className="mt-4 text-base font-bold  inline-block text-center rounded-lg px-8 py-3 b bg-[#1976d2] hover:bg-[#1565c0] hover:border-2 hover:border-[#1565c0] text-white  transition font-poppins">Go to Generation</Link>
            
        </div>
    } else {
        return (
            <div className="flex flex-wrap py-24 px-8">
                {
                    image.map((item, index) => {
                        return (
                            <div key={index} className="m-8">
                                <TemplatePreview data={item} index1={index} setIsOpen={setIsOpen} />
                            </div>
                        )
                    })
                }
                {isOpen &&<Preview previewIndex={selectedPoster} data={image[selectedPoster]} setIsOpen={setIsOpen} />}
            </div>
        )
    }
}

export default Templates;