import { Grid, Typography, styled, Stack, Box } from "@mui/material";
import { data } from "./data";
import Rightside from "./Rightside.jsx";
import { useEffect, useRef, useState, forwardRef } from "react";
import SimpleBar from "simplebar-react";
import Spinner from "../../../../Common/Spinner";
import { height } from "@mui/system";

const ImageStyled = styled("img")(({ theme }) => ({
  zIndex: -1,
  width: "100%",
  animation: "show32 .34s linear forwards",
  display: "block",
  objectFit: "contain",
  height: "max-content",
  "@keyframes show32": {
    "0%": {
      opacity: 0,
    },

    "100%": {
      opacity: 1,
    },
  },
}));

const SimpleBarStyled = styled(SimpleBar)(({ theme }) => {
  return {
    zIndex: 1,
    color: "white",
    width: "100%",
    paddingInline: "1.2rem",
    paddingBlock: "1rem",

    height: "100%",
    minHeightheight: height,
    boxSizing: "border-box",
    margin: "0px !important",
    "& .simplebar-content": {
      margin: "0px !important",
      padding: "0",
    },

    ["@media screen and (max-width: 1200px)"]: {
      "&": {
        marginTop: "0rem !important",
        width: "100%",
        padding: `1rem 2rem`,
        paddingBottom: "3.5rem",
      },
    },
    ["@media screen and (max-width: 400px)"]: {
      "&": {
        padding: `1rem 1.5rem`,
        paddingBottom: "3.5rem",
      },
    },
  };
});

const GridColor = styled(Grid)(({ theme }) => {
  return {
    background: theme.palette.bg.black,
    paddingBottom: "2rem",
    [theme.breakpoints.down("lg")]: {
      height: "max-content",
    },
  };
});
const GridImage = styled(Grid)(({ theme }) => {
  return {
    [theme.breakpoints.down("lg")]: {
      onder: "-1 !important",
    },
  };
});

const slide = data?.[0];

const BannerCarousel = () => {
  const ref = useRef(null);
  const [height, setHeight] = useState(undefined);

  useEffect(() => {
    const handleresize = (e) => {
      if (ref.current) {
        setHeight(ref.current.getBoundingClientRect().height);
      }
    };

    window.addEventListener("resize", handleresize);

    return () => {
      window.removeEventListener("resize", handleresize);
    };
  }, [ref.current]);
  return (
    <Grid container>
      <GridColor item xs={12} md={12} lg={2.35} xl={2.5} height={height}>
        <SimpleBarStyled>
          <Statement>
            <h2>
              <span>Mission</span>
            </h2>
            <Typography variant="body2">
              Advancing national defence capabilities, promoting innovation, and
              fostering collaboration between academia and the defense sector
            </Typography>
          </Statement>
          <Statement>
            <h2>
              <span>Vision</span>
            </h2>
            <Typography variant="body2">
              Pioneering Excellence in Defense Innovation and National Security
            </Typography>
          </Statement>
        </SimpleBarStyled>
      </GridColor>
      <GridImage item xs={12} md={12} lg={7} xl={6.6} height={height}>
        <GetImage src={slide?.image} ref={ref} setHeight={setHeight} />
      </GridImage>
      <GridColor item xs={12} md={12} lg={2.65} xl={2.9} height={height}>
        <SimpleBarStyled>
          <Rightside height={height} />
        </SimpleBarStyled>
      </GridColor>
    </Grid>
  );
};

const Statement = styled("div")(({ theme }) => {
  return {
    h2: {
      fontSize: "1.7rem",
      span: {
        color: theme.palette.bg.greenDark,
      },
    },
    p: {
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 6,
      lineHeight: "25px",
    },
    [theme.breakpoints.down("lg")]: {
      p: {
        overflow: "visible",
        display: "block",

        maxWidth: 600,
        WebkitLineClamp: 4,
      },
    },
  };
});

const GetImage = forwardRef((props, ref) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = props?.src;

    // Check if the image is already cached (loaded immediately)
    if (image.complete) {
      setIsImageLoaded(true);
    } else {
      // Image is not in cache, so add an event listener for when it loads
      image.addEventListener("load", () => {
        setIsImageLoaded(true);
      });
    }

    // Clean up the event listener when the component unmounts
    return () => {
      image.removeEventListener("load", () => {
        setIsImageLoaded(true);
      });
    };
  }, [props?.src]);
  if (!isImageLoaded) return <Spinner isLoading={true} />;
  return isImageLoaded ? (
    <ImageStyled
      src={props?.src}
      ref={ref}
      alt="Loaded"
      onLoad={(e) => {
        props?.setHeight(e.target.getBoundingClientRect().height);
      }}
    />
  ) : (
    <Box
      sx={{
        minHeight: "100%",
        minWidth: "100%",
        background: "#f7f7f7",
        position: "absolute",
        left: "0",
        top: "0",
        zIndex: -1,
      }}
    />
  );
});

export default BannerCarousel;
