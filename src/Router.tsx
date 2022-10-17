import { BrowserRouter, Routes, Route } from "react-router-dom"
import DesignEditor from "~/views/DesignEditor"
import Dashboard from "~/views/Dashboard"
import SignIn from "./views/SignIn"
import SignUp from "./views/SingUp"
import Home from "./views/Home"
import PosterGeneration from "./views/PosterGeneration"
import PageNotFound from "./views/pageNotFound"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path="/manage" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/design-editor" element={<DesignEditor />} />
        <Route path="/" element={<Home />} />
        <Route path="/poster-generation" element={<PosterGeneration />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
