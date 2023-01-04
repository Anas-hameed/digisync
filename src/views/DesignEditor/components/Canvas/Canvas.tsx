import React from "react";
import { useEffect } from "react";
import { Canvas as LayerhubCanvas } from "@layerhub-io/react";
import Playback from "../Playback";
import useDesignEditorContext from "~/hooks/useDesignEditorContext";
import ContextMenu from "../ContextMenu";


import { FontItem } from "~/interfaces/common"
import { loadFonts } from "~/utils/fonts"
import { IStaticText } from "@layerhub-io/types"
import { nanoid } from "nanoid"
import { images } from "~/constants/mock-data"
import { useEditor } from "@layerhub-io/react"
import { useState } from "react"
import { SAMPLE_TEMPLATES } from "~/constants/editor"

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
  
  const { scenes,setScenes,setCurrentScene, currentScene } = useDesignEditorContext()


 

  const loadTemplate = React.useCallback(

    async (template: any) => {
      if (editor) {
        const fonts: any[] = []
        template.layers.forEach((object: any) => {
          if (object.type === "StaticText" || object.type === "DynamicText") {
            fonts.push({
              name: object.fontFamily,
              url: object.fontURL,
              options: { style: "normal", weight: 400 },
            })
          }
        })
        const filteredFonts = fonts.filter((f) => !!f.url)
        if (filteredFonts.length > 0) {
          await loadFonts(filteredFonts)
        }
        setCurrentScene({ ...template , id: currentScene?.id })
      }
    },
    [editor, currentScene]
  )

 


  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    if (editor) {
      if (image.length > 0) {
        if (!loaded) {
          SAMPLE_TEMPLATES[selectedPoster].id= nanoid();
          SAMPLE_TEMPLATES[selectedPoster].layers[0].src = image[selectedPoster].image_path;
          SAMPLE_TEMPLATES[selectedPoster].layers[1].text= Title;
          SAMPLE_TEMPLATES[selectedPoster].layers[2].text= posterText[index];
          SAMPLE_TEMPLATES[selectedPoster].layers[3].text= Promotion;
          SAMPLE_TEMPLATES[selectedPoster].layers[4].text= Description;
          SAMPLE_TEMPLATES[selectedPoster].layers[5].text= prompt;
          SAMPLE_TEMPLATES[selectedPoster].layers[6].text= Contact;
          loadTemplate(SAMPLE_TEMPLATES[selectedPoster]);
          setloaded(true);
        } 
      }
      console.log("Hello");
      console.log(scenes);
    }
  }, [selectedPoster, editor, image]);

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

export default Canvas;
