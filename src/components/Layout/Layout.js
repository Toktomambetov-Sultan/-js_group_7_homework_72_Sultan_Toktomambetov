import {
  AppBar,
  Container,
  List,
  ListItem,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import React from "react";
import { NavLink } from "react-router-dom";
import { PATH_TO_DISHES, PATH_TO_ORDERS } from "../../paths";

const useStyle = makeStyles((theme) => ({
  headerToolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerList: {
    display: "flex",
    flexDirection: "row",
  },
  NavLink: {
    color: "#fff",
    fontSize: "24px",
    textDecoration: "none",
    "&.active": {
      color: green["A400"],
    },
  },
  mainBlock: {
    marginTop: "70px",
  },
}));
const Layout = ({ children }) => {
  const classes = useStyle();
  return (
    <div>
      <header>
        <AppBar position="fixed">
          <Container>
            <Toolbar className={classes.headerToolbar}>
              <Typography variant="h5" noWrap>
                Turtle Pizza Admin
              </Typography>
              <List className={classes.headerList}>
                <ListItem>
                  <NavLink
                    className={classes.NavLink}
                    exact
                    to={PATH_TO_ORDERS}
                  >
                    Orders
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink
                    className={classes.NavLink}
                    exact
                    to={PATH_TO_DISHES}
                  >
                    Dishes
                  </NavLink>
                </ListItem>
              </List>
            </Toolbar>
          </Container>
        </AppBar>
      </header>
      <main className={classes.mainBlock}>{children}</main>
    </div>
  );
};

export default Layout;
