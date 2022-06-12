import React from "react";
import "./header.css";
import { IoMdPaw } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { ImFire } from "react-icons/im";
import Search from "./Search";
import DropMenu from "../dropMenu/DropMenu";


function Header({ search, setSearch, dropMenu, setDropMenu }) {
	return (
    <>
      <header className="header">
        <div className="logo">
          <IoMdPaw
            style={{
              fontSize: "36px",
              transform: "rotate(-45deg)",
              margin: "20px",
            }}
          />
        </div>
        <div className="menu">
          <div className="info">
            <div className="name">Drolly Pets</div>
            <Search search={search} setSearch={setSearch} />
            <div className="panels">
              <BsFillTelephoneFill />
              <div className="phone arrow">8-800-55-35-35</div>
              <FaHeart />
              <FaShoppingCart />
              <div className="sign-in">Sing in</div>
              <div className="sign-in__icon">
                <FaUserAlt />
              </div>
            </div>
          </div>
          <ul className="nav">
            <li
              className="nav__item arrow"
              onMouseEnter={() => {
                setDropMenu(!dropMenu);
                // e.currentTarget.classList.toggle("arrow__reverse");
              }}
            >
              <GiShoppingBag />
              Shop
            </li>
            <li className="nav__item">Brands</li>
            <li className="nav__item">Drolly pics</li>
            <li className="nav__item">Holiday shop</li>
            <li className="nav__item">
              <ImFire />
              Hot deals
            </li>
          </ul>
        </div>
      </header>
      <DropMenu dropMenu={dropMenu} setDropMenu={setDropMenu} />
    </>
	);
}

export default Header;
