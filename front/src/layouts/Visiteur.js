import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from '@mui/material/GlobalStyles';

import { theme } from "../configs/theme";
import { style } from '../configs/globalStyle';

import Navbar from "../components/core/Navbar";


const MainLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{...style}}/>
      <Navbar />
    </ThemeProvider>
  );
};

export default MainLayout;
