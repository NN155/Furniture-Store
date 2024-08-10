import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, AboutUs, Shop, ContactUs, Product, Blog, Pages } from "../../pages";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path ="/">
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="product" element={<Product />} />
        <Route path="blog" element={<Blog />} />
        <Route path="pages" element={<Pages />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);





