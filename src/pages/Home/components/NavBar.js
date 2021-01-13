import {
  Button,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 275,
    marginRight: theme.spacing(2)
  },
  button: {
    width: "100%",
  },
}));

const tags = [
  {
    id: 1,
    name: "reactjs",
  },
  {
    id: 2,
    name: "springboot",
  },
  {
    id: 3,
    name: "flutter",
  },
  {
    id: 4,
    name: "docker",
  },
  {
    id: 5,
    name: "java",
  },
  {
    id: 6,
    name: "javascript",
  },
];

function NavBar() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Button variant="outlined" color="secondary" className={classes.button}>
        REGISTRE-SE
      </Button>
      <ListSubheader>{`Tags em Alta`}</ListSubheader>
      {tags.map((item) => (
        <ListItem dense button key={`item-${item.id}-${item.name}`}>
          <ListItemText primary={`#${item.name}`} />
        </ListItem>
      ))}
      <ListItem button>
        Exibir mais Tags
      </ListItem>
    </Paper>
  );
}

export default NavBar;
