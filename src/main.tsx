import ReactDOM from "react-dom/client"
import Provider from "./Provider"
import Router from "./Router"
import Container from "./Container"
import "./styles/styles.css"
import Nav from "./components/navbar"
import Footer from "./components/footer"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider>
      <Nav/>
      <Router />
      <Footer/>
  </Provider>
)
