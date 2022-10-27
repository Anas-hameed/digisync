import { useEffect } from "react"
import { Canvas as LayerhubCanvas } from "@layerhub-io/react"
import Playback from "../Playback"
import useDesignEditorContext from "~/hooks/useDesignEditorContext"
import ContextMenu from "../ContextMenu"


import { FontItem } from "~/interfaces/common"
import { loadFonts } from "~/utils/fonts"
import { IStaticText } from "@layerhub-io/types"
import { nanoid } from "nanoid"
import { images } from "~/constants/mock-data"
import { useEditor } from "@layerhub-io/react"
import { useState } from "react"


import usePosterContent from "../../../../hooks/usePosterContent";

const Canvas = () => {
  const { displayPlayback } = useDesignEditorContext();
  const editor = useEditor();
  const {
    prompt,
    setPrompt,
    image,
    setImage,
    catagory,
    setCatagory,
    posterText,
    setPosterText,
    Title,
    setTitle,
    Promotion,
    setPromotion,
    Contact,
    setContact,
    Description,
    setDescription,
    Font,
    setFont,
    index,
    setIndex,
    selectedPoster,
    setSelectedPoster } = usePosterContent();


  const loadImage = async (source: string) => {
    await editor.objects.add({
      type: "StaticImage",
      src: source
    })
  }

  // const loadFont= async (font: FontItem) => {
  //   await editor.objects.add({
  //     type: "StaticText",
  //     text: "Text",
  //     font: font,
  //     fontSize: 20,
  //     color: "#000000",
  //     x: 0,
  //     y: 0,
  //     width: 100,
  //     height: 100,
  //   })
  // }
  const [loaded, setloaded]= useState(false);

  useEffect(() => {
    console.log(image);
    if (editor) {
      if (image.length > 0) {
        if(!loaded){
          loadImage(image[selectedPoster].image_path);
        }else{
          setloaded(false);
        }
      }
    }
  }, [selectedPoster, image,editor]);

  return (
    <div style={{ flex: 1, display: "flex", position: "relative" }}>
      {displayPlayback && <Playback />}
      <ContextMenu />
      <LayerhubCanvas
        config={{
          background: "#f1f2f6",
          controlsPosition: {
            rotation: "BOTTOM",
          },
          shadow: {
            blur: 4,
            color: "#000",
            offsetX: 0,
            offsetY: 0,
          },
        }}
      />
    </div>
  )
}

export default Canvas
