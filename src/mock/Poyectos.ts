import { Proyectos } from "../mock/types";

//FotosPortada
import bernal from "../assets/Bernal/12.webp";
import laplata from "../assets/LaPlata/10.webp";
import mirna from "../assets/Mirna/5.webp";
import panaderia from "../assets/Panaderia/7.webp";

//Array de fotos
import fotosBernal from "../mock/Bernal";
import fotosLaPlata from "../mock/LaPlata";
import fotosMirna from "../mock/Mirna";

import fotosPanaderia from "../mock/Panaderia";

export default {
  get Projects(): Proyectos[] {
    return [
      {
        id: 1,
        title: "Mirna",
        portada: mirna,
        url: "mirna",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem explicabo fugit iste beatae totam nisi inventore molestias praesentium maxime aspernatur adipisci magnam vel id laboriosam sapiente, nemo, vero suscipit tempora iusto sit distinctio amet quae. Velit voluptas minus laboriosam officiis.",
        fecha: "22/01/2022",
        fotos: fotosMirna.Mirna,
      },
      {
        id: 2,
        title: "Panadería",
        portada: panaderia,
        url: "panaderia",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem explicabo fugit iste beatae totam nisi inventore molestias praesentium maxime aspernatur adipisci magnam vel id laboriosam sapiente, nemo, vero suscipit tempora iusto sit distinctio amet quae. Velit voluptas minus laboriosam officiis.",
        fecha: "01/01/2018",
        fotos: fotosPanaderia.Panaderia,
      },
      {
        id: 3,
        title: "La Plata",
        portada: laplata,
        url: "laplata",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem explicabo fugit iste beatae totam nisi inventore molestias praesentium maxime aspernatur adipisci magnam vel id laboriosam sapiente, nemo, vero suscipit tempora iusto sit distinctio amet quae. Velit voluptas minus laboriosam officiis.",
        fecha: "11/01/2023",
        fotos: fotosLaPlata.LaPlata,
      },
      {
        id: 4,
        title: "Bernal",
        portada: bernal,
        url: "bernal",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem explicabo fugit iste beatae totam nisi inventore molestias praesentium maxime aspernatur adipisci magnam vel id laboriosam sapiente, nemo, vero suscipit tempora iusto sit distinctio amet quae. Velit voluptas minus laboriosam officiis.",
        fecha: "31/01/2023",
        fotos: fotosBernal.Bernal,
      },
    ];
  },
};
