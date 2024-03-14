import React from "react";

export default function Hero() {
  return (
    <React.Fragment>
      {" "}
      <div className="main-banner">
        <div className="container flex">
          <div className="main-banner__content">
            <h1 className="ui-caption main-banner__title">
              Кредитная карта 120 дней без %
            </h1>
            <p className="hero__text standard-text">
              Оформляйте и получайте сертификат
            </p>
            <a
              className="main-banner__button ui-button standard-text"
              href="#form"
            >
              в OZON на 2500₽
            </a>
          </div>
          <div className="main-banner__img">
            <img src={require("../images/hero-pic.webp")} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
