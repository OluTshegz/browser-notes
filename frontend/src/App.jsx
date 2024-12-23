import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

import AuthContextProvider from "./context/AuthContextProvider"

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/register" element={ <Signup /> }></Route>
            <Route path="/login" element={ <Login /> }></Route>
          </Routes>
          <ToastContainer />
        </AuthContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
