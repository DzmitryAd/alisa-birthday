/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import { useRef, useState, useCallback } from "react";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";

import { getPlacemarkLayout } from "./placemarkLayout";
import car from "../../photos/car.png";

import varejka from "../../photos/varejka.png";

import "./style.scss";

const MapUI = () => {
  const [ymaps, setYmaps] = useState(null);
  const mapRef = useRef(null);

  const onMapLoad = useCallback((YMaps: any) => {
    setYmaps(YMaps);
  }, []);

  const placeMark = {
    geometry: [53.8678872, 27.529788],
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
            state={{ center: [53.8678872, 27.529788], zoom: 17 }}
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
              __html: `Дата: 09.09.23 <br> 
                 Время: 14:00 <br>
                 Адрес: ул. Михаила Савицкого 10, Минск <br>
                 <a href='https://www.instagram.com/varezhka_by/' target= _blank>Детский клуб-кофейня "Варежка" <img src=${varejka} alt="varejka" /></a>`,
            }}
          />
          <img className="map_car" src={car} alt="car" />
        </div>
      </YMaps>
    </div>
  );
};

export default MapUI;
