import { Route, Routes } from "react-router-dom"
import DesignEditor from "~/views/DesignEditor"
import Dashboard from "~/views/Dashboard"
import SignIn from "./views/SignIn"
import SignUp from "./views/SingUp"
import Home from "./views/Home"
import PosterGeneration from "./views/PosterGeneration"
import PageNotFound from "./views/pageNotFound"
import Templates from './views/template'
import ProtectedRoute from "./utils/protectedRoute";


// get user props
type RouterProp = {
  user: any
};


const Router= ({user}:RouterProp) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route  element={<ProtectedRoute user={user} />}>
        <Route path="/design-editor" element={<DesignEditor />} />
        <Route path="/poster-generation" element={<PosterGeneration />} />
        <Route path="/templates" element={<Templates />} />
      </Route >
      <Route path='*' element={<PageNotFound />} />
      
    </Routes>
  )
}

export default Router
