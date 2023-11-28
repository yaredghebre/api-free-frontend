import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Masonry from "./components/Masonry";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="ms_wrapper h-full">
        <Header />
        <Jumbotron />
        <Masonry />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
