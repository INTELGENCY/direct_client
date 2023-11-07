import {
  Button,
  Card,
  Collapse,
  Divider,
  Grid,
  IconButton,
} from "@mui/material";
import IconsHeadings from "../../../../../Common/AnimationMui/IconHeadings";
import { Add, Delete, DeleteOutline, Route } from "@mui/icons-material";
import InputFields from "../../../../../Common/InputFields/InputFields";
import { FieldArray } from "formik";
import { TransitionGroup } from "react-transition-group";

function Milesstones({ values, handleChange }) {
  return (
    <FieldArray name="milesStones">
      {({ push, remove }) => (
        <Card sx={{ p: 3 }}>
          <Grid container gap={3}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              item
              xs={12}
            >
              <IconsHeadings
                text={"Milestones"}
                helpOutline={"Project Milestones are added here"}
                icons={<Route sx={{ color: "#252B42" }} />}
              />
              <Button
                sx={{
                  marginLeft: "auto",
                  backgroundColor: "#008080",
                  "&:hover": {
                    backgroundColor: "#008080",
                  },
                }}
                variant="contained"
                startIcon={<Add />}
                onClick={() =>
                  push({
                    title: "",
                    startDate: "",
                    endDate: "",
                    description: "",
                  })
                }
              >
                Add More
              </Button>
            </Grid>
            <Grid item xs={12}>
              {values.map((e, i) => (
                <TransitionGroup key={i}>
                  <Collapse in>
                    <Grid
                      sx={{ mt: 6 }}
                      container
                      gap={2}
                      justifyContent={"space-between"}
                    >
                      {/* {Object.keys(e).map((event, index) => (
                        <Grid item xs={12} key={index}>
                          <InputFields
                            value={values[i][event]}
                            name={`milesStones[${i}]${event}`}
                            onChange={handleChange}
                            label={"Title"}
                            type={"text"}
                          />
                        </Grid>
                      ))} */}
                      <Grid item xs={12}>
                        <InputFields
                          onChange={handleChange}
                          label={"Title"}
                          type={"text"}
                        />
                      </Grid>
                      <Grid item xs={5.9}>
                        <InputFields
                          onChange={handleChange}
                          label={"Start Date"}
                          type={"text"}
                        />
                      </Grid>
                      <Grid item xs={5.9}>
                        <InputFields
                          onChange={handleChange}
                          label={"End Date"}
                          type={"text"}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <InputFields
                          onChange={handleChange}
                          label={"Description"}
                          type={"textbox"}
                          rows={"4"}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Divider sx={{ borderColor: "red" }}>
                          <IconButton
                            disabled={values.length < 2 ? true : false}
                            sx={{ border: "2px solid", color: "#ff7675" }}
                            onClick={() => remove(i)}
                          >
                            <Delete />
                          </IconButton>
                        </Divider>
                      </Grid>
                    </Grid>
                  </Collapse>
                </TransitionGroup>
              ))}
            </Grid>
          </Grid>
        </Card>
      )}
    </FieldArray>
  );
}

export default Milesstones;
