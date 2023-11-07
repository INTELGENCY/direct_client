import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Button, TextField, Typography } from "@mui/material";
import LogoWrapperFull from "../../../../Common/LogoFull";
import { footerItems } from "./FooterItems";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import SectionContainer from "../../../../Common/Containers/SectionContainer";
const FooterContainer = styled("footer")(({ theme }) => ({
  // paddingBlock: theme.palette.appPadding.paddingBlock,
  // paddingInline: theme.palette.appPadding.paddingInline,
  background: theme.palette.bg.white,
}));

const H2 = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.dark,
}));
const GREY = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.grey,
  cursor: "pointer",
}));
const GREYDIV = styled("div")(({ theme }) => ({
  color: theme.palette.text.grey,
  cursor: "pointer",
}));
const GREYDIVA = styled("a")(({ theme }) => ({
  color: theme.palette.text.grey,
  cursor: "pointer",
}));
const GRID = styled(Grid)(({ theme }) => ({
  justifyContent: "",
  rowGap: "2.4rem",
  [theme.breakpoints.up("lg")]: {
    justifyContent: "space-between",
  },
  [theme.breakpoints.between("sm", "md")]: {
    // columnGap: "1rem",
  },
}));
const GridItem = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    // justifyContent: "space-between",
  },
}));
const SendIconStyled = styled(SendIcon)(({ theme }) => ({
  height: "100%",
  backgroundColor: theme.palette.bg.green,
  paddingInline: ".5rem .3rem",
  paddingInlineEnd: ".55rem",
  color: "white",
  fontSize: "2.2rem",
  borderTopRightRadius: 4,
  borderBottomRightRadius: 4,
  cursor: "pointer",
}));
const TextFieldStyled = styled(TextField)(({ theme }) => ({
  width: "320px",
  maxWidth: "100%",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    maxWidth: "100%",
  },
}));
const ImageStyled = styled("img")(({ theme }) => ({
  width: "65px",
  height: "65px",
  [theme.breakpoints.down("md")]: {
    // display: "none",
  },
}));
const StackStyled = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    // display: "none",
    flex: 1,
    minWidth: 300,
  },
  [theme.breakpoints.down("sm")]: {
    flex: 1,
    minWidth: "100%",
  },
}));

const Footer = () => {
  const navigate = useNavigate();
  return (
    <SectionContainer>
      <FooterContainer>
        <Stack
          justifyContent={"space-between"}
          direction={"row"}
          flexWrap={"wrap"}
          alignItems={"center"}
          my={"3rem"}
          mt={"-2rem"} 
          gap={"2rem"}
          paddingBottom={"1.5rem"}
          borderBottom={"2px solid #ACACAC"}
        >
          <Stack direction={"row"} spacing={2} flexWrap={"wrap"} rowGap={3}>
            <ImageStyled src="/assets/pakistanlogo.svg" alt="pakistanlogo" />
            <LogoWrapperFull height={"80px"} width={"80px"} invert green isBr />
          </Stack>
          <StackStyled
            height={40}
            direction={"row"}
            alignItems={"stretch"}
            justifyContent={"flex-end"}
          >
            <TextFieldStyled
              id="outlined-basic"
              variant="outlined"
              placeholder="Subscribe to our mailing list for latest update"
              size="small"
              sx={{
                "& > div": {
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px",
                },
              }}
            />
            <SendIconStyled />
          </StackStyled>
        </Stack>
        <GRID container>
          {footerItems?.map((footerItem, index) => {
            const description = footerItem?.description;
            const list = footerItem?.list;
            return (
              <GridItem
                item
                xs={12}
                sm={6}
                md={3}
                lg={description ? 12 : 1}
                key={index}
              >
                {footerItem?.heading ? (
                  <H2 variant="h2">{footerItem?.heading}</H2>
                ) : null}
                {description
                  ? null
                  : // <GREY marginY={"2.3rem"}>{description}</GREY>
                    null}
                <Stack
                  marginTop={"1rem"}
                  direction={description ? "row" : "column"}
                  gap={"1rem"}
                  alignItems="flex-start"
                >
                  {list?.map((listItem, i) => {
                    const isDoc = listItem?.type === "doc";
                    return isDoc ? (
                      <GREYDIVA href={listItem?.url} fontWeight={"500"} key={i}>
                        {listItem?.label}
                      </GREYDIVA>
                    ) : description ? (
                      <GREYDIV
                        fontWeight={"500"}
                        key={i}
                        onClick={() => {
                          navigate(listItem?.url);
                        }}
                      >
                        {listItem?.label}
                      </GREYDIV>
                    ) : (
                      <GREY
                        fontWeight={"500"}
                        key={i}
                        onClick={() => {
                          navigate(listItem?.url);
                        }}
                      >
                        {listItem?.label}
                      </GREY>
                    );
                  })}
                </Stack>
              </GridItem>
            );
          })}
        </GRID>
      </FooterContainer>
    </SectionContainer>
  );
};

export default Footer;
