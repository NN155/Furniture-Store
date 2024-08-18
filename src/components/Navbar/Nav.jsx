import React from "react";

const OpenContext = React.createContext();

export default function Nav({ children }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    React.useEffect(() => {
        if (isOpen) {
          document.body.classList.add("fixed-scroll");
        } else {
          document.body.classList.remove("fixed-scroll");
        }
      }, [isOpen]);

    return (
        <OpenContext.Provider value={{toggle, isOpen}}>
            {isOpen && <div className="overlay" onClick={toggle}></div>}
            <div className="navbar">
                {children}
            </div>
        </OpenContext.Provider>
    );
}

export { OpenContext };