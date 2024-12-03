import React from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { Menustyles } from "./Menu.style";
import { FaX } from "react-icons/fa6";
import useGetDimensions from "@/hooks/useGetDimensions";

type MenuProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export default function Menu({ isMenuOpen, toggleMenu }: MenuProps) {
  const { isDesktop } = useGetDimensions();
  return (
    <Menustyles>
      {!isDesktop ? (
        <div className={`menu-handler ${isMenuOpen ? "open" : ""}`}>
          {isMenuOpen ? (
            <FaX size={30} color={"white"} onClick={toggleMenu} />
          ) : (
            <FaBars size={30} color={"white"} onClick={toggleMenu} />
          )}
        </div>
      ) : null}
      <nav className={`menu ${isMenuOpen && !isDesktop ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home">Customer catalog</a>
          </li>
          <li>
            <a href="#services">Team</a>
          </li>
          <li>
            <a href="#contact">Media</a>
          </li>
        </ul>
        <div className="buttons-container">
          <button>Sing up</button>
          <button>
            <FaUser size={15} color={"white"} /> Login
          </button>
        </div>
      </nav>
    </Menustyles>
  );
}
