import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className=" flex justify-center mx-auto text-5xl">
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/" className="">Home</NavLink></li>
                    <li><NavLink to="login" className="">login</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;