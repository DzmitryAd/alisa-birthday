import "./style.scss";

const ICON = "🎁";

const CONFIG = [
  // { title: `${ICON} Мольберт для рисования с грифельной доской` },
  {
    title: `${ICON} TODI Стул мягкий для детей`,
    link: "https://global.wildberries.ru/product?card=84348059",
  },
  {
    title: `${ICON} VIG Mart Кукла пупс с соской`,
    link: "https://global.wildberries.ru/product?card=225194264",
  },
  {
    title: `${ICON} Музыкальное интерактивное обучающее пианино с барабаном`,
    link: "https://global.wildberries.ru/product?card=225757519",
  },
  {
    title: `${ICON} Совушка на дереве Мольберт`,
    link: "https://global.wildberries.ru/product?card=37766861",
  },
  {
    title: `${ICON} SUPER DOTS Большие точечные маркеры с раскраской для рисованият`,
    link: "https://global.wildberries.ru/product?card=242642433",
  },
  { title: `${ICON} Сертификат в магазин "Детский мир"` },
  { title: `${ICON} Сертификат в магазин "Zara"` },
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
