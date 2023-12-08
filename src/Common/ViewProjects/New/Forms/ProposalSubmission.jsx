import { Grid } from "@mui/material";
import TypographyGrow from "../../../AnimationMui/TypographyGrow";
import ProposalValues from "./ProposalValues";
import { DriveFolderUpload, TextSnippet } from "@mui/icons-material";

function ProposalSubmission({
  valuestesting,
  valuesProposalText,
  valuesProposalfile,
  valuesfinancialProposal,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"} gap={3}>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <TypographyGrow variant={"h1"} text={"Project's Proposal Fields"} />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <ProposalValues
          values={valuesProposalText}
          section={"proposalText"}
          handleChange={handleChange}
          setFieldValue={setFieldValue}
          heading={"Proposal Text's Fields"}
          icons={<TextSnippet sx={{ color: "#252B42" }} />}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <ProposalValues
          icons={<DriveFolderUpload sx={{ color: "#252B42" }} />}
          section={"testing"}
          setFieldValue={setFieldValue}
          heading={"Testing"}
          handleChange={handleChange}
          values={valuestesting}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <ProposalValues
          icons={<DriveFolderUpload sx={{ color: "#252B42" }} />}
          section={"financialProposal"}
          setFieldValue={setFieldValue}
          heading={"Financial Proposal"}
          handleChange={handleChange}
          values={valuesfinancialProposal}
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <ProposalValues
          icons={<DriveFolderUpload sx={{ color: "#252B42" }} />}
          section={"proposalfile"}
          setFieldValue={setFieldValue}
          heading={"Fields for Proposal Documents"}
          handleChange={handleChange}
          values={valuesProposalfile}
        />
      </Grid>
    </Grid>
  );
}

export default ProposalSubmission;
