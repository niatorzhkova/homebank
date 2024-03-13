import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";

export default function Header() {
  return (
    <React.Fragment>
      {" "}
      <header className="header">
        <div className="container">
          <div className="header__logo">
            {" "}
            <Logo />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
