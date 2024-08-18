import React from "react";
import { NavLink } from "react-router-dom";
import { MdHeadphones, MdMenu } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { Button, Navbar } from "../../../../components";
import { Logo } from "../../../../assets/images";

export function Header() {
    return (
        <header className="header section-padding">
            <div className="header-top mb-4">
                <div className="d-flex align-items-center gap-4">
                    <div className="d-flex align-items-center">
                        <MdHeadphones className="fz-30" />
                        <p className="phone-number fz-22 mb-0 ff-roboto color-black fw-500 text-shadow">+91998 654 6583</p>
                    </div>
                    <p className="fz-22 mb-0 ms-4 ff-roboto color-black fst-italic fw-500">Welcome you Benco store!</p>
                </div>
                <div className="right-side">
                    <Button className="ff-montserrat fz-22 fw-bold color-white" style={{ width: "220px", hight: "60px" }}>Currency: USD</Button>
                    <Button className="ff-montserrat fz-22 fw-bold color-black" isFilled style={{ width: "220px", hight: "60px" }}>My Account</Button>
                </div>
            </div>
            <div className="header-bottom">
                <div className="d-flex">
                    <div className="d-flex align-items-center gap-4">
                        <img src={Logo} alt="Logo" />
                        <Navbar.Nav>
                            <Navbar.Toggler>
                                <MdMenu />
                            </Navbar.Toggler>
                            <Navbar.Items>
                                <NavLink className="nav-link custom-underline d-inline-block" to="">Home</NavLink>
                                <NavLink className="nav-link custom-underline d-inline-block" to="shop">Shop</NavLink>
                                <NavLink className="nav-link custom-underline d-inline-block" to="blog">Blog</NavLink>
                                <NavLink className="nav-link custom-underline d-inline-block" to="about-us">About Us</NavLink>
                                <NavLink className="nav-link custom-underline d-inline-block" to="product">Product</NavLink>
                                <NavLink className="nav-link custom-underline d-inline-block" to="pages">Pages</NavLink>
                                <NavLink className="nav-link custom-underline d-inline-block" to="contact-us">Contact Us</NavLink>
                            </Navbar.Items>
                        </Navbar.Nav>
                    </div>
                    <div className="d-flex ms-auto gap-4 align-items-center">
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
