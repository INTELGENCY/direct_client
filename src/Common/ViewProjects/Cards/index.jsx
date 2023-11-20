import { Grid } from "@mui/material";
import ProjectCards from "../../CardsMui/ProjectCards";

function Cards({ cardsData }) {
  console.log(cardsData);
  return (
    <div style={{ border: "1px solid white", width: "100%", margin: "auto" }}>
      <Grid container gap={1}>
        {cardsData?.map((e, i) => (
          <>
            <Grid key={i} item xs={12} sm={12} md={5.86} lg={3.85}>
              <ProjectCards admin data={e} />
            </Grid>
          </>
        ))}
      </Grid>
    </div>
  );
}

export default Cards;
