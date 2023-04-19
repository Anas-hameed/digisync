import TemplatePreview from "./template";
import LeftPreview from "./LeftPreview";
import BottomRightPreview from "./BottomRightPreview";
import BottomLeftPreview from "./BottomLeftPreview";

import usePosterContent from "~/hooks/usePosterContent";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Preview from './preview/index';
import LeftPreviewModel from './preview/LeftPreviewModel';
import BottomRightPreviewModel from './preview/BottomRightPreviewModel';
import BottomLeftPreviewModel from './preview/BottomLeftPreviewModel';

const Templates = () => {
    const { image, setImage, selectedPoster, leftImage, rightImage, bottomRightImage, bottomLeftImage } = usePosterContent();
    const [isOpen, setIsOpen] = useState(false);
    const [leftIsOpen, setLeftIsOpen] = useState(false);
    const [rightIsOpen, setRightIsOpen] = useState(false);
    const [bottomLeftIsOpen, setBottomLeftIsOpen] = useState(false);


    useEffect(() => {
        setImage(rightImage);
    }, []);

    if (image.length === 0) {
        return <div className="flex flex-col justify-center items-center h-[75vh]">

            <h2 className="text-2xl font-semibold font-poppins">No Template Generated</h2>
            <Link to="/poster-generation" className="mt-4 text-base font-bold  inline-block text-center rounded-lg px-8 py-3 b bg-[#1976d2] hover:bg-[#1565c0] hover:border-2 hover:border-[#1565c0] text-white  transition font-poppins">Go to Generation</Link>

        </div>
    } else {
        return (
            <div className="flex flex-wrap py-24 px-8">
                <div className="flex flex-wrap relative">
                    {/* left map  */}
                    {
                        leftImage.map((item, index) => {
                            return (<div key={index} className="m-8">
                                <LeftPreview data={item} index1={index} setIsOpen={setLeftIsOpen} />
                            </div>);
                        })
                    }
                    {leftIsOpen && <LeftPreviewModel previewIndex={selectedPoster} data={leftImage[selectedPoster]} setIsOpen={setLeftIsOpen} />}
                </div>
                <div className="flex flex-wrap relative">
                    {/* bottom Right map  */}
                    {
                        bottomRightImage.map((item, index) => {
                            return (<div key={index} className="m-8">
                                <BottomRightPreview data={item} index1={index} setIsOpen={setRightIsOpen} />
                            </div>);
                        })
                    }
                    {rightIsOpen && <BottomRightPreviewModel previewIndex={selectedPoster} data={bottomRightImage[selectedPoster]} setIsOpen={setRightIsOpen} />}
                </div>
                <div className="flex flex-wrap relative">
                    {
                        image.map((item, index) => {
                            return (
                                <div key={index} className="m-8">
                                    <TemplatePreview data={item} index1={index} setIsOpen={setIsOpen} />
                                </div>
                            )
                        })
                    }
                    {isOpen && <Preview previewIndex={selectedPoster} data={image[selectedPoster]} setIsOpen={setIsOpen} />}
                </div> 
                <div className="flex flex-wrap relative">
                    {/* bottom left map  */}
                    {
                        bottomLeftImage.map((item, index) => {
                            return (<div key={index} className="m-8">
                                <BottomLeftPreview data={item} index1={index} setIsOpen={setBottomLeftIsOpen} />
                            </div>);
                        })
                    }
                    {bottomLeftIsOpen && <BottomLeftPreviewModel previewIndex={selectedPoster} data={bottomLeftImage[selectedPoster]} setIsOpen={setBottomLeftIsOpen} />}
                </div>
            </div>
        )
    }
}

export default Templates;