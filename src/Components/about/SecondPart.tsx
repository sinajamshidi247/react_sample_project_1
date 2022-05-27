import React from "react";
import "../../assets/css/secondpart.css";
import first_cmp from "../../assets/images/home/first_cmp.jpg";
import {Varaible} from "../../Help";


const SecondPart = () =>{
    return(
        <>
            <div className={"secondpart-parent d-flex row pt-5 m-0"}>
                <div className={"secondpart-inner h-100 col-5"}>
                    <img src={first_cmp} className={"img-fluid  secondpart-img m-5 col-xs-5"}/>
                </div>
                <div className={"col-7 secondpart-background"}>
                    <img src={first_cmp} className={"img-fluid w-50 m-auto secondpart-back-img d-block align-middle "}/>
                </div>
            </div>
            <div className="row secondpart-max-width mt-5 justify-content-center">
                <div className="col-5 ">
                    <p className={"fw-bold "}>
                      Making music isn’t easy. It takes time, effort, and learning. But <br/> when you’re in the flow,
                        it’s incredibly rewarding.
                    </p>
                    <p>
                        We feel the same way about making Ableton products.
                    The driving force behind Ableton is our passion <br/> for what we make, and the people we make it
                        for.
                    </p>
                    <div className={"mt-5"}>
                        <video width="100%" height="" controls >
                            <source src={Varaible.VIDEO_ADRESS} type="video/mp4"/>
                        </video>
                        <p>
                            Why so Serious- sinajamshidi
                        </p>
                    </div>
                    <div className={"mt-5"}>
                        <p className={"fw-bold "}>
                            We are more than 350 people from 30 different countries divided <br/> between our
                            headquarters in
                            Berlin and our offices in Los Angeles<br/> and Tokyo.
                        </p>
                        <p>
                            Most of us are active musicians, producers, and DJs, and many of us use Live and Push every
                            day.<br/>We come from a wide range of cultural and professional backgrounds. Some of us have
                            PhDs,some are <br/> self-taught, and most of us are somewhere in between. What connects
                            us is the shared <br/> of us has the skills and knowledge to contribute to something big:
                            helping to shape the future of music culture.
                        </p>
                    </div>
                </div>
            </div>
            <div className={"row d-flex secondpart-max-width mt-5"}>
                <div className={"col-7 secondpart-greenone "}>
                    <div className={"d-block mt-5 secondpart-img-width h-50 m-auto"}>
                        <img src={first_cmp} className={"img-fluid"}/>
                    </div>
                    <div className={"d-block secondpart-img-width h-50 m-auto"}>
                        <img src={first_cmp} className={"img-fluid"}/>
                    </div>
                </div>
                <div className={"secondpart-inner h-100 col-5"}>
                    <img src={first_cmp} className={"img-fluid secondpart-img w-100 h-100"}/>
                </div>
            </div>
        </>
    )
};

export default SecondPart;




