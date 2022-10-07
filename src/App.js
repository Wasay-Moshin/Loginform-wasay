import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./Component/Elements/Signup";
import Login from "./Component/Elements/Login";
import Base from "./Component/Layouts/Base";
import Home from "./Pages/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home/>}/>
            <Route index path="/Signup" element={<Signup/>}/>
            <Route index path="/Login" element={<Login/>}/>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default App;
