import React from "react";
import "./Card.css";
import { Stars } from "..";
import { Button } from "..";

export function Card({ imgSrc, description, price, title, rating, className="", ...rest }) {
    const [isHovered, setIsHovered] = React.useState(false);
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
        <div 
            className={`product-card ${className}`}
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            {...rest}
        >
            <div className={`product-card-header hover ${isHovered && "product-card-header-hover"}`}>
                <div className="top">
                    <div className="center">
                        <img src={imgSrc} alt={title} />
                    </div>
                </div>
                <div className="bottom">
                    <div className="title ff-roboto color-black">{title}</div>
                </div>
            </div>
            <Stars rating={rating} className="fz-22" style={{ color: "#FFC600" }} />
            <div className="fz-26 fw-bold ff-roboto color-black text-center mt-2">{price}</div>
            <div className="description text-center ff-roboto color-gray mt-2">{description}</div>
            <Button className="fz-18 fw-bold ff-roboto color-black mt-2 hover" isFilled={isHovered}>Add to cart</Button>
        </div>
    );
}