import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//import Auth from "./Auth0";
import { loginUser,  loginSuccessAuth0 } from "../../actions/authActions";
import "./Auth.scss";

//const auth = new Auth();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      pass: this.state.pass
    };
    this.props.loginUser(userData);
  };
  //fillDemoEmail = () => {
  //  this.setState({ email: "test@test.com" });
  //};
  //fillDemoPassword = () => {
  //  this.setState({ pass: "test123" });
  //};
  render() {
    const { errors } = this.state;
    //const { login } = this.props.auth0;
    return (
      <div className="wrapper">
        <div className="header-logo">
          <img src="../../img/carddex_logo.png" alt="" />
        </div>
        <div className="base-wrapper">
          <div className="main-paragraph">
            <h1>Личный кабинет Карддекс</h1>
            <h3>Личный кабинет партнеров и дилеров Карддекс</h3>
            <p>
              Войдите или зарегистрируйтесь для получения всей доступной
              информации по продуктам Карддекс, вашим заказам, скидкам и
              предложениям.
            </p>
          </div>
          <div className="wrapper-separator"></div>
          <div className="wrapper-auth">
            <div className="wrapper-auth__header">
              <Link to="/" className="link-login active">
                Вход
              </Link>
              <Link to="/register" className="link-register">
                Регистрация
              </Link>
            </div>
            <form className="auth-form" noValidate onSubmit={this.onSubmit}>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Email</div>
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    className="auth-input"
                  />
                  <div className="auth-error">
                    {errors.email}
                    {errors.emailnotfound}
                  </div>
                </label>
              </div>
              <div className="auth-group">
                <label>
                  <div className="auth-label">Пароль</div>
                  <input
                    onChange={this.onChange}
                    value={this.state.pass}
                    error={errors.pass}
                    id="pass"
                    type="pass"
                    className="auth-input"
                  />
                  <div className="auth-error">
                    {errors.pass}
                    {errors.passwordincorrect}
                  </div>
                </label>
              </div>
              <div className="auth-password__ask">
                <label>
                  <input type="checkbox" /> Запомнить меня
                </label>
                <a
                  href="https://yandex.ru"
                  className="auth-group__ask-password"
                >
                  Забыли пароль?
                </a>
              </div>
              <div className="auth-condition">
                <span>Нажимая кнопку "Войти", вы принимаете</span>
                <a
                  href="https://yandex.ru"
                  className="auth-conditon__confidiency"
                >
                  Условия "Политики Конфиденциальности"
                </a>
              </div>
              <div>
                <button type="submit" className="auth-button">
                  Войти
                </button>
              </div>
{/*
              <div onClick={() => auth.login()} className="wrapper-auth0">
                <div className="google-auth0"></div>
                {/*<div className="ok-auth0"></div>
              </div>
*/}
            </form>
          </div>
        </div>
        <div className="footer">
          <div className="footer-copy">
            <h1>Copyright 2019 &copy; CARDDEX</h1>
            <p>Информация на сайте не является публичной офертой</p>
          </div>
          <div className="footer-phone">
            <img src="../../img/call.png" alt="" />
            <div className="footer-phone__number">
              <h1>8 (800) 333-93-36</h1>
              <h1>8 (499) 64-333-69</h1>
            </div>
          </div>
          <div className="footer-email">
            <img src="../../img/email.png" alt="" />
            <h1>help@carddex.ru</h1>
          </div>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  auth0: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  auth0: state.auth0,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser, loginSuccessAuth0 }
)(Login);
