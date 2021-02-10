import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoCloseSharp } from "react-icons/io5"

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const handleToggleMenu = () => {
    setMenuState(!menuState);
  };

  return (
    <div style={{ height: "10vh" }} className="px-10 flex justify-between">
      <div className="flex items-center">
        <Link activeClassName="text-third" href="/">
          <div className="text-4xl cursor-pointer">P.</div>
        </$Link>
      </div>
      <Navbarlink menuState={menuState} setMenuState={setMenuState} />
      <ul className="text-lg items-center hidden md:flex">
        <li>
          <Link activeClassName="a-header" href="/">
            <a className="header mr-5">About</a>
          </$Link>
        </li>
        <li>
          <Link activeClassName="a-header" href="/inventory">
            <a className="header">Menu</a>
          </$Link>
        </li>
        <li>
          <Link activeClassName="a-header" href="/inventory">
            <a className="header">like</a>
          </$Link>
        </li>
        <li>
          <Link activeClassName="a-header" href="/inventory">
            <a className="header">favorit</a>
          </$Link>
        </li>
        <li>
          <Link activeClassName="a-header" href="/inventory">
            <a className="header">Our Store</a>
          </$Link>
        </li>
      </ul>
      <div className="flex items-center md:hidden z-10">
        {menuState ? (
          <IoCloseSharp
            onClick={handleToggleMenu}
            fill="#fff"
            size={26}
            className="menu-close cursor-pointer transition-all"
          />
        ) : (
          <GiHamburgerMenu
            onClick={handleToggleMenu}
            size={23}
            className="cursor-pointer transition-all"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
