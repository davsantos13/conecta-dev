import { ThemeProvider } from "@material-ui/core";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

import theme from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home/>
      </ThemeProvider>
      
    </>
  );
}

export default App;
