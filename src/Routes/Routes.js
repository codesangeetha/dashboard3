import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import InnerContent from "../Components/InnerContent";
import Admin from "../Components/Admin";
import Sitemobile from "../Components/Sitemobile";
import Testmobile from "../Components/Testmobile";
import Productpage from "../Components/Productpage";
import Cart from "../Components/Cart";
import CheckoutPage from "../Components/CheckoutPage";
import PlaceOrder from "../Components/PlaceOrder";
import Localstorage1 from "../Components/Localstorage1";
import Localstorage2 from "../Components/Localstorage2";


export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<InnerContent />} >
            <Route path="/" element={<Navigate replace to="admin" />} />
            <Route path="admin" element={<Admin />} />
            <Route path="sitemobile" element={<Sitemobile />} />
            <Route path="testmobile" element={<Testmobile />} />
            <Route path="productpage/:id" element={<Productpage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkoutpage" element={<CheckoutPage />} />
            <Route path="placeorder" element={<PlaceOrder />} />
            <Route path="localstorage1" element={<Localstorage1 />} />
            <Route path="localstorage2" element={<Localstorage2 />} />

            </Route>
        </Routes>
    )
}