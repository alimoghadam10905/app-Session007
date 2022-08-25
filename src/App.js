import "./App.css";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Faq from "./pages/Faq";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainPage>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="faq" element={<Faq />} />
          </Routes>
        </MainPage>
      </BrowserRouter>
    </div>
  );
}

export default App;
