import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router";
import { theme } from "./assets/theme/theme";
import Home from "./pages/Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/dev" element={} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
