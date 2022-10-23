import { BrowserRouter, Routes, Route } from "react-router-dom"
import DesignEditor from "~/views/DesignEditor"
import Dashboard from "~/views/Dashboard"
import SignIn from "./views/SignIn"
import SignUp from "./views/SingUp"
import Home from "./views/Home"
import PosterGeneration from "./views/PosterGeneration"
import PageNotFound from "./views/pageNotFound"
import Templates from './views/template'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/manage" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/design-editor" element={<DesignEditor />} />
        <Route path="/poster-generation" element={<PosterGeneration />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/" element={<Home />} />
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
