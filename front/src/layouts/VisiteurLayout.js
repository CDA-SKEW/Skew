import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from '@mui/material/GlobalStyles';

import { theme } from "../configs/theme";
import { styled } from "@mui/material/styles";
import { style } from '../configs/globalStyle';
import Container from '@mui/material/Container';

import Navbar from "../components/core/Navbar";

const Main = styled("div")(({ theme }) => ({
  marginTop: 50,
  display: "flex",
  alignItems: "center",
  // padding: theme.spacing(0, 1),
}));


export default function VisiteurLayout ({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ ...style }} />
      <Navbar />
      <Container
        component="main"
        maxWidth='xl'
        disableGutters
        sx={{ flexGrow: 1 }}>
        <Main>{children}</Main>
      </Container>

    </ThemeProvider>
  );
};