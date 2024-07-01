import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navElem = ["home", "movies", "series"];

  return (
    <nav className="flex justify-between content-center text-lg p-3 rounded-lg bg-bprimary my-10">
      <h1>LOGO</h1>
      <ul className="flex justify-center content-center gap-6 uppercase">
        {navElem.map((e, i) => {
          return (
            <li key={i} >
              <NavLink to={e == 'home' ? '/' : e} className={({isActive}) => isActive ?  'bg-bsecondary rounded-md px-3 py-2': ''}>
                {e}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
