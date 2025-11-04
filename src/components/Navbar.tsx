import React from "react";
import { Link } from "react-router-dom";
import { logo, menu, close } from "../assets/index.js";
import { navLinks } from "../constants/index.js";
import { styles } from "../styles.ts";

export default function Navbar() {
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          {/* <img src={logo} alt="logo"  className='w-9 h-9 object-contain' /> */}
          <p className="text-white text-[18px] font-bold cursor-pointer flex" >
            Jiamin &nbsp;
            <span>| Front-End Developer</span>
          </p>
        </Link>
        <ul>
          {navLinks.map((nav: { id: string; title: string }) => (
            <li key={nav.id}>
              <Link to={nav.id}>{nav.title}</Link>
            </li>
          ))}
        </ul>
        {/* for mobile screen */}
        <div>
          <img src={close} />
          <div>
            <ul>
              {navLinks.map((nav: { id: string; title: string }) => (
                <li key={nav.id}>
                  <Link to={nav.id}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
