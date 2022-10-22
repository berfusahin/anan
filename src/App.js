import "./style/App.css"
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Header from "./FH/Header"
import Footer from "./FH/Footer"

import Home from "./pages/Home"
import Search from "./pages/Search"
import Contact from "./pages/Contact"


export default function App () {
    return (
        <>
            <Router> 
                {/* <Header /> */}

                <Routes>
                    {/* <Route path="/" exact element = {<Home />} />
                    <Route path="/search" element = {<Search />} />
                    <Route path="/contact" element = {<Contact />} /> */}
                </Routes> 
                    adfksjdfmd
                {/* <Footer /> */}
            </Router>
        </>
    )
}
