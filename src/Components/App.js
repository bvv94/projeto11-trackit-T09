import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from './LogIn';
import SignIn from "./SignIn";
import GlobalStyle from "../styles/GlobalStyle"
import Context from "./Context";
import { useState } from "react";
import Today from "./InsideApp/Today";

export default function App() {

  const [user, setUser] = useState("")

  return (
    <Context.Provider value={[user, setUser]}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<LogIn />}></Route>
          <Route path='/cadastro' element={<SignIn />}></Route>
          <Route path='/hoje' element={<Today />}></Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}