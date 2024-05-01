import { Container, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import arry from "./data";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  forsty: {
    backgroundColor: "mediumseagreen",
    // height: "100vh",
    gap: "5px",
  },
});

function GridMapping() {
  const classes = useStyle();
  //   const [data, setData] = useState([]);
  return (
    <>
      <Container>
        <Grid container className={classes.forsty}>
          {arry.map((data, i) => {
            return (
              <Grid item key={i} xs={3} sm={6} md={9} lg={12}>
                <Paper>{data.data}</Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

export default GridMapping;
