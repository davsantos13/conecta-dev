import { ThemeProvider } from "@material-ui/core";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./mock";
import theme from "./theme";
import GuestRoute from "./routes/GuestRoutes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />

              <GuestRoute path="/sign-in" element={<SignIn />} />

              <Route path="/*" element={<h1>Not Found</h1>} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
