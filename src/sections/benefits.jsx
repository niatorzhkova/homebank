import React from "react";

export default function Benefits({}) {
  return (
    <React.Fragment>
      {" "}
      <div className="benefits__section">
        <div className="container">
          <div className="main-benefits">
            <div className="benefit-item">
              <img
                className="benefit-item__img"
                src={require("../images/icons/benefits/1.svg").default}
                alt=""
              />
              <p className="benefit-item__title">1000 баллов Польза</p>
              <p className="u-collapse-all">
                за покупки от 1000 рублей (1 балл = 1 рубль)
              </p>
            </div>
            <div className="benefit-item">
              <img
                className="benefit-item__img"
                src={require("../images/icons/benefits/2.svg").default}
                alt=""
              />
              <p className="benefit-item__title">0 ₽</p>
              <p className="u-collapse-all">снятие наличных и обслуживание</p>
            </div>
            <div className="benefit-item">
              <img
                className="benefit-item__img"
                src={require("../images/icons/benefits/3.svg").default}
                alt=""
              />
              <p className="benefit-item__title">18 месяцев</p>
              <p className="u-collapse-all">
                рефинансирование карт других банков без %
              </p>
            </div>
            <div className="benefit-item">
              <img
                className="benefit-item__img"
                src={require("../images/icons/benefits/4.svg").default}
                alt=""
              />
              <p className="benefit-item__title">0 ₽</p>
              <p className="u-collapse-all">Бесплатный выпуск карты</p>
            </div>
          </div>
          <div className="benefits__pic">
            <img src={require("../images/benefits-pic.webp")} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
