import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      {" "}
      <footer className="footer">
        <div className="container">
          <a
            target="_blank"
            rel="noreferrer noopenner"
            href="https://home.pfm.promo/pdf/%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BA%D0%BE%D0%BD%D0%BA%D1%83%D1%80%D1%81%D0%B0.pdf"
          >
            <p className="rules__header">Правила акции</p>
          </a>
          <div>
            Акция действует с 19.03.2024 по 31.03.2024. Участники: физ. лица
            (18+), граждане и резиденты РФ, у которых нет кредитных карт «Хоум
            Банк»; кредитная карта «Хоум Банк» оформлена на rafinad.io;
            сертификат 2500 руб. на Ozon отправляет партнёр в течение 60 дней
            после выполнения участником условий акции. ООО ХКФ Банк. Информация
            актуальна на 19.03.2024. Реклама. По всем вопросам касательно
            отправки сертификата Ozon обращайтесь на{" "}
            <a href="mailto:support@rafinad.io">support@rafinad.io</a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
