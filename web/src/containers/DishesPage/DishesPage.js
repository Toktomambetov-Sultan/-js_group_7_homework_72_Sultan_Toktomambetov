import {
  Button,
  CircularProgress,
  Container,
  Grid,
  List,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DialogForm from "../../components/DialogForm/DialogForm";
import DishCard from "../../components/DishesPage/DishCard/DishCard";
import { addDish, deleteDish, editDish, initDishes } from "../../store/actions";

const useStyle = makeStyles((theme) => ({
  topBlock: {
    borderBottom: "4px solid " + grey[400],
    paddingBottom: theme.spacing(1),
  },
}));
const initialCurrentDish = {
  name: "",
  price: "",
  imgSrc: "",
};
const DishesPage = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [currentDish, setCurrentDish] = useState(initialCurrentDish);

  useEffect(() => {
    const initDishesHandler = () => dispatch(initDishes());
    initDishesHandler();
  }, [dispatch]);

  const closeModalWin = () => {
    setOpenModal(false);
    setCurrentDish(initialCurrentDish);
  };

  const openModalWin = () => setOpenModal(true);

  const deleteDishHandler = (id) => dispatch(deleteDish(id));

  const addDishHandler = async (currentDish) =>
    await dispatch(addDish(currentDish));

  const editDishHandler = async (currentDish) => {
    await dispatch(editDish(currentDish));
  };

  const onEdit = (dish) => {
    setCurrentDish({ ...dish });
    openModalWin();
  };


  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(currentDish, state);
    if (currentDish.id) {
      await editDishHandler({ ...currentDish });
    } else {
      await addDishHandler({ ...currentDish });
    };
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
      {state.isLoading ? (
        <CircularProgress />
      ) :
        (<>
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
                <DishCard
                  src={dish.imgSrc}
                  name={dish.name}
                  price={dish.price}
                  key={dish.id}
                  onEdit={() => onEdit(dish)}
                  onDelete={() => deleteDishHandler(dish.id)}
                />
              ))}
            </List>
          </Container>
          <DialogForm
            onSubmit={onSubmit}
            onClose={closeModalWin}
            onChange={onChange}
            open={openModal}
            {...currentDish}
          /></>
        )
      }
    </div>
  );
};

export default DishesPage;
