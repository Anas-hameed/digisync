import { BrowserRouter, Routes, Route } from "react-router-dom"
import DesignEditor from "~/views/DesignEditor"
import Dashboard from "~/views/Dashboard"
import SignIn from "./views/SignIn"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/manage" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<DesignEditor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
