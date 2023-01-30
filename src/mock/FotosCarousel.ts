import { Fotos } from "./types";

import foto1 from "../assets/LaPlata/5.webp";
import foto2 from "../assets/LaPlata/9.webp";
import foto3 from "../assets/LaPlata/14.webp";

export default {
  get FotosCarousel(): Fotos[] {
    return [
      {
        id: 1,
        url: foto1,
        descripcion: "Descripcion 1",
      },
      {
        id: 2,
        url: foto2,
        descripcion: "Descripcion 2",
      },
      {
        id: 3,
        url: foto3,
        descripcion: "Descripcion 3",
      },
    ];
  },
};
