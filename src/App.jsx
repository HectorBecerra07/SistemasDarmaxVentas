import { Routes, Route } from "react-router-dom";
import DarmaxWelcome from "./pages/DarmaxWelcome";
import Register from "./pages/Register";
import Login from "./pages/Login";



function App() {
  return (

    <Routes>
      <Route path="/" element={<DarmaxWelcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
    </Routes>
  );
}

export default App;
