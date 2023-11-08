import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import InnerContent from "../Components/InnerContent";
import Admin from "../Components/Admin";
import Sitemobile from "../Components/Sitemobile";
import Testmobile from "../Components/Testmobile";
import Productpage from "../Components/Productpage";


export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<InnerContent />} >
            <Route path="/" element={<Navigate replace to="admin" />} />
            <Route path="admin" element={<Admin />} />
            <Route path="sitemobile" element={<Sitemobile />} />
            <Route path="testmobile" element={<Testmobile />} />
            <Route path="productpage" element={<Productpage />} />

            </Route>
        </Routes>
    )
}