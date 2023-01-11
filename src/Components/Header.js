import React from "react";
import { ProSidebarProvider, Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
    return (
        <div>
            <ProSidebarProvider>
                <Sidebar id="sidebar" >
                    <Menu className="menu">
                        <MenuItem> <h4>Student Teacher</h4></MenuItem>
                        <hr></hr>
                        <MenuItem><Link to="/preview/dashboard">Dashboard</Link>  </MenuItem>
                        <hr></hr>
                        <MenuItem> <Link to="/preview/table">Data</Link></MenuItem>
                        <hr></hr>
                    </Menu>
                </Sidebar>
            </ProSidebarProvider>
        </div>
    )
}

export default Header;
