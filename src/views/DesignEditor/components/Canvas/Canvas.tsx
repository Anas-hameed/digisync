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

const Canvas = () => {
  const { displayPlayback } = useDesignEditorContext();
  const editor = useEditor()

  useEffect(() => {
    addObject();
  }, [editor]);

  const addObject = async () => {
    if (editor) {
      const font: FontItem = {
        name: "OpenSans-Regular",
        url: "https://fonts.gstatic.com/s/opensans/v27/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf",
      }
      await loadFonts([font])
      const options = {
        id: nanoid(),
        type: "StaticText",
        width: 420,
        text: "lorem ipsum text here",
        fontSize: 92,
        fontFamily: font.name,
        textAlign: "left",
        fontStyle: "normal",
        fontURL: font.url,
        fill: "#ffffff",
        metadata: {},
        x: 0,
        y: 0,
      }
      await editor.objects.add({
        type: "StaticImage",
        src: images[0].src.original,
      })
      editor.objects.add<IStaticText>(options)
    }
  }

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
