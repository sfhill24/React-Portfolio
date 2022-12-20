import React, { useState } from "react";
import Navigation from './components/Navigation';
import About from "./components/About";
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ContactForm from "./components/Contact";
import Resume from "./components/Resume";
import { Routes, Route, Navigate } from "react-router-dom";


function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [headerSelected, setHeaderSelected] = useState("");

  return (
    <div>
      <Navigation
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        setHeaderSelected={setHeaderSelected}
      ></Navigation>
      <main>
        <Header
          headerSelected={headerSelected}
        ></Header>
        {!contactSelected ? (
          <>
            <Routes>
              <Route path="/React-Portfolio/" element={<Navigate to="/about" />} />
              <Route path="/" element={<Navigate to="/about" />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}


export default App;
