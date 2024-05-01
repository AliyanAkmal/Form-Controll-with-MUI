import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  back: {
    backgroundColor: "black",
    height: "100vh",
  },
  itemsIn: {
    backgroundColor: "black",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
});
function GridComponent() {
  const classes = useStyle();
  return (
    <Container className={classes.back}>
      <Grid container className={classes.itemsIn}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper>leyn</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper>leyn</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper>leyn</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper>leyn</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default GridComponent;
