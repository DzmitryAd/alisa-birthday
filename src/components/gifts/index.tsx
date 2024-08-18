import "./style.scss";

const ICON = "🎁";

const CONFIG = [
  // { title: `${ICON} Мольберт для рисования с грифельной доской` },
  {
    title: `${ICON} Стул мягкий для детей`,
    link: "https://global.wildberries.ru/product?card=84348059",
  },
  {
    title: `<s>${ICON} Кукла пупс с соской</s>`,
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
    title: `${ICON} Большие точечные маркеры с раскраской`,
    link: "https://global.wildberries.ru/product?card=242642433",
  },
  {
    title: `${ICON} Треугольник пиклера с горкой`,
    link: "https://global.wildberries.ru/product?card=163275395",
  },
  {
    title: `${ICON} Сухой бассейн`,
    link: "https://docs.google.com/document/d/17OWGozu51OM_MxtwOjOYIC-rr6jMQlX_wsCViXeAaag/edit?usp=sharing",
  },
  {
    title: `${ICON} Детский столик`,
    link: "https://docs.google.com/document/d/1fo3IIreBG3OajJ66fTyioGy0GGQGd7PGslLNRjZ53cI/edit?usp=sharing",
  },
  {
    title: `${ICON} Детский пылесос`,
    link: "https://ozon.ru/t/2MMqwZg",
  },
  {
    title: `<s>${ICON} Игрушечная раковина</s>`,
    link: "https://ozon.ru/t/VnzyP97",
  },
  {
    title: `${ICON} Детский игровой набор для уборки дома`,
    link: "https://global.wildberries.ru/product?card=200140175",
  },
  {
    title: `<s>${ICON} Развивающий массажный коврик</s>`,
    link: "https://global.wildberries.ru/product?card=66808568",
  },
  {
    title: `${ICON} Тактильная книга`,
    link: "https://global.wildberries.ru/product?card=145214559",
  },
  {
    title: `${ICON} Ароматная детская сказка книга`,
    link: "https://global.wildberries.ru/product?card=138633717",
  },
  {
    title: `<s>${ICON} Раскраска для малышей с заданиями</s>`,
    link: "https://global.wildberries.ru/product?card=186906975",
  },
  {
    title: `${ICON} Набор для лепки воздушный пластилин`,
    link: "https://global.wildberries.ru/product?card=211429123",
  },
  {
    title: `${ICON} Развивающая игрушка-тренажер для запуска речи`,
    link: "https://global.wildberries.ru/product?card=150252651",
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
