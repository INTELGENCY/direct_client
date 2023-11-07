import { SwiperSlide } from "swiper/react";
import FlipCardComponent from "./TechnologyCard";
import { styled } from "@mui/material";
import { Factory } from "@mui/icons-material";
import SwiperContainer from "../../../../Common/Containers/SwiperContainer";
import { items } from "./items";

const SwiperGrid = ({ data }) => {
  const SVG = styled("svg")(({ theme }) => ({
    // color: "white",
    height: "40px",
    margin: "auto",
    width: "100%",
  }));

  const object = {
    icon: (
      <SVG>
        <Factory />
      </SVG>
    ),
    label: "Bio Medical Engineering",
  };

  return (
    <div>
      <SwiperContainer
        Modules={["grid", "autoplay", "navigation"]}
        slidesPerView={3}
        // loop
        breakpoints={{
          200: {
            slidesPerView: 1,
            grid: { rows: 3, fill: "row" },
            autoplay: {
              pauseOnMouseEnter: true,
            },
          },

          786: {
            slidesPerView: 2,
            grid: { rows: 3, fill: "row" },
            autoplay: {
              pauseOnMouseEnter: true,
            },
          },
          1024: {
            slidesPerView: 3,
            grid: { rows: 3, fill: "row" },
            autoplay: {
              pauseOnMouseEnter: true,
            },
          },
        }}
      >
        {items?.map((e, i) => {
          return (
            <SwiperSlide key={i} style={{ marginBlock: "1rem", padding: "0" }}>
              <FlipCardComponent data={e} index={i} />
            </SwiperSlide>
          );
        })}
      </SwiperContainer>
    </div>
  );
};

export default SwiperGrid;
