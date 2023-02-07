import { useState } from "react";

import { Stack, Image, Box } from "@chakra-ui/react";

//Animate CSS
import "animate.css";

//Masonry
import Masonry from "react-masonry-css";
import "../styles/Masonry.css";

//FotosHome
import foto1 from "../assets/Home/1.jpg";
import foto2 from "../assets/Home/2.jpg";
import foto3 from "../assets/Home/3.jpg";
import foto4 from "../assets/Home/4.jpg";
import foto5 from "../assets/Home/5.jpg";
import foto6 from "../assets/Home/6.jpg";
import foto7 from "../assets/Home/7.jpg";
import foto8 from "../assets/Home/8.jpg";
import foto9 from "../assets/Home/9.jpg";
import foto10 from "../assets/Home/10.jpg";

//Cards para el Home
const fotosHome = [
  { id: 1, foto: foto1, hover: false },
  { id: 6, foto: foto6, hover: false },
  { id: 2, foto: foto2, hover: false },
  { id: 3, foto: foto3, hover: false },
  { id: 4, foto: foto4, hover: false },
  { id: 9, foto: foto9, hover: false },
  { id: 7, foto: foto7, hover: false },
  { id: 5, foto: foto5, hover: false },
  { id: 10, foto: foto10, hover: false },
  { id: 8, foto: foto8, hover: false },
];

type Props = {
  className?: string;
};

function Home() {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  const [_isHovering, setIsHovering] = useState({});

  const handleMouseOver = (id: number) => {
    const imgFound = fotosHome.filter((img) => img.id === id);
    imgFound[0].hover = true;
    setIsHovering(imgFound);
  };

  const handleMouseOut = (id: number) => {
    const imgFound = fotosHome.filter((img) => img.id === id);
    imgFound[0].hover = false;
    setIsHovering(imgFound);
  };

  return (
    <Stack
      paddingTop={100}
      px={20}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="100"
    >
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {fotosHome?.map((f) => (
          <Box margin={4}key={f.id} >
            <Image
              key={f.id}
              src={f.foto}
              h={"auto"}
              onMouseOver={() => handleMouseOver(f.id)}
              onMouseOut={() => handleMouseOut(f.id)}
              className={
                f.hover
                  ? "animate__animated animate__pulse animate__infinite	infinite animate__low"
                  : ""
              }
            />
          </Box>
        ))}
      </Masonry>
    </Stack>
  );
}

export default Home;
