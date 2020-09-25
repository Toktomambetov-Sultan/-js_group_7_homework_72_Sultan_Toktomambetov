import {
  Button,
  Container,
  Grid,
  List,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";
import DishCard from "../../components/DishesPage/DishCard/DishCard";

const useStyle = makeStyles((theme) => ({
  topBlock: {
    borderBottom: "4px solid " + grey[400],
    paddingBottom: theme.spacing(1),
  },
}));
const DishesPage = (props) => {
  const classes = useStyle();
  return (
    <div>
      <div className={classes.topBlock}>
        <Container>
          <Grid container justify="space-between">
            <Grid item>
              <Typography variant="h5">Dishes</Typography>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Add new dish
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container>
        <List></List>
      </Container>
    </div>
  );
};

export default DishesPage;
