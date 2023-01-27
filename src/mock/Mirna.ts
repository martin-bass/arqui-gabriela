import { Fotos } from "./types";

import foto1 from "../assets/Mirna/1.jpg";
import foto2 from "../assets/Mirna/2.jpg";
import foto3 from "../assets/Mirna/3.jpg";
import foto4 from "../assets/Mirna/4.jpg";
import foto5 from "../assets/Mirna/5.jpg";
import foto6 from "../assets/Mirna/6.jpeg";
import foto7 from "../assets/Mirna/7.jpeg";
import foto8 from "../assets/Mirna/8.jpeg";
import foto9 from "../assets/Mirna/9.jpeg";
import foto10 from "../assets/Mirna/10.jpeg";

export default {
  get Mirna(): Fotos[] {
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
      {
        id: 9,
        url: foto9,
        descripcion: "",
      },
      {
        id: 10,
        url: foto10,
        descripcion: "",
      },
    ];
  },
};
