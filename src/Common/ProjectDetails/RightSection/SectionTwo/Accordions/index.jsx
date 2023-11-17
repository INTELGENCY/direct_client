import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
const data = [
  {
    heading: ` Will there be dedicated applications for the Smart Ball Based Surveillance System in the future?`,
    content: ` Any future dedicated applications will be subject to additional terms and conditions, with details provided upon release.`,
  },
  {
    heading: ` How are modifications and updates handled for the system?`,
    content: ` Modifications and updates may occur to improve system performance. Users are encouraged to stay informed about the latest features and changes.`,
  },
  {
    heading: `What measures are in place for data security and privacy?`,
    content: `Data security and privacy are paramount. Deploying agencies are responsible for adhering to legal and ethical standards in securing and handling collected data.`,
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
