import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from '@mui/material/GlobalStyles';

import { theme } from "../configs/theme";
import { styled } from "@mui/material/styles";
import { style } from '../configs/globalStyle';
import { Box } from "@mui/system";

import Navbar from "../components/core/Navbar";

const Main = styled("div")(({ theme }) => ({
  marginTop: 50,
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
}));


const VisiteurLayout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ ...style }} />
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Main>{children}</Main>
      </Box>

    </ThemeProvider>
  );
};

export default VisiteurLayout;
