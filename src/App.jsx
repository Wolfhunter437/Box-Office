import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
