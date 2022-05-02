import logo from "../../images/logo.svg";
import { useLocation } from "react-router-dom";

function Header({ email, handleText }) {
  const location = useLocation();
  const getText = () => {
    if (location.pathname === "/sign-in") return "Регистрация";
    else if (location.pathname === "/sign-up") return "Войти";
    else return "Выйти";
  };

  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Лого" />
      <div className="header__incoming">
        <p className="header__incoming-email">{email}</p>
        <p onClick={handleText} className="header__incoming-text">
          {getText()}
        </p>
      </div>
    </header>
  );
}

export default Header;
