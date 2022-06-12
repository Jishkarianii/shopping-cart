import './App.scss';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDataFromLocalStorage } from "./redux/action/checkoutAction";
import Header from "./components/Header";
import All from './pages/All';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Footer from "./components/Footer";
import ProductInner from './components/ProductInner';
import Checkout from './pages/Checkout';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    // Get data from localStorage
    if (localStorage.getItem("bag") === null) return
    dispatch(setDataFromLocalStorage(JSON.parse(localStorage.getItem("bag"))))
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route index element={<All />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/product" element={<ProductInner />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
