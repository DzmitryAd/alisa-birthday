import "./style.scss";

const ICON = "🎁";

const CONFIG = [
  { title: `<s>${ICON} Мольберт для рисования с грифельной доской</s>` },
  {
    title: `<s>${ICON} Стол и стульчик (белого или бежевого цвета)</s>`,
    link: "https://www.wildberries.ru/catalog/84890031/detail.aspx?targetUrl=MS&size=138661201",
  },
  { title: `<s>${ICON} Башня помощница</s>` },
  { title: `${ICON} Бизиборд` },
  { title: `${ICON} Набор Пиклера (треугольник и горка)` },
  { title: `<s>${ICON} Бассейн с шариками (постельных тонов)</s>` },
  {
    title: `<s>${ICON} Набор книжек 1</s>`,
    link: "https://www.wildberries.ru/catalog/42519542/detail.aspx?targetUrl=GP&size=85024832",
  },
  {
    title: `${ICON} Набор книжек 2`,
    link: "https://www.wildberries.ru/catalog/117786531/detail.aspx?targetUrl=GP&size=209796688",
  },
  {
    title: `<s>${ICON} Игрушка каталка</s>`,
    link: "https://www.wildberries.ru/catalog/27771460/detail.aspx?targetUrl=GP&size=63227223",
  },
  { title: `<s>${ICON} Сертификат в магазин "Детский мир"</s>` },
  { title: `<s>${ICON} Сертификат в магазин "Zara"</s>` },
];

const GiftsUI = () => {
  return (
    <div className="gifts">
      <div className="gifts__title">Таааксс. И что же вам мне подарить*</div>
      <div className="gifts__list">
        {CONFIG.map(({ title, link }) => {
          return (
            <div key={title} className="gift">
              <div
                className="gift__title"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              {link ? (
                <a href={link} className="gift__link">
                  ☞ Тык
                </a>
              ) : null}
            </div>
          );
        })}
      </div>
      <div className="gifts__note">
        * Если что то забронировали, из подарка, дайте моим владельцам знать
      </div>
    </div>
  );
};

export default GiftsUI;
