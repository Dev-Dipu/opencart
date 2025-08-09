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
import ComingSoonCard from "../Components/ComingSoonCard";


function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductShowcase />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/best-offers" element={<ComingSoonCard />} />
            <Route path="/sell-with-us" element={<ComingSoonCard />} />
            <Route path="/track-order" element={<ComingSoonCard />} />
            <Route path="/blog" element={<ComingSoonCard />} />
            <Route path="/settings" element={<ComingSoonCard />} />
        </Routes>
    );
}

export default Routing;
