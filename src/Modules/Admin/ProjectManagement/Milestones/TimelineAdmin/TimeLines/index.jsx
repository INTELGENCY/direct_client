import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Grid, Stack, Typography } from "@mui/material";
function TimeLines() {
  return (
    <>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {Array(2)
          .fill(null)
          .map(() => (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: "#24B56F", p: 0.6 }} />
                <TimelineConnector sx={{ backgroundColor: "#24B56F" }} />
              </TimelineSeparator>
              <TimelineContent>
                <TimeLineContent name={"safdasdf"} />
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline>
    </>
  );
}

export default TimeLines;
const TimeLineContent = ({ name }) => {
  return (
    <Grid container gap={1}>
      <Grid item xs={12}>
        <Typography variant="h3" fontWeight={600}>
          Title
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Stack direction={"row"} gap={0.7}>
          <Typography color={"GrayText"}>3/12/2021</Typography>
          <Typography color={"GrayText"}>-</Typography>
          <Typography color={"GrayText"}>3/12/2024</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Typography
          paddingBottom={2}
          variant="body1"
          textAlign={"justify"}
          fontWeight={500}
        >
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </Typography>
      </Grid>
    </Grid>
  );
};
