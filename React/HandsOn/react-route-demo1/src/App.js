import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./Pages/home";
import "./App.css";
<<<<<<< HEAD
=======
import Home from "./Pages/home";
>>>>>>> 2cb043374f380c150701ef97bcbe22af3ff2a8ef
import Blogs from "./Pages/blogs";
import Contact from "./Pages/contact";
import NoPage from "./Pages/nopage";
import Layout from "./Pages/layout";
function App() {
  return (
    <>
<<<<<<< HEAD
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
=======
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
>>>>>>> 2cb043374f380c150701ef97bcbe22af3ff2a8ef
}

export default App;
