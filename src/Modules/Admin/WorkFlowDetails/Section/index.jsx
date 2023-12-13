import { Grid } from "@mui/material";
import IconsHeadings from "../../../../Common/AnimationMui/IconHeadings";
import { BubbleChart } from "@mui/icons-material";
import { customTheme } from "../../../../Theme/theme";
import AccordionStyled from "../../../../Common/AnimationMui/Accordion/AccordionStyled";
function Section({ title, icon }) {
  return (
    <Grid container gap={3}>
      <Grid item xs={12}>
        <IconsHeadings text={title} variantHeadings={"h2"} icons={icon} />
      </Grid>
      <Grid item xs={12}>
        <AccordionStyled />
      </Grid>
    </Grid>
  );
}

export default Section;
