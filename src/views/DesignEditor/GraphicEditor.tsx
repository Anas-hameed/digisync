import Navbar from "./components/Navbar"
import Panels from "./components/Panels"
import Canvas from "./components/Canvas"
import Footer from "./components/Footer"
import Toolbox from "./components/Toolbox"
import EditorContainer from "./components/EditorContainer"
import useDesignEditorContext from "~/hooks/useDesignEditorContext"
import ContextMenu from "./components/ContextMenu"
import { useEffect } from "react"

const GraphicEditor = () => {
  const { setEditorType } = useDesignEditorContext();
  useEffect(()=>{
    setEditorType("GRAPHIC");
  },[])

  return (
    <EditorContainer>
      <Navbar />
      <div style={{ display: "flex", flex: 1 }}>
        <Panels />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
          <Toolbox />
          <Canvas />
          <Footer />
        </div>
      </div>
    </EditorContainer>
  )
}

export default GraphicEditor
