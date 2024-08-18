import React from "react";

export default function Nav({ children }) {
    return (
        <ul className="navbar-nav gap-4 fz-22 ff-roboto">
            {children}
        </ul>
    );
}