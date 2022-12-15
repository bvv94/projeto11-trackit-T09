import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import SignIn from "./SignIn";
import GlobalStyle from "../styles/GlobalStyle"

export default function App() {

  const API = "";

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Home api={API}/>}></Route>
        <Route path='/cadastro' element={<SignIn api={API}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}