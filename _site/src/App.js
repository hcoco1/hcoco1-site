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
      //loader={async () => await requireAuth()}
      />

      <Route
        path="experience"
        element={<Experience />}
      //loader={async () => await requireAuth()}
      />
      <Route
        path="education"
        element={<Education />}
      //loader={async () => await requireAuth()}
      />
      <Route
        path="skills"
        element={<Skills />}
      //loader={async () => await requireAuth()}
      />
      <Route
        path="interest"
        element={<Interest />}
      //loader={hostVansLoader}
      />
    </Route>
    <Route
      path="blog"
      element={<Blog />}
    //loader={loginLoader}
    //action={loginAction}
    />
    <Route
      path="portafolio"
      element={<Portafolio />}
    //errorElement={<Error />}
    
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
