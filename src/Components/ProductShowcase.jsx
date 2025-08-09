import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaRegStar, FaShoppingCart, FaBolt } from "react-icons/fa";
import axios from "../utils/Axios";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/Context";

const ProductShowcase = () => {
    const { id } = useParams(); // ✅ Call at top level
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState("");
    const {addToCart} = useContext(ProductContext);

    useEffect(() => {
        axios.get(`/products/${id}`)
            .then((res) => {
                setProduct(res.data);
                setMainImage(res.data.images[0]); // ✅ Set main image after data
            })
            .catch((err) => console.error(err));
    }, [id]);

    if (!product) {
        return (
            <div className="bg-[#121212] text-white min-h-screen flex items-center justify-center">
                <p>Loading product...</p>
            </div>
        );
    }

    return (
        <div className="text-white ">
            {/* Breadcrumb */}
            <p className="text-sm text-gray-400 mb-4">
                {product.category} /{" "}
                <span className="text-white">{product.title}</span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left - Images */}
                <div className="relative">
                    <img
                        src={mainImage}
                        alt={product.title}
                        className="rounded-2xl w-full object-cover  border border-gray-700"
                    />
                    <div className="flex gap-3 mt-4 absolute bottom-4 right-4">
                        {product.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Thumbnail ${idx}`}
                                onClick={() => setMainImage(img)}
                                className={`w-20 h-20 rounded-xl cursor-pointer border ${
                                    mainImage === img
                                        ? "border-red-500"
                                        : "border-gray-700"
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right - Details */}
                <div className="flex flex-col gap-2">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">
                            {product.title}
                        </h1>
                        <p className="text-gray-400 mb-4">
                            Brand: {product.brand}
                        </p>

                        {/* Rating & Stock */}
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex text-yellow-400">
                                {Array.from({ length: 5 }, (_, i) =>
                                    i < Math.round(product.rating) ? (
                                        <FaStar key={i} />
                                    ) : (
                                        <FaRegStar key={i} />
                                    )
                                )}
                            </div>
                            <p className="text-sm text-gray-400">
                                {product.stock > 0
                                    ? "In Stock"
                                    : "Out of Stock"}
                            </p>
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <p className="text-3xl font-bold">
                                ₹{product.price * 87}
                                <span className="text-red-500 text-lg ml-3">
                                    -{product.discountPercentage}%
                                </span>
                            </p>
                            <p className="text-green-400 text-sm">
                                Free Delivery
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-6">
                            {product.description}
                        </p>

                        {/* Warranty & Shipping */}
                        <div className="mb-6">
                            <p className="text-sm text-gray-400">
                                Warranty: {product.warrantyInformation}
                            </p>
                            <p className="text-sm text-gray-400">
                                Shipping: {product.shippingInformation}
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button onClick={() => addToCart(product)} className="flex items-center gap-2 bg-red-600 hover:bg-red-600/90 px-6 py-3 rounded-xl font-semibold">
                            <FaShoppingCart /> Add to Cart
                        </button>
                        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-600/90 px-6 py-3 rounded-xl font-semibold text-white">
                            <FaBolt /> Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductShowcase;
