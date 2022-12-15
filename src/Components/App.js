import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './LogIn';
import SignIn from "./SignIn";
import GlobalStyle from "../styles/GlobalStyle"

export default function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<LogIn />}></Route>
        <Route path='/cadastro' element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}