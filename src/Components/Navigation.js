import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  let menu;
  if (showMenu) {
    menu = (
      <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
        <span className="font-bold p-3 ">The Menu</span>
        <ul>
          <li>
            <Link
              to="/"
              className="text-blue-500 p-3 border-t border-b block"
              onClick={() => setShowMenu(false)}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/books"
              className="text-blue-500 p-3 border-t border-b block"
              onClick={() => setShowMenu(false)}
            >
              BOOKS
            </Link>
          </li>
          <li>
            <Link
              to="/how-it-works"
              className="text-blue-500 p-3 border-t border-b block"
              onClick={() => setShowMenu(false)}
            >
              HOW IT WORKS
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-blue-500 p-3 border-t border-b block"
              onClick={() => setShowMenu(false)}
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-blue-500 p-3 border-t border-b block"
              onClick={() => setShowMenu(false)}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      {menu}
    </nav>
  );
}

export default Navigation;
