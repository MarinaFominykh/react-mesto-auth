import logo from "../../images/logo.svg";

function Header({ incoming, email, handleSignOut }) {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Лого" />
      <div className="header__incoming">
        <p className="header__incoming-email">{email}</p>
        <p onClick={handleSignOut} className="header__incoming-text">{incoming}</p>
      </div>
    </header>
  );
}

export default Header;
