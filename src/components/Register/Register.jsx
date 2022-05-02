import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

import * as Auth from "../../utils/Auth.jsx";
function Register(props) {
  function handleClick() {
    window.location = "/sign-in";
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("123");

  function handleInputEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleInputPassChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister(password, email).catch((err) => {
      console.log("err");
    });
  }
  return (
    <section className="page-incoming">
      <form className="page-incoming__form" onSubmit={handleSubmit}>
        <h2 className="page-incoming__titlee">Регистрация</h2>
        <fieldset className="page-incoming__inputs-container">
          <input
            className="page-incoming__input page-incoming__input_type_email"
            placeholder="Email"
            value={email}
            onChange={handleInputEmailChange}
          ></input>
          <input
            className="page-incoming__input page-incoming__input_type_password"
            placeholder="Пароль"
            value={password}
            onChange={handleInputPassChange}
          ></input>
        </fieldset>
        <button
          type="submit"
          className="page-incoming__submit"
          value="Зарегистрироваться"
        >
          Зарегистрироваться
        </button>
      </form>

      {/* <Link to="sign-in" className="page-incoming__entry register__entry"> Уже зарегистрированы? Войти</Link> */}

      <button
        onClick={handleClick}
        type="submit"
        className="page-incoming__entry register__entry"
      >
        Уже зарегистрированы? Войти
      </button>
    </section>
  );
}
export default Register;


// import React from "react";
// import { Link, withRouter } from 'react-router-dom';
// import * as Auth from '../../utils/Auth.jsx';

// class Register extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//       email: "",
//       password: "",

//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleClick() {
//     window.location = "/sign-in";
//   }

//   handleChange(e) {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   }
//   handleSubmit(e){
//     e.preventDefault();
//     if (this.state.password){
//       const { password, email } = this.state;
//       Auth.register(password, email).then((res) => {
//         if(res){
//           this.setState({
//             message: ''
//           }, () => {
//             window.location = "/sign-in"
//             this.props.history.push('/sign-in');
//           })
//         } else {
//           this.setState({
//             message: 'Что-то пошло не так!'
//           })
//         }
//       });
//     }
//   }
//   render() {
//     return (
//       <section className="page-incoming">
//         <form onSubmit={this.handleSubmit} className="page-incoming__form">
//           <h2 className="page-incoming__titlee">Регистрация</h2>
//           <fieldset className="page-incoming__inputs-container">
//             <input
//               id="email"
//               name="email"
//               type="email"
//               className="page-incoming__input page-incoming__input_type_email"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//             <input
//               id="password"
//               name="password"
//               type="password"
//               className="page-incoming__input page-incoming__input_type_password"
//               placeholder="Пароль"
//               value={this.state.password}
//               onChange={this.handleChange}
//             />
//           </fieldset>
//           <button
//             type="submit"
//             className="page-incoming__submit"
//             value="Зарегистрироваться"
//             onSubmit={this.handleSubmit}
//           >
//             Зарегистрироваться
//           </button>
//         </form>
//         <button onClick={this.handleClick} type='submit' className='page-incoming__entry register__entry'>Уже зарегистрированы? Войти</button>
//         {/* <Link to="/sign-in" className="page-incoming__entry register__entry">
//           Уже зарегистрированы? Войти
//         </Link> */}
//       </section>
//     );
//   }
// }

// export default withRouter(Register);