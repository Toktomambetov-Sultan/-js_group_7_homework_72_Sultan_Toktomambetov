import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";

const DialogForm = (props) => {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <form onSubmit={props.onSubmit} onChange={props.onChange} >
        <DialogContent>
          <TextField
            margin="dense"
            required
            value={props.name}
            id="name"
            label="Dish name"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            value={props.price}
            id="price"
            required
            label="Dish price"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            value={props.imgSrc}
            margin="dense"
            id="imgSrc"
            label="Dish image url"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Continue
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default DialogForm;
