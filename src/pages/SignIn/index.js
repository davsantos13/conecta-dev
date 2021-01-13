import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box, Avatar, Button, Link } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100vh",
  },

  image: {
    backgroundImage: "url(/images/background.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "none",
    padding: theme.spacing(2),
    textAlign: "center",
  },

  avatar: {
    marginBottom: theme.spacing(1),
  },

  button: {
    marginTop: theme.spacing(1),
  },
  form: {
    margin: theme.spacing(2, 4),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {"Copyright © "}
      <a
        color="inherit"
        href="https://www.youtube.com/channel/UCVE9-HO_GzLtDK4IGKVSYXA"
      >
        Lucas Nhimi
      </a>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

function SignIn() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        direction="column"
        justify="center"
        md={7}
        className={classes.image}
      >
        <Typography style={{ color: "#FFF", fontSize: 35, lineHeight: "40px" }}>
          <strong>Simplificando a forma de conectar desenvolvedores!</strong>
        </Typography>
        <Typography
          variant="body2"
          style={{
            color: "rgb(255,255,255, 0.7",
            marginTop: 30,
            fontSize: 15,
            lineHeight: "30px",
          }}
        >
          Compartilhe seu conhecimento com toda nossa rede de desenvolvedores.
        </Typography>
      </Grid>
      <Grid item md={5}>
        <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Acesso</Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              type="password"
              label="Senha"
              name="password"
              autoComplete="current-password"
            />
            <Button
              fullWidth
              color="primary"
              variant="contained"
              className={classes.button}
            >
              Entrar
            </Button>

            <Grid container>
              <Grid item>
                <Link>Esqueceu sua senha? </Link>
              </Grid>
              <Grid item>
                <Link>Não tem uma conta ? Registre-se</Link>
              </Grid>
            </Grid>
          </form>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}

export default SignIn;
