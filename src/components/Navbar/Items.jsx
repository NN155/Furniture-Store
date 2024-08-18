import React from "react";
import { OpenContext } from "./Nav";
import { IoMdClose } from "react-icons/io";
export default function Items({ children }) {
    const itemsArray = React.Children.toArray(children);
    const items = itemsArray.map((element) => {
        return (
            <li className="nav-item">
                {element}
            </li>
        );
    });
    const { isOpen, toggle } = React.useContext(OpenContext);
    const className = "navbar-nav navbar-side fz-22 ff-roboto pt-4" + (isOpen ? " open" : "");
    return (
        <>
        <ul className="navbar-nav gap-4 fz-22 ff-montserrat">
            {items}
        </ul>
        <div className={className}>
            <div className="d-flex align-items-center mb-2">
                <h2 className="fz-24 mb-0">Menu</h2>
                <IoMdClose onClick={toggle} className="ms-auto me-4 cursor-pointer"/>
            </div>
            {items}
        </div>
        </>
    );
}