import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import PageLayout from "./Components/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
        </Route>
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
