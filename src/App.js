import React, { useState } from "react";
import Navigation from './components/Header/Navigation';
import Header from './components/Header';
//import Project from './components/Project';
import Footer from './components/Footer';

function App() {

  const [categories] = useState([
    {
      name: "portfolio",
      description: "A list of my projects with photos and links"
    },
    {
      name: "resume",
      description: "View and download my resume"
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Navigation>
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      </Navigation>
      <main>
        <Header></Header>
      </main>
      <Footer></Footer>
    </div>
  );
}



export default App;
