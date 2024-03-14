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
              <li className="ui-list__item standard-text">
                Оставьте свой номер телефона и адрес электронной почты для того,
                чтобы получить сертификат на сумму 2500₽ на покупки в OZON
              </li>
              <li className="ui-list__item standard-text">
                С 1 марта по 31 марта 2024 года оформляйте кредитную карту «120
                дней без процентов» от Хоум Банка, перейдя по ссылке после
                оставления данных
              </li>
              <li className="ui-list__item standard-text">
                Оплатите картой покупки на сумму от 1000₽
              </li>
              <li className="ui-list__item standard-text">
                Получите сертификат
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="registration" id="form">
        <div className="container">
          <div className="registration__content">
            <div className="registration__form">
              <form className="reg-form js-reg-form">
                <div className="reg-form__row">
                  <div className="reg-form__field">
                    <div className="ui-input">
                      <input
                        id="js-input-phone"
                        className="ui-input__input js-input-phone"
                        name="phone"
                        type="text"
                        placeholder="Номер телефона"
                      />
                      <span className="ui-input__error"></span>
                    </div>
                  </div>
                  <div className="reg-form__field">
                    <div className="ui-input">
                      <input
                        className="ui-input__input js-input-code"
                        name="code"
                        type="text"
                        placeholder="Адрес электронной почты"
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
                      на обработку персональных данных и получение SMS-сообщений
                      от Rafinad.
                    </span>
                  </label>
                  <span className="ui-checkbox__error"></span>
                </div>
                <span className="reg-form__error"></span>
                <div className="how__important">
                  <div className="important__block">
                    <h2 className="important__header">Важно!</h2>
                    <ul className="important__list ui-list">
                      <li className="important__item">
                        Для получения бонуса карта должна быть оформлена на тот
                        же номер, что указан в поле «Номер телефона»
                      </li>
                      <li className="important__item">
                        После нажатия кнопки «Оформить карту», вы будете
                        перенаправлены на анкету, которую необходимо заполнить
                        для получения кредитной карты и бонуса
                      </li>
                      <li className="important__item">
                        При не выполнении всех условий и корректности
                        заполненных данных бонус начислен не будет
                      </li>
                    </ul>
                    <button
                      type="submit"
                      className="reg-form__button ui-button btn-red"
                    >
                      Оформить карту
                    </button>
                  </div>
                  <div className="important__pic">
                    <img
                      className="important__img"
                      src={require("../images/how-pic.webp")}
                      alt=""
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
