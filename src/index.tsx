import ReactDOM from "react-dom/client"
import Provider from "./Provider"
import Router from "./Router"
import Container from "./Container"
import "./styles/styles.css"
import { BrowserRouter } from 'react-router-dom';
import MainApp from './main';
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider>
    <BrowserRouter>
      <MainApp></MainApp>
    </BrowserRouter>
  </Provider>
)
