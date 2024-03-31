import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './assets/Header.jsx'
import Footer from './assets/Footer.jsx'
import Mitglied from './pages/mitglied.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Homewebpage from "./pages/homewebpage.jsx";
import Spenden from "./pages/spenden.jsx";
import Shop from "./pages/shop.jsx";
import Informationen from './pages/informationen.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homewebpage />} />
          <Route path="mitglied"element={<Mitglied />} />
          <Route path="spenden"element={<Spenden />} />
          <Route path="shop"element={<Shop />} />
          <Route path="informationen"element={<Informationen />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
  </React.StrictMode>,
)
