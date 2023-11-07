import { Alert, Snackbar } from "@mui/material";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "../../Store/Features/AlertSlice";

function Alerts() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  console.log(alert,);
  return (
    <Snackbar
      open={alert?.status === "success" || alert?.status === "error"}
      autoHideDuration={6000}
      onClose={() => {
        dispatch(setAlert({ status: "", text: "" }));
      }}
    >
      {alert?.status === "success" || alert?.status === "error" ? (
        <Alert severity={alert?.status} sx={{ width: "100%" }}>
          {alert?.text}
        </Alert>
      ) : null}
    </Snackbar>
  );
}

export default Alerts;
