import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
const data = [
  {
    heading: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
            minus molestiae vel?`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.`,
  },
  {
    heading: `Qui dicta
            minus molestiae vel?`,
    content: `Orem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.`,
  },
];
function Accordions() {
  return (
    <div>
      {data.map((e, i) => (
        <Accordion key={i}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls={`panel${1 + i}}a-content`}
            id={`panel${1 + i}}a-header`}
          >
            <Typography variant="body2">{e.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{e.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default Accordions;
