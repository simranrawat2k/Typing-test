import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="button">
        <div className="resetIcon">
          <button>
            <i class="fa-solid fa-arrow-rotate-right fa-2xl"></i>
          </button>
        </div>
        <div className="esc">
          <span>esc</span>
          <p>-</p>
          <p>Reset</p>
        </div>
        <div className="wordsNumber">
          <button>10</button>
          <button>50</button>
          <button>80</button>
          <button>100</button>
          <p>-</p>
          <p>Number of words</p>
        </div>
      </div>

      <div className="links">
        <div className="contact">
            <button><i class="fa-brands fa-github"></i></button>
            <button><i class="fa-brands fa-linkedin"></i></button>
            <button><i class="fa-regular fa-envelope"></i></button>
            <button><i class="fa-brands fa-instagram"></i></button>
        </div>

        <div className="theme">
            <select name ="colortheme">
                <option>Darkend-Black</option>
                <option>Coloured-Grey</option>
                <option>Coloured-Pink</option>
                <option>Coloured-Green</option>
                <option>Coloured-Blue</option>
                <option>Lighten-White</option>
                <option>Coloured-Light-Purple</option>
            </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
