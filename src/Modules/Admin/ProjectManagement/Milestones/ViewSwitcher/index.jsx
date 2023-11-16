import "gantt-task-react/dist/index.css";
import { Button, ButtonGroup, Stack } from "@mui/material";

function ViewSwitcher({ onViewModeChange, onViewListChange, isChecked }) {
  return (
    <Stack direction={"row"} justifyContent={"flex-end"}>
      <ButtonGroup
        color="success"
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => onViewModeChange("Day")}>Today</Button>
        <Button onClick={() => onViewModeChange("Week")}>Week</Button>
        <Button onClick={() => onViewModeChange("Month")}>Month</Button>
      </ButtonGroup>
    </Stack>
  );
}

export default ViewSwitcher;
