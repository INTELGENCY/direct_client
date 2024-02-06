import {
  Button,
  Card,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import DataGrids from "../../../../Common/TableMui/DataGrids";
import { ShareOutlined, Star } from "@mui/icons-material";
import MainHeadings from "../../../../Common/AnimationMui/MainHeadings";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import ModalMui from "../../../../Common/ModalMui";
import InputFields from "../../../../Common/InputFields/InputFields";
import SelectFields from "../../../../Common/SelectFields";
import ProposalFeedBack from "./ProposalFeedBack";
import PublishSearch from "../../../../Common/Admin/PublishSearch";
const rowsOne = [
  {
    id: 1,
    companyName: "M/S Octathorn",
    submissionDate: "January 11, 2024",
    researcherName: "Abdullah Asif",
  },
];
const rowsTwo = [
  {
    id: 1,
    companyName: "M/S Tech Valley ",
    submissionDate: "January 11, 2024",
    researcherName: "Tiwana Asif",
  },
];
function Proposals({ dataProject }) {
  const navigate = useNavigate();
  const { id: ParamsId } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const [openModalFeedback, setOpenModalFeedback] = useState(false);
  const handleOpenModalFeedback = () => setOpenModalFeedback(true);
  const handleCloseModalFeedback = () => setOpenModalFeedback(false);
  const columns = [
    {
      field: "id",
      headerName: "No.",
      width: 90,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "companyName",
      headerName: "Company Name",
      width: 300,
    },
    {
      field: "submissionDate",
      headerName: "Submission Date",
      width: 250,
    },
    {
      field: "researcherName",
      headerName: "Assigned to",
      width: 300,
      renderCell: (params) =>
        params.row.researcherName === "" ||
        params.row.researcherName === undefined ? (
          <>
            <Button
              onClick={handleOpenModal}
              component={motion.div}
              whileTap={{ scale: 0.9 }}
              variant="contained"
              endIcon={<ShareOutlined />}
            >
              Assign
            </Button>
            <ModalMui
              top={"35%"}
              left={"35%"}
              openModalMui={openModal}
              handleCloseModalMui={handleCloseModal}
              content={<ModalContent handleCloseModal={handleCloseModal} />}
            />
          </>
        ) : (
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            {params.row.researcherName}

            <Button
              onClick={handleOpenModal}
              component={motion.div}
              whileTap={{ scale: 0.9 }}
              variant="contained"
              endIcon={<ShareOutlined />}
            >
              Assign
            </Button>
            <ModalMui
              top={"35%"}
              left={"35%"}
              openModalMui={openModal}
              handleCloseModalMui={handleCloseModal}
              content={
                <PublishSearch
                  noTextBox
                  title={"Choose Reviewer"}
                  researcher={true}
                  dateTitle={"Review Submission Date"}
                  handleCloseModal={handleCloseModal}
                />
              }
            />
          </Stack>
        ),
    },
    {
      field: "viewBtn",
      headerName: "View Proposal",
      width: 150,

      renderCell: (params) => (
        <Button
          component={motion.div}
          whileTap={{ scale: 0.9 }}
          onClick={() =>
            navigate(`/directportal/dashboard/viewproposal/${ParamsId}`)
          }
          variant="contained"
        >
          View
        </Button>
      ),
      align: "center",
      headerAlign: "center",
    },
    {
      field: "feedbackResearcher",
      headerName: "Feedback From Researcher",
      width: 300,

      renderCell: (params) => (
        <Stack direction="row" alignItems={"center"} gap={1}>
          <Rating
            name="text-feedback"
            value={4.3}
            readOnly
            precision={0.1}
            emptyIcon={<Star style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <Typography letterSpacing={1} variant={"caption"}>
            (4.2)
          </Typography>
        </Stack>
      ),
      align: "center",
      headerAlign: "center",
    },
    {
      field: "viewFeedback",
      headerName: "View Feedback",
      width: 200,

      renderCell: (params) => (
        <>
          <Button
            onClick={handleOpenModalFeedback}
            component={motion.div}
            whileTap={{ scale: 0.9 }}
            variant="contained"
          >
            View
          </Button>
        </>
      ),
      align: "center",
      headerAlign: "center",
    },
  ];
  return (
    <Grid container gap={4}>
      <Grid item xs={12}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <MainHeadings variant={"h2"} text={"Proposals"} />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Card elevation={2}>
          <DataGrids
            dataRow={ParamsId == 90785644 ? rowsTwo : rowsOne}
            dataColumn={columns}
          />
        </Card>
      </Grid>
      <ModalMui
        width={"70vw"}
        height={"80vh"}
        top={"10%"}
        left={"15%"}
        openModalMui={openModalFeedback}
        handleCloseModalMui={handleCloseModalFeedback}
        content={
          <ProposalFeedBack handleCloseModal={handleCloseModalFeedback} />
        }
        noButtons
      />
    </Grid>
  );
}

export default Proposals;

function ModalContent({ handleCloseModal }) {
  const arraySelect = [
    "IT",
    "Robotics",
    "Manfacturer",
    "Mechanics",
    "Data Management",
  ];
  return (
    <Grid container gap={2}>
      <Grid item sx={{ mb: 3 }} xs={12}>
        <Typography variant="h2">Assign Proposal</Typography>
      </Grid>
      <Grid item xs={12}>
        <SelectFields label={"Select Field"} array={arraySelect} />
      </Grid>
      <Grid item xs={12}>
        <InputFields
          type={"search"}
          label={"Researcher"}
          placeholder={"Researcher"}
        />
      </Grid>
      <Grid item sx={{ mt: 2 }} xs={12}>
        <Stack
          gap={1}
          direction={"row"}
          justifyContent={"flex-end"}
          alignItems={"center"}
        >
          <Button
            component={motion.div}
            whileTap={{ scale: 0.9 }}
            onClick={handleCloseModal}
            sx={{
              backgroundColor: "bg.slightlyLightRed",
              "&:hover": {
                backgroundColor: "bg.normalRed",
              },
            }}
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            component={motion.div}
            whileTap={{ scale: 0.9 }}
            variant="contained"
          >
            Assign
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}
