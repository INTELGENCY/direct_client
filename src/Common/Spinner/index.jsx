import { CircularProgress, Stack } from "@mui/material";
import React from "react";

const Spinner = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <Stack
      sx={{
        position: "fixed",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        background: "white",
        width: "100vw",
        height: "100vh",
        zIndex: "10",
      }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <CircularProgress />
    </Stack>
  );
};

export default Spinner;
