import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function SecOne() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" fontWeight={700}>
          Completion Status
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">8 out of 12 files</Typography>
      </Grid>
      <Grid item xs={1}>
        <LinearProgress variant="determinate" value={progress} />
      </Grid>
    </Grid>
  );
}

export default SecOne;
