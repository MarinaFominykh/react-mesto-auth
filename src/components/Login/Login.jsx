import { Link } from "react-router-dom";
import React, { useState } from "react";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [inputs, setInputs] = useState({
  //     username: '',
  //     password: '',
  // });
  const [message, setMessage] = useState("123");

  function handleInputEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleInputPassChange(e) {
    setPassword(e.target.value);
  }
  // const handleChange = (e) => {
  //     const {name, value} = e.target;
  //     setInputs((prev) => ({
  //         ...prev,
  //         [name]: value,
  //     }));
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }

    //На видео 1.21
    props.handleLogin(email, password).catch(setMessage);
  };

  return (
    <section className="page-incoming register">
      <form
        onSubmit={handleSubmit}
        className="page-incoming__form register__form"
      >
        <h2 className="page-incoming__title register__title">Вход</h2>
        <fieldset className="page-incoming__inputs-container register__inputs-container">
          <input
            value={email}
            onChange={handleInputEmailChange}
            className="page-incoming__input page-incoming__input_type_email register__input register__input_type_email"
            placeholder="Email"
          ></input>
          <input
            value={password}
            onChange={handleInputPassChange}
            className="page-incoming__input page-incoming__input_type_password register__input register__input_type_password"
            placeholder="Пароль"
          ></input>
        </fieldset>
        <button
          type="submit"
          className="page-incoming__submit register__submit"
        >
          Войти
        </button>
      </form>
    </section>
  );
}
export default Login;
