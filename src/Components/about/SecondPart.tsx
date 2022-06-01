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
                <div className={"col-7 secondpart-greenone  "}>
                    <div className={"mt-5 secondpart-img-width h-50 m-auto"}>
                        <img src={first_cmp} className={"img-fluid"}/>
                    </div>
                    <div className={"secondpart-img-width seconpart-base h-50 m-auto"}>
                        <img src={first_cmp} className={"img-fluid"}/>
                    </div>
                </div>
                <div className={"secondpart-overlay col-5"}>
                    <img src={first_cmp} className={"img-fluid secondpart-img w-100 h-100"}/>
                </div>
            </div>
            <div className="row secondpart-max-width mt-5 justify-content-center">
                <div className="col-5 ">
                    <p className={"fw-bold "}>
                        We believe it takes focus to create truly outstanding instruments. We only work on
                        a few products and we strive to make them great.
                    </p>
                    <p>
                        Rather than having a one-size-fits-all process,
                        we try to give our people what they need to work their magic and grow.
                        We’ve learned that achieving the best results comes from building teams that are richly diverse,
                        and thus able to explore problems from a wider set of perspectives.
                        We don’t always agree with each other, but opinion and debate are valued and openly encouraged.
                    </p>
                </div>
                <div className={"mt-5"}>
                    <img src={first_cmp} className={"img-fluid secondpart-img w-75 secondpart-img-center h-100"}/>
                </div>
            <br/>
                <div className="col-5 mt-5">
                    <p className={"fw-bold "}>
                        We’re passionate about what we do, but we’re equally passionate about improving who we are.
                    </p>
                    <p>
                        We work hard to foster an environment where people can grow both personally and professionally,
                        and we strive to create a wealth of opportunities to learn from and with each other.
                        <br/><br/>

                        Alongside an internal training program, employees are actively supported in acquiring new
                        knowledge and skills, and coached on applying these in their daily work. In addition,
                        staff-organized development and music salons are a chance to discuss new technologies,
                        production techniques and best practices.
                    </p>
                </div>
                <div className="row secondpart-max-width mt-5">
                    <div className="col">
                        <img src={first_cmp} className={"img-fluid secondpart-img w-25 test boobs secondpart-img-center h-25"}/>
                        <img src={first_cmp} className={"img-fluid secondpart-img  fuck test secondpart-img-center w-50 h-50"}/>
                    </div>
                    <div className="col-6 seconpart-purple-background" />
                    <div className="col" />
                </div>
                <div className="col-5 mt-5">
                    <p className={"fw-bold "}>
                        We’re passionate about what we do, but we’re equally passionate about improving who we are.
                    </p>
                    <p>
                        We work hard to foster an environment where people can grow both personally and professionally,
                        and we strive to create a wealth of opportunities to learn from and with each other.
                        <br/><br/>

                        Alongside an internal training program, employees are actively supported in acquiring new
                        knowledge and skills, and coached on applying these in their daily work. In addition,
                        staff-organized development and music salons are a chance to discuss new technologies,
                        production techniques and best practices.
                    </p>
                </div>
            </div>
            <div className={"row secondpart-max-width justify-content-center mt-5"}>
                <div className={"col-8 "}>
                        <div className={"row d-flex secondpart-max-width"}>
                            <div className={"col-6 p-0"}>
                                <img src={first_cmp} className={"img-fluid  w-100 p-0 h-100"}/>
                            </div>
                            <div className={"col-6 secondpart-blue-one p-0 "}>
                                <div className="seconpart-blue-parent m-auto ">
                                    <div className="seconpart-blue-child m-auto">
                                        <div>
                                            <p className={"secondpart-white-text m-auto ms-4"}>
                                                We’re really proud of the work we’ve done so far.
                                                But there’s so much<br/>more to come. If you’d like to be a part of it, please join us.
                                            </p>
                                            <p className={"mt-4 secondpart-blue-text ms-4"}>
                                                See latest jobs !
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
};

export default SecondPart;




