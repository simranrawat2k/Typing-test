import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <h1>TypeCat</h1>
        <i class="fa-solid fa-keyboard"></i>
      </div>
      <div className="login-btn">
        <button>
          <i class="fa-solid fa-user"></i>
        </button>
      </div>
    </div>
  );
};

export default Header;
