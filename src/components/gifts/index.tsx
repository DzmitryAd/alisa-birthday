import "./style.scss";

const ICON = "🎁";

const CONFIG = [
  // { title: `${ICON} Мольберт для рисования с грифельной доской` },
  {
    title: `<s>${ICON} Стул мягкий для детей</s>`,
    link: "https://www.wildberries.by/product?card=84348059",
  },
  {
    title: `<s>${ICON} Кукла пупс с соской</s>`,
    link: "https://www.wildberries.by/product?card=225194264",
  },
  {
    title: `<s>${ICON} Музыкальное интерактивное обучающее пианино с барабаном</s>`,
    link: "https://www.wildberries.by/product?card=225757519",
  },
  {
    title: `${ICON} Совушка на дереве Мольберт`,
    link: "https://www.wildberries.by/product?card=37766861",
  },
  {
    title: `<s>${ICON} Большие точечные маркеры с раскраской</s>`,
    link: "https://www.wildberries.by/product?card=242642433",
  },
  {
    title: `${ICON} Треугольник пиклера с горкой`,
    link: "https://www.wildberries.by/product?card=163275395",
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
    link: "https://www.wildberries.by/product?card=200140175",
  },
  {
    title: `<s>${ICON} Развивающий массажный коврик</s>`,
    link: "https://www.wildberries.by/product?card=66808568",
  },
  {
    title: `<s>${ICON} Тактильная книга</s>`,
    link: "https://www.wildberries.by/product?card=145214559",
  },
  {
    title: `<s>${ICON} Ароматная детская сказка книга</s>`,
    link: "https://www.wildberries.by/product/aromatnaya-detskaya-skazka-kniga-dlya-malyshej-den-rozhdeniya-138633717?option=235584573",
  },
  {
    title: `<s>${ICON} Раскраска для малышей с заданиями</s>`,
    link: "https://www.wildberries.by/product?card=186906975",
  },
  {
    title: `<s>${ICON} Набор для лепки воздушный пластилин</s>`,
    link: "https://www.wildberries.by/product/nabor-dlya-lepki-vozdushnyj-plastilin-211429123?option=338088444",
  },
  {
    title: `<s>${ICON} Развивающая игрушка-тренажер для запуска речи</s>`,
    link: "https://www.wildberries.by/product?card=150252651",
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
