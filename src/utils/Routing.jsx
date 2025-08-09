import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Bestoffers from "../Components/Bestoffers";
import Sellwithus from "../Components/Sellwithus";
import Trackorder from "../Components/Trackorder";
import Blog from "../Components/Blog";
import Settings from "../Components/Settings";
import ProductShowcase from "../Components/ProductShowcase";
import CartPage from "../Components/CartPage"

function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductShowcase />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/best-offers" element={<Bestoffers />} />
            <Route path="/sell-with-us" element={<Sellwithus />} />
            <Route path="/track-order" element={<Trackorder />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    );
}

export default Routing;
