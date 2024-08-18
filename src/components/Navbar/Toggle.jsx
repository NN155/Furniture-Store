import React from "react";
import { OpenContext } from "./Nav";

export default function Toggler({children}) {
    const { toggle } = React.useContext(OpenContext);
    return (
        <label className="navbar-toggler" onClick={toggle}>
            { children }
        </label>
    );
}