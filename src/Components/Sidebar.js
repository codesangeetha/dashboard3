import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar(){
    return(
        <div className="sidebar-class">
              <div className="common-class">
                <Link to="/admin">Admin</Link>
            </div>
            <div className="common-class">
                <Link to="/sitemobile">Sitemobile</Link>
            </div>
            <div className="common-class">
                <Link to="/testmobile">Testmobile</Link>
            </div>
            <div className="common-class">
                <Link to="/productpage">Productpage</Link>
            </div>
            <div className="common-class">
                <Link to="/cart">Cart</Link>
            </div>
           
        </div>
    )
}