import React, {useState} from "react";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import {MenuOutlined } from '@mui/icons-material';
import "../../assets/css/sidebar.css";



const SideBar = () => {
    const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false)
    const sidebarOptions = ["live","push","link","shop","Pack","More +"]


    return (
        <div className={"sidebar-parent"}>
        <div className="d-flex  mb-3 border-bottom">
            <div className="p-2 ">
                <div className={" d-sm-none  "}>
                    <React.Fragment>
                        <Button onClick={() => {
                            setIsOpenDrawer(true)
                        }}><MenuOutlined className={"text-black"}/> </Button>
                        <Drawer
                            open={isOpenDrawer}
                            onClose={() => {
                                setIsOpenDrawer(false)
                            }}
                        >
                            <div className={"px-5"}>
                                {sidebarOptions.map((item)=>{
                                    return(
                                        <div className={"pt-2"}><Button>{item}</Button></div>
                                    )
                                })}
                            </div>
                        </Drawer>
                    </React.Fragment>
                </div>
            </div>
            {sidebarOptions.map((item)=>{
                return(
                    <div className="p-2 d-none d-sm-block sidebar-md-options ">{item}</div>
                )
            })}
            <div className="ms-auto p-2 d-none d-sm-block">
                <span role='button' className={"text-primary "}>TryLiveforfree</span>
                <span className={"px-1"}>Account</span>
                <span role='button' className={"px-1 text-danger  "}>Logout</span>
            </div>
        </div>
        </div>
    )
}

export default SideBar;