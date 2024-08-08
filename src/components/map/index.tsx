/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { useRef, useState, useCallback } from "react";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";

import { getPlacemarkLayout } from "./placemarkLayout";
import car from "../../photos/car.png";

import pugovka from "../../photos/pugovka.png";

import "./style.scss";

const MapUI = () => {
  const [ymaps, setYmaps] = useState(null);
  const mapRef = useRef(null);

  const onMapLoad = useCallback((YMaps: any) => {
    setYmaps(YMaps);
  }, []);

  const placeMark = {
    geometry: [53.942195, 27.459809],
    properties: { hintContent: "Вось тут" },
    modules: ["geoObject.addon.balloon", "geoObject.addon.hint"],
    options: {
      iconLayout: getPlacemarkLayout(ymaps, "mark"),
    },
  };

  return (
    <div className="wrapper">
      <YMaps query={{ lang: "ru_RU" }}>
        <div className="map_title">Буду ждать вас туть</div>
        <div className="map_container">
          <Map
            state={{ center: [53.942195, 27.459809], zoom: 17 }}
            className="map_wrapper"
            // @ts-ignore
            instanceRef={mapRef}
            onLoad={onMapLoad}
            options={{ maxZoom: 18, minZoom: 6 }}
            modules={["templateLayoutFactory", "layout.ImageWithContent"]}
          >
            <Placemark {...placeMark} />
            <ZoomControl
              options={{
                position: { left: "10px", top: "10px" },
                size: "small",
              }}
            />
          </Map>
          <div
            className="map_text"
            dangerouslySetInnerHTML={{
              __html: `Дата: 27.08.24 <br> 
                 Время: 13:00 <br>
                 Адрес: ул. Ратомская 7, Минск <br>
                 Ближе к мероприятию время может изменится <br>
                 Проверяйте обновление <br>
                 <a href='https://www.instagram.com/pugovka_family' target= _blank>Детский клуб-кофейня "Пуговка"</a>`,
            }}
          />
          <img className="map_car" src={car} alt="car" />
        </div>
      </YMaps>
    </div>
  );
};

export default MapUI;
