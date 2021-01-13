import React from "react";
import { Button } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import { Bell } from "react-feather";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  appBar: {
    boxShadow: "none",
  },
  img: {
    maxHeight: 55,
  },
  grow: {
    flexGrow: 1,
  },
  userSection: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginRight: 10,
  },
  bell: {
    marginRight: 10,
  },
});

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <img src="/images/logo.png" className={classes.img}></img>
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Novo
          </Button>
          <SvgIcon className={classes.bell}>
            <Bell></Bell>
          </SvgIcon>
          <Avatar src="/" alt="Teste" />
        </div>
        {/* <div className="">
          <span>Conecta Dev</span>
        </div>
        <div>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
          <span>img1</span>
          <span>img2</span>
        </div> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
