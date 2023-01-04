import React, { createContext, useState } from "react"

type Template = any
interface IPosterContext {
  prompt: string,
  setPrompt: (value: string) => void,
  image: Template[]
  setImage: (templates: Template[]) => void
  catagory: string,
  setCatagory: (value: string) => void,
  posterText: string[]
  setPosterText: (value: string[]) => void,
  Title: string,
  setTitle: (value: string) => void,
  Promotion: string,
  setPromotion: (value: string) => void,
  Contact: string,
  setContact: (value: string) => void,
  Description: string,
  setDescription: (value: string) => void,
  Font: Template[],
  setFont: (value: Template[]) => void,
  index: number,
  setIndex: (value: number) => void,
  selectedPoster: number,
  setSelectedPoster: (value: number) => void,
  caption: string, 
  setCaption: (value: string) => void,
  hastag: Template[],
  setHastag: (value: string[]) => void,
}

export const PosterContext = createContext<IPosterContext>({
  prompt: "",
  setPrompt: (value: string) => { },
  image: [],
  setImage: (templates: Template[]) => { },
  catagory: "",
  setCatagory: (value: string) => { },
  posterText: [],
  setPosterText: (value: string[]) => { },
  Title: "",
  setTitle: (value: string) => { },
  Promotion: "",
  setPromotion: (value: string) => { },
  Contact: "",
  setContact: (value: string) => { },
  Description: "",
  setDescription: (value: string) => { },
  Font: [],
  setFont: (value: Template[]) => { },
  index: 0,
  setIndex: (value: number) => { },
  selectedPoster:  0,
  setSelectedPoster: (value: number) => { },
  caption: "",
  setCaption: (value: string) => { },
  hastag: [],
  setHastag: (value: string[]) => { },
})

export const PosterContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [prompt, setPrompt] = useState<string>("")
  const [image, setImage] = useState<Template[]>([])
  const [catagory, setCatagory] = useState<string>("")
  const [posterText, setPosterText] = useState<string[]>([])
  const [Title, setTitle] = useState<string>("")
  const [Promotion, setPromotion] = useState<string>("")
  const [Contact, setContact] = useState<string>("")
  const [Description, setDescription] = useState<string>("")
  const [Font, setFont] = useState<Template[]>([])
  const [index, setIndex] = useState<number>(0);
  const [selectedPoster, setSelectedPoster] = useState<number>(0);
  const [caption, setCaption] = useState<string>("dodod");
  const [hastag, setHastag] = useState<Template[]>([]);
  const context = {
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
    setSelectedPoster,
    caption,
    setCaption,
    hastag,
    setHastag,
  }
  return <PosterContext.Provider value={context}>{children}</PosterContext.Provider>
}
