import React from "react"
import { Block } from "baseui/block"
import { useEditor } from "@layerhub-io/react"

const Graphic = () => {
  const editor = useEditor()
  const [loading, setLoading] = React.useState(true)
  const [state, setState] = React.useState({
    image: "",
  })

  const makePreview = React.useCallback(async () => {
    if (editor) {
      const template = editor.scene.exportToJSON()
      const image = (await editor.renderer.render(template)) as string
      console.log(image)
      setState({ image })
      setLoading(false)
    }
  }, [editor])

  React.useEffect(() => {
    makePreview()
  }, [editor])

  return (
    <div className="m-auto my-8">
      {!loading && <img width="auto" height="100%" src={state.image} />}

    </div>
    // <Block $style={{ flex: 1, alignItems: "center", justifyContent: "center", display: "flex", padding: "5rem" }}>
    // </Block>
  )
}

export default Graphic
