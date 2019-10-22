import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPriceList } from "../../../../actions/priceListActions.js";
import "./PriceList.scss";
class PriceList extends Component {
  constructor() {
    super();
    this.state = {
      item_short_name: "",
      price: 0,
      priceList: [
        {
          itype_name: "Турникеты и электронные проходные",
          item_article: "AA987",
          item_name: "Электронная проходная STR-02SNE",
          currency_desc: "RUB",
          price: 60410
        },
        {
          itype_name: "Турникеты и электронные проходные",
          item_article: "BB786",
          item_name: "Электронная проходная STR-02SNFM",
          currency_desc: "RUB",
          price: 78130
        },
        {
          itype_name: "Шлагбаумы",
          item_article: "BF899",
          item_name: "Шлагбаум автоматический  CARDDEX RBA-100ALNPV",
          currency_desc: "RUB",
          price: 55470
        },
        {
          itype_name: "Шлагбаумы",
          item_article: "34VB4",
          item_name: "Шлагбаум автоматический  CARDDEX RBA-100AGP",
          currency_desc: "RUB",
          price: 42070
        },
        {
          itype_name: "Сопутствующая продукция ШЛ",
          item_article: "AA756",
          item_name: "Стрела 3м D50 стенка 1,5 гибкий неон",
          currency_desc: "RUB",
          price: 8490
        },
        {
          itype_name: "Турникеты и электронные проходные",
          item_article: "AA987",
          item_name: "Электронная проходная STR-02SNE",
          currency_desc: "RUB",
          price: 60410
        },
        {
          itype_name: "Турникеты и электронные проходные",
          item_article: "BB786",
          item_name: "Электронная проходная STR-02SNFM",
          currency_desc: "RUB",
          price: 78130
        },
        {
          itype_name: "Шлагбаумы",
          item_article: "BF899",
          item_name: "Шлагбаум автоматический  CARDDEX RBA-100ALNPV",
          currency_desc: "RUB",
          price: 55470
        },
        {
          itype_name: "Шлагбаумы",
          item_article: "34VB4",
          item_name: "Шлагбаум автоматический  CARDDEX RBA-100AGP",
          currency_desc: "RUB",
          price: 42070
        },
        {
          itype_name: "Сопутствующая продукция ШЛ",
          item_article: "AA756",
          item_name: "Стрела 3м D50 стенка 1,5 гибкий неон",
          currency_desc: "RUB",
          price: 8490
        },
        {
          itype_name: "Турникеты и электронные проходные",
          item_article: "AA987",
          item_name: "Электронная проходная STR-02SNE",
          currency_desc: "RUB",
          price: 60410
        },
        {
          itype_name: "Турникеты и электронные проходные",
          item_article: "BB786",
          item_name: "Электронная проходная STR-02SNFM",
          currency_desc: "RUB",
          price: 78130
        },
        {
          itype_name: "Шлагбаумы",
          item_article: "BF899",
          item_name: "Шлагбаум автоматический  CARDDEX RBA-100ALNPV",
          currency_desc: "RUB",
          price: 55470
        },
        {
          itype_name: "Шлагбаумы",
          item_article: "34VB4",
          item_name: "Шлагбаум автоматический  CARDDEX RBA-100AGP",
          currency_desc: "RUB",
          price: 42070
        },
        {
          itype_name: "Сопутствующая продукция ШЛ",
          item_article: "AA756",
          item_name: "Стрела 3м D50 стенка 1,5 гибкий неон",
          currency_desc: "RUB",
          price: 8490
        },
        {
          itype_name: "Турникеты и электронные проходные",
          item_article: "AA987",
          item_name: "Электронная проходная STR-02SNE",
          currency_desc: "RUB",
          price: 60410
        },
        {
          itype_name: "Турникеты и электронные проходные",
          item_article: "BB786",
          item_name: "Электронная проходная STR-02SNFM",
          currency_desc: "RUB",
          price: 78130
        },
        {
          itype_name: "Шлагбаумы",
          item_article: "BF899",
          item_name: "Шлагбаум автоматический  CARDDEX RBA-100ALNPV",
          currency_desc: "RUB",
          price: 55470
        },
        {
          itype_name: "Шлагбаумы",
          item_article: "34VB4",
          item_name: "Шлагбаум автоматический  CARDDEX RBA-100AGP",
          currency_desc: "RUB",
          price: 42070
        },
        {
          itype_name: "Сопутствующая продукция ШЛ",
          item_article: "AA756",
          item_name: "Стрела 3м D50 стенка 1,5 гибкий неон",
          currency_desc: "RUB",
          price: 8490
        },
        {
          itype_name: "Турникеты и электронные проходные",
          item_article: "AA987",
          item_name: "Электронная проходная STR-02SNE",
          currency_desc: "RUB",
          price: 60410
        },
        {
          itype_name: "Турникеты и электронные проходные",
          item_article: "BB786",
          item_name: "Электронная проходная STR-02SNFM",
          currency_desc: "RUB",
          price: 78130
        },
        {
          itype_name: "Шлагбаумы",
          item_article: "BF899",
          item_name: "Шлагбаум автоматический  CARDDEX RBA-100ALNPV",
          currency_desc: "RUB",
          price: 55470
        },
        {
          itype_name: "Шлагбаумы",
          item_article: "34VB4",
          item_name: "Шлагбаум автоматический  CARDDEX RBA-100AGP",
          currency_desc: "RUB",
          price: 42070
        },
        {
          itype_name: "Сопутствующая продукция ШЛ",
          item_article: "AA756",
          item_name: "Стрела 3м D50 стенка 1,5 гибкий неон",
          currency_desc: "RUB",
          price: 8490
        },
        {
          itype_name: "Турникеты и электронные проходные",
          item_article: "AA987",
          item_name: "Электронная проходная STR-02SNE",
          currency_desc: "RUB",
          price: 60410
        },
        {
          itype_name: "Турникеты и электронные проходные",
          item_article: "BB786",
          item_name: "Электронная проходная STR-02SNFM",
          currency_desc: "RUB",
          price: 78130
        },
        {
          itype_name: "Шлагбаумы",
          item_article: "BF899",
          item_name: "Шлагбаум автоматический  CARDDEX RBA-100ALNPV",
          currency_desc: "RUB",
          price: 55470
        },
        {
          itype_name: "Шлагбаумы",
          item_article: "34VB4",
          item_name: "Шлагбаум автоматический  CARDDEX RBA-100AGP",
          currency_desc: "RUB",
          price: 42070
        },
        {
          itype_name: "Сопутствующая продукция ШЛ",
          item_article: "AA756",
          item_name: "Стрела 3м D50 стенка 1,5 гибкий неон",
          currency_desc: "RUB",
          price: 8490
        }
      ]
    };
  }
  onChange = e => {
    this.setState({ [e.target.class]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const changePriceList = {
      item_name: this.state.item_name,
      price: this.state.price
    };
    this.props.getPriceList(changePriceList);
  };
  render() {
    //const {itype_name, item_article, item_short_name, currensy_desc, price} = this.state;
    return (
      <div className="main-content">
        <div className="main-content__account-wrapper">
          <h1>Прайс-лист</h1>
          <div className="wrapper-price">
            <div className="wrapper-price__header-item">
              <div id="header-item__itype-name">
                <h3>Тип</h3>
                {this.state.priceList.map(item => (
                  <>
                    <div className="header-item">{item.itype_name}</div>
                  </>
                ))}
              </div>
              <div id="header-item__item-article">
                <h3>Артикул</h3>
                {this.state.priceList.map(item => (
                  <>
                    <div className="header-item">{item.item_article}</div>
                  </>
                ))}
              </div>
              <div id="header-item__item-name">
                <h3>Наименование</h3>
                {this.state.priceList.map(item => (
                  <>
                    {/* <input type="text"> */}
                    <div className="header-item">{item.item_name}</div>
                  </>
                ))}
              </div>
              <div id="header-item__currency-desc">
                <h3>Валюта</h3>
                {this.state.priceList.map(item => (
                  <>
                    <div className="header-item">{item.currency_desc}</div>
                  </>
                ))}
              </div>
              <div id="header-item__price">
                <h3>Цена</h3>
                {this.state.priceList.map(item => (
                  <>
                    <div className="header-item">{item.price}</div>
                  </>
                ))}
              </div>
              <div id="header-item-input">
                <h3>Ваша цена</h3>
                {this.state.priceList.map((item, key) => (
                  <>
                    <div className="header-item-input">
                      <input
                        type="text"
                        key={item.key}
                        value={this.state.priceList.price}
                      />
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="wrapper-auth-button__price-list">
            <button className="auth-button__price-list">Сохранить</button>
          </div>
        </div>
      </div>
    );
  }
}
PriceList.propTypes = {
  priceList: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  priceList: state.priceList,
  item_short_name: state.item_name,
  price: state.price
});
export default connect(
  mapStateToProps,
  { getPriceList }
)(PriceList);
