import { BrowserRouter, Routes, Route } from "react-router-dom"
import DesignEditor from "~/views/DesignEditor"
import Dashboard from "~/views/Dashboard"
import SignIn from "./views/SignIn"
import SignUp from "./views/SingUp"
import Home from "./views/Home"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/manage" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/design-editor" element={<DesignEditor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
