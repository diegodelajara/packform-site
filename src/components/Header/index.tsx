import React from "react";
import Menu from "../Menu/Menu";
import { Headerstyles } from "./Header.style";

type HeaderProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export default function Header({ isMenuOpen, toggleMenu }: HeaderProps) {
  return (
    <Headerstyles>
      <div className="logo">
        <img src={"/images/packform-logo.png"} alt="" width={184} height={32} />
      </div>
      <div className="menu">
        <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </Headerstyles>
  );
}
