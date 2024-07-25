import React from "react";
import "./MenuTabs.scss"
import { text } from "stream/consumers";


interface MenuTabsProps {
  text: string;
}
const MenuTabs: React.FC<MenuTabsProps> = ({ text }) => {
  return (
    <>
      <button className="btn-menu" >{text}</button>
    </>
  );
};

export default MenuTabs;
