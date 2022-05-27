import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Footer from "./Footer";
import About from "../about/About";


const Router = () =>{
    if (window.location.pathname === "/"){
        window.location.href = '/about'
    }
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About />}/>
                <Route path="/Footer" element={<Footer />}/>
            </Routes>
        </BrowserRouter>
    )
};

export default Router