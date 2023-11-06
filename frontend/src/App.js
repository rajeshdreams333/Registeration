import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign from "./Sign";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Sign" element={<Sign/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
