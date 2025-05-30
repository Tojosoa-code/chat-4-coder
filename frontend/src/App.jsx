import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"
import RouteurAuth from "./Router/RouteurAuth"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={<RouteurAuth />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
