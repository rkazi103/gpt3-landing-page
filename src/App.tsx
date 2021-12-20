import Brand from "./components/Brand";
import CTA from "./components/CTA";
import Navbar from "./components/Navbar";
import Blog from "./containers/Blog";
import Features from "./containers/Features";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Possibilities from "./containers/Possibilities";
import WhatGPT3 from "./containers/WhatGPT3";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilities />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
