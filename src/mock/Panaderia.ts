import { Fotos } from "./types";

import foto1 from "../assets/Panaderia/1.jpg";
import foto2 from "../assets/Panaderia/2.jpg";
import foto3 from "../assets/Panaderia/3.jpg";
import foto4 from "../assets/Panaderia/4.jpg";
import foto5 from "../assets/Panaderia/5.jpg";
import foto6 from "../assets/Panaderia/6.jpeg";
import foto7 from "../assets/Panaderia/7.jpeg";
import foto8 from "../assets/Panaderia/8.jpeg";

export default {
  get Panaderia(): Fotos[] {
    return [
      {
        id: 1,
        url: foto1,
        descripcion: "",
      },
      {
        id: 2,
        url: foto2,
        descripcion: "",
      },
      {
        id: 3,
        url: foto3,
        descripcion: "",
      },

      {
        id: 4,
        url: foto4,
        descripcion: "",
      },
      {
        id: 5,
        url: foto5,
        descripcion: "",
      },
      {
        id: 6,
        url: foto6,
        descripcion: "",
      },
      {
        id: 7,
        url: foto7,
        descripcion: "",
      },
      {
        id: 8,
        url: foto8,
        descripcion: "",
      },
    ];
  },
};
