import React from "react";
import user from "../images/dp.jpg";
import Card from "./Card";
import Body from "./Body";

function Header() {
  return (
    <div>
      <div className="flex flex-align header">
        <img className="user-pic" src={user} alt="User"></img>
        <div>
          <p className="greet">Hello Saransh!👋🏻</p>
          <p className="gray">We hope you're having a great day.</p>
        </div>
      </div>
      <Body />
    </div>
  );
}

export default Header;
