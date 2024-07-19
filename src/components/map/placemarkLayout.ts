import mark from "../../photos/mark-placemark.png";

import "./style.scss";

const KYKY_ID = "kukuku";

export const getPlacemarkLayout = (ymaps: any, id: string) => {
  if (ymaps) {
    const layout = ymaps.templateLayoutFactory.createClass(
      `<div id=${id} class='mark_placeamark'><img src=${mark} alt='mark-placemark'/><span>▼</span><div class='mark_placeamark__kyky' id=${KYKY_ID}>КУ-КУ</div></div>`,
      {
        build() {
          layout.superclass.build.call(this);
          this.element = document.getElementById(id);
          this.applyElementOffset();
          this.element.addEventListener("click", () => {
            const el = document.getElementById(KYKY_ID);
            if (el) {
              if (el.classList.contains("show")) {
                el.classList.remove("show");
              } else {
                el.classList.add("show");
                setTimeout(() => {
                  el.classList.remove("show");
                }, 1000);
              }
            }
          });
        },
        applyElementOffset() {
          const rootParent =
            this.element.parentElement?.parentElement?.parentElement;
          if (rootParent) {
            rootParent.style.zIndex = "4500";
          }
        },
      }
    );
    return layout;
  }
};
