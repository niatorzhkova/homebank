import React from "react";

export default function How() {
  return (
    <React.Fragment>
      <div className="how-to-get">
        <div className="container">
          <div className="how-to-get__content">
            <h2 className="ui-caption how-to-get__title">
              Как получить 2 500₽ на покупки в OZON?
            </h2>
            <ul className="ui-list">
              <li className="ui-list__item">
                Оставьте свой номер телефона и адрес электронной почты для того,
                чтобы получить сертификат на сумму 2500₽ на покупки в OZON
              </li>
              <li className="ui-list__item">
                С 1 марта по 31 марта 2024 года оформляйте кредитную карту «120
                дней без процентов» от Хоум Банка, перейдя по ссылке после
                оставления данных
              </li>
              <li className="ui-list__item">
                Оплатите картой покупки на сумму от 1000₽
              </li>
              <li className="ui-list__item">Получите сертификат</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="registration" id="form">
        <div className="container">
          <div className="registration__content">
            <h2 className="ui-caption registration__title">Регистрация</h2>
            <p>
              Оставьте номер телефона, чтобы мы могли <br></br> отправить вам
              сертификат <b>ЗОЛОТОЕ ЯБЛОКО</b>.
            </p>
            <p>
              Оформите дебетовую карту «Мир» на сайте Газпромбанка, мы
              перенаправим вас туда автоматически.{" "}
            </p>
            <p>
              Совершите первую покупку, чтобы получить сертификат по указанному
              номеру.
            </p>

            <div className="registration__form">
              <form className="reg-form js-reg-form">
                <div className="reg-form__row">
                  <div className="reg-form__field">
                    <div className="ui-input">
                      <span className="ui-input__title">Промокод</span>
                      <input
                        className="ui-input__input js-input-code"
                        name="code"
                        type="text"
                      />
                      <span className="ui-input__error"></span>
                    </div>
                  </div>
                  <div className="reg-form__field">
                    <div className="ui-input">
                      <span className="ui-input__title">Номер телефона</span>
                      <input
                        id="js-input-phone"
                        className="ui-input__input js-input-phone"
                        name="phone"
                        type="text"
                      />
                      <span className="ui-input__error"></span>
                    </div>
                  </div>
                </div>
                <div className="ui-checkbox reg-form__agree">
                  <label className="ui-checkbox__label">
                    <input
                      type="checkbox"
                      className="js-checkbox"
                      value="agree"
                    />
                    <span className="ui-checkbox__box"></span>
                    <span className="ui-checkbox__text">
                      Я&nbsp;даю{" "}
                      <a
                        href="https://rafinad.io/download-file/privacy_policy"
                        target="_blank"
                      >
                        согласие
                      </a>{" "}
                      на&nbsp;обработку персональных данных
                    </span>
                  </label>
                  <span className="ui-checkbox__error"></span>
                </div>
                <span className="reg-form__error"></span>
                <button type="submit" className="reg-form__button ui-button">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
