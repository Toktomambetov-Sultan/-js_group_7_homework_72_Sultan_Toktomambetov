import {
  Button,
  Container,
  Grid,
  List,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DialogForm from "../../components/DialogForm/DialogForm";
import DishCard from "../../components/DishesPage/DishCard/DishCard";
import { addDish } from "../../store/actions";

const useStyle = makeStyles((theme) => ({
  topBlock: {
    borderBottom: "4px solid " + grey[400],
    paddingBottom: theme.spacing(1),
  },
}));
const DishesPage = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [currentDish, setCurrentDish] = useState({
    name: "",
    price: "",
    imgSrc: "",
  });
  const closeModalWin = () => setOpenModal(false);
  const openModalWin = () => setOpenModal(true);
  const addnewDishHandler = async (currentDish) => await dispatch(addDish(currentDish));

  const onSubmit = async (event) => {
    event.preventDefault();
    await addnewDishHandler({ ...currentDish });
    closeModalWin();
  };
  const onChange = (event) => {
    const { id: name, value } = event.target;
    setCurrentDish((lastData) => ({
      ...lastData,
      [name]: value,
    }));
  };

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
              <Button onClick={openModalWin} variant="outlined" color="primary">
                Add new dish
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Container>
        <List dense={true}>
          {state.dishes.map((dish) => (
            <DishCard src={dish.imgSrc} name={dish.name} price={dish.price} key={dish.id} />
          ))}
        </List>
      </Container>
      <DialogForm
        onSubmit={onSubmit}
        onClose={closeModalWin}
        onChange={onChange}
        open={openModal}
        {...currentDish}
      />
    </div>
  );
};

export default DishesPage;
