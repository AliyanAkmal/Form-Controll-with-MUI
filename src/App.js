import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { blue, purple, yellow } from "@mui/material/colors";
import GridComponent from "./components/muiComp";
import GridMapping from "./components/GridMap";

const styles = createTheme({
  palette: {
    primary: {
      main: "#FF0000",
    },
  },
  typography: {
    fontFamily: "quicksand",
  },
});
function App() {
  return (
    <ThemeProvider theme={styles}>
      <Router>
        <Switch>
          <Route exact path="/notes">
            <Notes />
          </Route>
          <Route exact path="/gridComponent">
            <GridComponent />
          </Route>
          <Route exact path="/mapping">
            <GridMapping />
          </Route>
          <Route path="/">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
