import React from "react";
import SideBar from "../general/SideBar";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";
import Footer from "../general/Footer"




const About = () =>{
    return(
        <>
            <div className={"p-2"}>
                <SideBar/>
                <FirstPart/>
            </div>
            <SecondPart/>
            <Footer/>
        </>
    )
};

export default About;