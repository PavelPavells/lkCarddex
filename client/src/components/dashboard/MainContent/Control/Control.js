import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getControl } from "../../../../actions/controlActions.js";
import "./Control.scss";
class Control extends Component {
  constructor() {
    super();
    this.state = {
        name: "",
        email: "",
        contact_person: "",
        pass: "",
        isChecked: false
    };
  }
  changeFlag = () => {
      this.setState({ isChecked: true })
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }
  onSubmit = e => {
    e.preventdefault();
    let changeUserData = {
        name: this.state.name,
        email: this.state.email,
        contact_person: this.state.contact_person,
        pass: this.state.pass,
        isChecked: this.changeFlag
    }
    this.props.getControl(changeUserData);
  }
  render() {
    return (
      <div className="main-content">

        {/**-------------------------- SECTION FOR CHANGE PERSON DATA ------------------------------ */}

        <h1>Регистрация пользователя</h1>
        <div className="main-content__main-settings">
          <h3>Добавить нового пользователя</h3>
          <div className="main-content__main-settings-wrapper">
            <p>Добавить нового пользователя Вы можете здесь</p>
            <form
              className="main-content__main-settings-form"
              onSubmit={this.onSubmit}
            >
              <label>
                <div className="auth-label">Имя пользователя</div>
                <input
                  value={this.state.name}
                  onChange={this.onChange}
                  id="name"
                  type="name"
                  className="auth-input main-content__forms"
                />
                <div className="auth-label__description">
                  Изменить имя пользователя Вы можете здесь.
                </div>
              </label>
              <label>
                <div className="auth-label">Контактное лицо</div>
                <input
                  value={this.state.contact_person}
                  onChange={this.onChange}
                  id="contact_person"
                  type="contact-person"
                  className="auth-input"
                />
                <div className="auth-label__description">
                  Изменить контактное лицо Вы можете здесь.
                </div>
              </label>
              <label>
                <div className="auth-label">Пароль</div>
                <input
                  value={this.state.pass}
                  onChange={this.onChange}
                  id="pass"
                  type="pass"
                  className="auth-input main-content__forms"
                />
                <div className="auth-label__description">
                  Изменить пароль Вы можете здесь.
                </div>
              </label>
              <label>
                <div className="auth-label">Email</div>
                <input
                  value={this.state.email}
                  onChange={this.onChange}
                  id="email"
                  type="email"
                  className="auth-input main-content__forms"
                />
                <div className="auth-label__description">
                  Изменить Email Вы можете здесь.
                </div>
              </label>

              <label>
              <div className="auth-label">Администратор</div>
              <input
                value={this.state.isChecked}  
                type="checkbox"
                className="auth-input main-content__forms checkbox"
                onClick={this.changeFlag}
              />
              <div className="auth-label__description">
                Добавить привелегии Админа Вы можете здесь.
              </div>
            </label>
            <label>
              <div className="auth-label">Менеджер</div>
              <input
                value={this.state.isChecked}
                type="checkbox"
                className="auth-input main-content__forms checkbox"
                onClick={this.changeFlag}
              />
              <div className="auth-label__description">
                Добавить привелегии Менеджера Вы можете здесь.
              </div>
            </label>

              <button type="submit" className="auth-button">
                Добавить нового пользователя
              </button>
            </form>
          </div>
        </div>

        {/**-------------------------- CHANGE IN ACCESS ------------------------------ */}

{/*        <h2>Настройки доступа</h2>
        <div className="main-content__main-settings">
          <h3>Изменить настройки доступа</h3>
          <div className="main-content__main-settings-wrapper">
            <p>Изменить настройки доступа личного кабинета</p>
            <form
              className="main-content__main-settings-form"
              onSubmit={this.onSubmit}
            >
              <label>
                <div className="auth-label">Администратор</div>
                <input
                  value={this.state.isChecked}  
                  type="checkbox"
                  className="auth-input main-content__forms checkbox"
                  onClick={this.changeFlag}
                />
                <div className="auth-label__description">
                  Добавить привелегии Админа Вы можете здесь.
                </div>
              </label>
              <label>
                <div className="auth-label">Менеджер</div>
                <input
                  value={this.state.isChecked}
                  type="checkbox"
                  className="auth-input main-content__forms checkbox"
                  onClick={this.changeFlag}
                />
                <div className="auth-label__description">
                  Добавить привелегии Менеджера Вы можете здесь.
                </div>
              </label>
              <button type="submit" className="auth-button">
                Добавить нового пользователя
              </button>
            </form>
          </div>
        </div>
*/}
        {/**-------------------------- END SECTION PERSON DATA ------------------------------ */}

      </div>
    );
  }
}
Control.propTypes = {
  isChecked: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    name: state.name,
    email: state.email,
    contact_person: state.contact_person,
    pass: state.pass,
    isChecked: state.isChecked
});
export default connect(
  mapStateToProps,
  { getControl }
)(Control);
