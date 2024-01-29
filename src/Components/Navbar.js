import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    " 아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;

      navigate(`/?q=${keyword}`);
    }
  };

  const Logout = () => {
    setAuthenticate(false);
  };

  return (
    <div>
      <div className="login-button" onClick={goToLogin}>
        <FontAwesomeIcon icon={icon({ name: "user" })} />
        <div className="" onClick={Logout}>
          {authenticate ? "Logout" : "Login"}
        </div>
      </div>
      <div className="nav-section">
        <img
          onClick={goToHome}
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6neCEOC6NNCJ2_iL3O8GzEf0nO9_-Cj4yyUvwYCMuA&s"
          alt=""
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, idx) => (
            <li key={idx}>{menu}</li>
          ))}
        </ul>
        <div className="search-div">
          <FontAwesomeIcon icon={icon({ name: "search" })} />
          <input type="text" onKeyDown={search} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
