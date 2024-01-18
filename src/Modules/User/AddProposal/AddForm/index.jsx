import { Button, Card, Fab, Grid, Typography, styled } from "@mui/material";
import InputFields from "../../../../Common/InputFields/InputFields";
import { HiveRounded } from "@mui/icons-material";
import FileUploadComp from "../../../../Common/FileUploadComp";
import { Formik } from "formik";
import Milesstones from "./Milesstones";
import { IndustrySubmitProposal } from "../../../../Common/Validation/FormValidation";
import Editor from "../../../../Common/Editor";
const SummaryDiv = styled("div")(({}) => ({
  width: "95%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid lightgray",
  gap: "1rem",
  margin: "auto",
  paddingBlock: "40px",
  borderRadius: "7px",
  backgroundColor: "rgba(239, 239, 240)",
}));
const arrayFiles = ["Budget Sheet", "Work Plans", "Timelines", "Gantt Charts"];
function AddForm() {
  const handleProposal = (values) => {
    console.log(values, "values proposal");
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        milesStones: [
          { startDate: "", endDate: "", title: "", description: "" },
        ],
      }}
      onSubmit={handleProposal}
      validationSchema={IndustrySubmitProposal}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => {
        return (
          <Grid container gap={4} sx={{ p: 2, backgroundColor: "#F6F7FA" }}>
            {console.log(values, "values")}
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor
                  value={`The proposed project aims to add flail mechanism to a turretless Tk Al-Zarrar giving it the mine clearance capability. The project involves the removal of the turret, the installation of an auxiliary power source (Perkins 1103A-33G engine) in the turret area, and the integration of a hydraulic system to power the flail assembly. The project's feasibility study indicates that this approach overcomes space constraints in the engine bay, ensuring the successful addition of the hydraulic pump and the subsequent completion of the flail system.
                        The proposed project aims to overcome the space limitations in the Tk Al-Zarrar tank's engine bay by installing an auxiliary power source in the turret area. This approach ensures the successful addition of a flail system to the tank, giving it mine clearance capabilities. The project's execution plan leverages the expertise of NUST Holdings, NCRA for design, and a industrial partner Tech Valley for fabrication, ensuring a well-coordinated and efficient project. The detailed design report will provide further analysis of tank stability, ensuring a safe and effective integration of the flail system on the turret-less Tk Al-Zarrar tank, reinforcing its operational effectiveness
                  `}
                  label={"Introduction"}
                  required={true}
                />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor
                  value={`<p>The proposed project aims to overcome the space limitations in the Tk Al-Zarrar tank's engine bay by installing an auxiliary power source in the turret area. This approach ensures the successful addition of a flail system to the tank, giving it mine clearance capabilities. The project's execution plan leverages the expertise of NUST Holdings, NCRA for design, and a industrial partner Tech Valley for fabrication, ensuring a well-coordinated and efficient project. The detailed design report will provide further analysis of tank stability, ensuring a safe and effective integration of the flail system on the turret-less Tk Al-Zarrar tank, reinforcing its operational effectiveness</p>`}
                  label={"Objectives"}
                  required={true}
                />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor
                  value={` <div>
                      <h3>
                        <strong>Concept Design and Feasibility:</strong>
                      </h3>
                      <ul>
                        <li>
                          The NUST College of Electrical and Mechanical
                          Engineering (NCRA) team will design the flail
                          assembly, ensuring weight distribution and
                          compatibility with the tank's structure.
                        </li>
                        <li>
                          The feasibility study conducted earlier has confirmed
                          the suitability of the proposed design, and the turret
                          removal will provide the ability to add 13 tons of
                          additional load. The turret-less tank will look as
                          follows: -
                        </li>
                      </ul>
                      <h3>Auxiliary Power Source Installation:</h3>
<ul><li>Based on current analysis, the selected auxiliary engine, the Perkins 1103A-33G, with its power output and compact size, will be installed in the turret area, providing the required power to drive the hydraulic pump. The dimensions of space available are shown in Figure 2</li></ul>

<h3>Auxiliary Power Source Installation:</h3>
<ul> <li>Based on current analysis, the selected auxiliary engine, the Perkins 1103A-33G, with its power output and compact size, will be installed in the turret area, providing the required power to drive the hydraulic pump. The dimensions of space available are shown in Figure 2.0 </li></ul>

<h3>Hydraulic System Integration:</h3>
<ul>
  <li>A custom coupling will connect the Perkins engine to the hydraulic pump, ensuring efficient power transfer.</li>
  <li>The hydraulic pump will drive the hydraulic motor, which will rotate the flail assembly at a controlled speed of 300-400 rpm.</li>
</ul>

<h3>Tank Stability and Performance:</h3>
<ul>
  <li>The removal of the turret reduces the tank's load by approximately 13 tons, exceeding the estimated 5-ton weight of the add-on system, resulting in a net reduction of around 8 tons in the tank's load.</li>
  <li>The weight distribution, stability, and center of gravity will be carefully analyzed and detailed in the design report to ensure the modified tank remains stable during operation.</li>
</ul>

<h3>Fabrication, Testing, and Integration:</h3>
<ul>
  <li>Industrial partner, M/S Tech Valley, will be selected to fabricate the flail assembly and related components on a turnkey basis, adhering to military-grade standards.</li>
</ul>

<h3>System Limitations:</h3>
<ul><li>The flail will be effective against pressure-operated mines but not effective against other types (Smart mines, magnetic, etc). The ability of the system to go across cross-country/ditches, etc., will be dependent on the capability of the Tank. The same applies to the armoring of the tank itself.</li></ul>

                    </div>`}
                  label={"Methodology"}
                  required={true}
                />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor label={"Testing"} required={true} />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor label={"Specifications"} required={true} />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor
                  value={`<p>The flail will be effective against pressure operated mines but not effective against other types (Smart mines, magnetic, etc). The ability of system to go across cross-country/ ditches, etc will be dependent on the capability of the Tank. The same applies for armoring of tank itself. </p>`}
                  label={"Risk Analysis"}
                  required={true}
                />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor
                  value={`
                <h2>Project Cost Breakdown</h2>

<ul>
  <li><strong>Auxiliary Power Source (Perkins 1103A-33G or similar):</strong> 6.5 - The whole flail system will be driven by this Aux power. This will include engine accessories such as radiator, pumps etc.</li>
  
  <li><strong>Fabrication of Flail Assembly:</strong> 23.5 - It is estimated that the design will go through a few iterations after tests and trials.</li>
  
  <li><strong>Tank AZ-without Turret:</strong> To be provided by user in functional condition.</li>
  
  <li><strong>Hydraulic Pump, Gearbox including couplings:</strong> 4.1 - The hydraulic pump will generate the necessary pressure which will be driven through Aux Power Pack. The gearbox and couplings will provide the connections.</li>
  
  <li><strong>Wiring, electronics, etc.:</strong> 0.6 - System level wiring and electronics.</li>
  
  <li><strong>Control system:</strong> 0.5 - The control system is used to control the movement of the FLAIL mechanism. It includes hydraulic and electrical systems and will be designed to be user-friendly and reliable.</li>
  
  <li><strong>Hydraulics & Actuators:</strong> 3.8 - Hydraulic-based actuator used for rotation of Flail Assembly.</li>
  
  <li><strong>HR Cost:</strong> 8.4 - Engineers and technicians involved in the project.</li>
  
  <li><strong>Test and Trial Cost:</strong> 0.6 - Expenses related to test & trial. POL and transport of FLAIL system will be provided by the user which is not included in cost.</li>
  
  <li><strong>Contingencies:</strong> 1.8</li>
  
  <li><strong>SUB TOTAL:</strong> 49.8</li>
  
  <li><strong>GST (18%):</strong> 8.964</li>
  
  <li><strong>GRAND TOTAL:</strong> 58.764*</li>
</ul>`}
                  label={"HR Requirements"}
                  required={true}
                />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor
                  label={"Instrumentation Requirements"}
                  required={true}
                />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card sx={{ p: 2 }}>
                <Editor label={"Deliverables"} required={true} />
              </Card>
            </Grid>
            {/* <Grid item xs={12}>
        <Card sx={{ p: 2 }}>
          <Typography sx={{ mb: 2 }} variant="h5">
            Summary
          </Typography>
          <SummaryDiv>
            <CloudUpload sx={{ color: "#252B42", fontSize: "35px" }} />
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "GrayText",
                gap: ".6rem",
              }}
              variant="h4"
              fontWeight={400}
            >
              Drag or Click here to add summary
            </Typography>
          </SummaryDiv>
        </Card>
      </Grid> */}

            <Grid item xs={12}>
              <FileUploadComp arrayFiles={arrayFiles} />
            </Grid>
            <Grid item xs={12}>
              <Milesstones
                values={values.milesStones}
                handleChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="success"
                variant="contained"
                //   size="large"
                startIcon={<HiveRounded />}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        );
      }}
    </Formik>
  );
}

export default AddForm;
