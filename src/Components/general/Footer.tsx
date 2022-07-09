import React from "react";


const Footer = () =>{
    return(
        <>
            <div className={"col-9  m-auto justify-content-center mt-5"}>
                <div className={"mx-5"}>
                    <h2>
                        Ableton
                    </h2>
                    <div className={"row mt-3"}>
                        <div className={"col-4"}>
                            Register live or push {">"}
                            <br/>
                            About Ableton {">"}
                            <br/>
                            jobs {">"}
                            <div className={"mt-5"}>
                                Register live or push {">"}
                                <br/>
                                About Ableton {">"}
                                <br/>
                                jobs {">"}
                            </div>
                        </div>
                        <div className={"col-4"}>
                            Register live or push {">"}
                            <br/>
                            About Ableton {">"}
                            <br/>
                            jobs {">"}
                            <div className={"mt-5"}>
                                Register live or push {">"}
                                <br/>
                                About Ableton {">"}
                                <br/>
                                jobs {">"}
                            </div>
                        </div>
                        <div className={"col-4"}>
                            Sign up to our newsletter<br/>
                            Enter your email address to stay up to date with the latest offers,<br/>
                            tutorials, downloads, surveys and more.
                            <div className={"mt-4"}>
                                <form className="form-inline">
                                    <div className={"row"}>
                                    <div className="form-group mb-2  col-9">
                                        <input type="email"  className="form-control rounded-0" id="inputPassword2"
                                               placeholder="Enter your email" />
                                    </div>
                                    <div className={"col-3 p-0"}>
                                        <button type="submit" className="btn rounded-0 btn-primary mb-2 w-100">Sign Up</button>
                                    </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Footer;