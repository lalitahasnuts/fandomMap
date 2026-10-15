import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Timeline from "./pages/Timeline";
import Theories from "./pages/Theories";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="map" element={<Characters />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="theories" element={<Theories />} />
      </Route>
    </Routes>
  )
}

export default App;