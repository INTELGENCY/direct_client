import { Grid } from "@mui/material";
import IconsHeadings from "../../../../Common/AnimationMui/IconHeadings";
import AccordionStyled from "../../../../Common/AnimationMui/Accordion/AccordionStyled";
function Section({ title, icon }) {
  const arrayDataOne = [
    "Call for Proposals",
    "Submission of Technical and Financial Propsoals",
    "Vetting",
    "Pre-award Formalities",
    "Awarded",
  ];
  const arrayDataTwo = [
    "Contracted",
  ];
  const arrayDataThree = [
    "Milestones",
  ];
  return (
    <Grid container gap={3}>
      <Grid item xs={12}>
        <IconsHeadings text={title} variantHeadings={"h2"} icons={icon} />
      </Grid>
      <Grid item xs={12}>
        {title === "Completed" && (
          <AccordionStyled dataAccordion={arrayDataOne} />
        )}
        {title === "Ongoing" && (
          <AccordionStyled dataAccordion={arrayDataTwo} />
        )}
        {title === "Upcoming" && (
          <AccordionStyled disabled dataAccordion={arrayDataThree} />
        )}
      </Grid>
    </Grid>
  );
}

export default Section;
