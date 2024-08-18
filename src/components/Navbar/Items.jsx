import React from "react";

export default function Items({ children }) {
    const itemsArray = React.Children.toArray(children);
    const items = itemsArray.map((element) => {
        return (
            <li className="nav-item">
                {element}
            </li>
        );
    });

    return (
        <>
            {items}
        </>
    );
}