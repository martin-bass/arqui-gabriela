import { Proyectos } from "../mock/types";

//FotosPortada
import bernal from "../assets/Bernal/12.webp";
import laplata from "../assets/LaPlata/10.webp";
import mirna from "../assets/Mirna/4.webp";
import panaderia from "../assets/Panaderia/9.webp";

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
        obra: "Islas Malvinas",
        portada: mirna,
        url: "mirna",
        description:
          "Cerramiento de esquina sobre línea municipal.\nSe buscó generar un cerramiento visualmente permeable, que se adapte estéticamente a la vivienda, obteniendo como resultado seguridad y una respuesta sensible al entorno.\nMateriales: Ladrillo visto y hierro.",
        fecha: "Febrero 2019",
        fotos: fotosMirna.Mirna,
      },
      {
        id: 2,
        title: "Panadería",
        obra: "El Molino",
        portada: panaderia,
        url: "panaderia",
        description:
          "Restauración integral de  frente en local comercial.\nRenovación de cartelería, diseño gráfico, vereda y  mobiliario exterior.\nEl resultado nace de buscar una estética sencilla y llamativa sobre un edificio existente, utilizando principalmente dorado, blanco y negro en materiales de alta resistencia y duración.",
        fecha: "Febrero 2021",
        fotos: fotosPanaderia.Panaderia,
      },
      {
        id: 3,
        title: "La Plata",
        obra: "La Plata",
        portada: laplata,
        url: "laplata",
        description:
          "Remodelación de vivienda unifamiliar.\nRefuncionalización total de vivienda existente, priorizando la orientación solar favorable y la relación con el exterior. Se mantiene la cáscara de la casa, perforándola para el ingreso de luz cenital, agregando una circulación principal  que une los espacios interiores , siempre en  contacto  con el patio verde interior.\nObra híbrida en construcción tradicional y steel framing.",
        fecha: "Noviembre 2022 / en curso",
        fotos: fotosLaPlata.LaPlata,
      },
      {
        id: 4,
        title: "Bernal",
        obra: "9 de Julio",
        portada: bernal,
        url: "bernal",
        description:
          "Remodelación de cocina comedor en vivienda unifamiliar.\nEl foco del proyecto estuvo en la elección de materiales, utilizando terrazo in situ y enchapado en Guatambú para lograr la integración con los materiales de la vivienda existente (carpinterías de madera y granito).",
        fecha: "Octubre 2020",
        fotos: fotosBernal.Bernal,
      },
    ];
  },
};
