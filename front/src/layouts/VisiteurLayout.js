import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from '@mui/material/GlobalStyles';
import { theme } from "../configs/theme";
import { style } from '../configs/globalStyle';
import Container from '@mui/material/Container';
import Navbar from "../components/core/Navbar";

export default function VisiteurLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={{ ...style }} />
      <Navbar />
      <Container
        component="main"
        disableGutters
        maxWidth="100%"
      >
        {children}
      </Container>
    </ThemeProvider>
  );
};