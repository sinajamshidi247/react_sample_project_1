import React from "react";
import first_cmp from "../../assets/images/home/first_cmp.jpg"
import "../../assets/css/first_part.css";

const FirstPart = () =>{
    return(
        <div className={"p-2"}>
            <div>
                <span className={"text-danger px-3"}>
                    about
                </span>
                <span className={"px-2"}>
                    job
                </span>
            </div>
            <div className={"w-50 m-auto firstpart_img_container mt-2  "}>
                <img src={first_cmp} className={"img-fluid mx-auto"}/>
                <h1 className="firstpart_img text-danger">Test</h1>
            </div>
            <div className={"w-25 m-auto firstpart_img_container mt-5"}>
                <p className={"firstpart_bold_text"}>We make <span className={"text-primary"}>Live</span>,
                    <span className={"text-primary"}> Push</span> and <span className={"text-primary"}>
                    Link</span> — unique software and hardware for music creation and performance. With these products,
                    our community of users creates amazing things.</p>
                <p>
                    Ableton was founded in 1999 and released the first version of Live in 2001.
                    Our products are used by a community of dedicated musicians,
                    sound designers, and artists from across the world.
                </p>
            </div>
        </div>
    )
};

export default FirstPart