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
    <Menustyles isDesktop={isDesktop}>
      {!isDesktop ? (
        <div className={`menu-handler ${isMenuOpen ? "open" : ""}`}>
          {isMenuOpen ? (
            <FaX size={30} color={"white"} onClick={toggleMenu} />
          ) : (
            <FaBars size={30} color={"white"} onClick={toggleMenu} />
          )}
        </div>
      ) : null}
    </Menustyles>
  );
}
