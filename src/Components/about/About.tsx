import React from "react";
import SideBar from "../general/SideBar";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";




const About = () =>{
    return(
        <>
            <div className={"p-2"}>
                <SideBar/>
                <FirstPart/>
            </div>
            <SecondPart/>
        </>
    )
};

export default About;