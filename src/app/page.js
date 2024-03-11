import { Grid } from "@mui/material";
import LatestNews from "./components/ui/LatestNews/LatestNews";

const Home = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
       <LatestNews/>
        </Grid>
        <Grid item xs={4}>
      <h1>sidebar</h1>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Home;
