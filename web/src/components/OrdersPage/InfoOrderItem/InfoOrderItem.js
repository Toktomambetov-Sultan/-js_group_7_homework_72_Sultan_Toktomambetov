import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    marginBottom: theme.spacing(1),
  },
}));
const InfoOrderItem = ({ text1, text2 }) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.item}>
      <Grid container>
        <Grid item xs={6}>
          {text1}
        </Grid>
        <Grid item xs={6}>
          {text2}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InfoOrderItem;
