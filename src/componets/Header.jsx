import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="mx-auto text-5xl">
            <NavLink to="/" className="btn">Home</NavLink>
            <NavLink to="login" className="btn">login</NavLink>
        </div>
    );
};

export default Header;