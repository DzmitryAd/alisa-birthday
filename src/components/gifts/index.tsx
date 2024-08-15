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
  {
    title: `${ICON} Kidswood Треугольник пиклера с горкой [12 перекладин]`,
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
    title: `${ICON} Happy Baby Детский пылесос игрушечный вертикальный беспроводной ручной`,
    link: "https://global.wildberries.ru/product?card=178339649",
  },
  {
    title: `${ICON} Игрушечная раковина с водой`,
    link: "https://ozon.ru/t/VnzyP97",
  },
  {
    title: `${ICON} Happy Baby Детский игровой набор для уборки дома, со шваброй и ведром`,
    link: "https://global.wildberries.ru/product?card=200140175",
  },
  {
    title: `${ICON} Gavryusha_Toy Бизиборд Лама для малышей`,
    link: "https://global.wildberries.ru/product?card=209261808",
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
