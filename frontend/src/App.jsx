import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

import AuthContextProvider from "./context/AuthContextProvider"

function App() {
  return (
    <>
      <div className="text-4xl">Browser Notes</div>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/register" element={ <Signup /> }></Route>
            <Route path="/login" element={ <Login /> }></Route>
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
