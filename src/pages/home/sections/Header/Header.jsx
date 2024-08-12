import React from "react";
import { NavLink } from "react-router-dom";
import { MdHeadphones } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { Button } from "../../../../components";
import { Logo } from "../../../../assets/images";

export function Header() {
    return (
        <header className="header">
            <div className="header-top">
                <div className="d-flex mb-4">
                    <div className="d-flex align-items-center gap-4">
                        <div className="d-flex align-items-center">
                            <MdHeadphones className="fz-30" />
                            <p className="phone-number fz-22 mb-0 ff-roboto color-black fw-500 text-shadow">+91998 654 6583</p>
                        </div>
                        <p className="fz-22 mb-0 ms-4 ff-roboto color-black fst-italic fw-500">Welcome you Benco store!</p>
                    </div>
                    <div className="d-flex ms-auto gap-4">
                        <Button className="ff-montserrat fz-22 fw-bold color-white" style={{ width: "220px", hight: "60px" }}>Currency: USD</Button>
                        <Button className="ff-montserrat fz-22 fw-bold color-black" isFilled style={{ width: "220px", hight: "60px" }}>My Account</Button>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="d-flex">
                    <div className="d-flex align-items-center gap-4">
                        <img src={Logo} alt="Logo" />
                        <div className="navbar">
                            <ul className="navbar-nav d-flex flex-row gap-4 fz-22 ff-roboto">
                                <li className="nav-item">
                                    <NavLink className="nav-link custom-underline" to="">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link custom-underline" to="shop">Shop</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link custom-underline" to="blog">Blog</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link custom-underline" to="about-us">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link custom-underline" to="product">Product</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link custom-underline" to="pages">Pages</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link custom-underline" to="contact-us">Contact Us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex ms-auto gap-4">
                        <IoSearch className="cursor-pointer fz-40 color-gold" />
                        <FiShoppingCart className="cursor-pointer fz-40 color-gold" />
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="container m-0">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6 flex-d aligh-items-center justify-content-center mt-4 ">
                            <h1 className="fz-76 fw-600 color-black ff-roboto">
                                Simple Furniture with <span className="color-gold" style={{ textDecoration: "underline" }}>high-end</span> quality
                            </h1>
                            <p className="fz-22 color-black ff-roboto">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <Button isFilled className="fz-22 fw-bold color-black">Shop Now</Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
