import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import TopNav from "./components/TopNav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
    {TopNav()}
    <ToastContainer position="top-center"></ToastContainer>

      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/login" element={<Login></Login>} />
        <Route exact path="/register" element={<Register></Register>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
