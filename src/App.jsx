import './App.scss';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from "./components/Header";
import All from './pages/All';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route index element={<All />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
