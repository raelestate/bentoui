import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Components from "./pages/Components";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Components" element={<Components />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
