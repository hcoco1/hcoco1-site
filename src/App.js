import React from "react";
import { HelmetProvider } from 'react-helmet-async';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Layout from "./components/Layout"
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Portafolio from "./pages/Portafolio";
import ResumeLayout from "./components/ResumeLayout";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Interest from "./pages/Interest";
import About from "./pages/About";
import Contact from "./pages/Contact";



const router = createBrowserRouter(createRoutesFromElements(

  <Route path="/" element={<Layout />}>

    <Route
      index
      element={<Home />}
    />

    <Route path="resume" element={<ResumeLayout />}>

      <Route
        index
        element={<About />}
     
      />

      <Route
        path="experience"
        element={<Experience />}
      
      />
      <Route
        path="education"
        element={<Education />}
      
      />
      <Route
        path="skills"
        element={<Skills />}
      
      />
      <Route
        path="interest"
        element={<Interest />}
     
      />
    </Route>
    <Route
      path="blog"
      element={<Blog />}

    />
    <Route
      path="portafolio"
      element={<Portafolio />}
   
    
    />
    <Route
      path="contact"
      element={<Contact />}


    />
  </Route>
))

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App;
