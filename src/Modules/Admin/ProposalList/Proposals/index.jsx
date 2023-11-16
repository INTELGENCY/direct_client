import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  AvatarGroup,
  Button,
  Card,
  Grid,
  IconButton,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DataGrids from "../../../../Common/TableMui/DataGrids";
import IconsHeadings from "../../../../Common/AnimationMui/IconHeadings";
import {
  Close,
  ExpandMore,
  Propane,
  Share,
  ShareOutlined,
  Star,
} from "@mui/icons-material";
import MainHeadings from "../../../../Common/AnimationMui/MainHeadings";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import ModalMui from "../../../../Common/ModalMui";
import InputFields from "../../../../Common/InputFields/InputFields";
import SelectFields from "../../../../Common/SelectFields";
const rows = [
  {
    id: 1,
    companyName: "Rapidev",
    submissionDate: "2/2/2022",
    researcherName: "Abdullah Asif",
  },
  {
    id: 2,
    companyName: "Intelgency",
    submissionDate: "3/2/2022",
    researcherName: "Aman Ullah",
  },
  {
    id: 3,
    companyName: "Systems Ltd",
    submissionDate: "4/2/2022",
    researcherName: "",
  },
  {
    id: 4,
    companyName: "Zones Ltd",
    submissionDate: "7/2/2022",
    researcherName: "Ali",
  },
];
function Proposals() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

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
      editable: true,
    },
    {
      field: "submissionDate",
      headerName: "Submission Date",
      width: 250,
      editable: true,
    },
    {
      field: "researcherName",
      headerName: "Assigned to",
      width: 250,
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
          params.row.researcherName
        ),
    },
    {
      field: "viewBtn",
      headerName: "View Proposal",
      width: 150,
      editable: true,
      renderCell: (params) => (
        <Button
          component={motion.div}
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate("/directportal/dashboard/viewproposal")}
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
      editable: true,
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
      editable: true,
      renderCell: (params) => (
        <Button
          component={motion.div}
          whileTap={{ scale: 0.9 }}
          variant="contained"
        >
          View
        </Button>
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
          <DataGrids dataRow={rows} dataColumn={columns} />
        </Card>
      </Grid>
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
