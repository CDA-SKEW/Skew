import { Box, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from '@mui/material/GlobalStyles';
import { theme, themeUser } from "configs/theme";
import Container from '@mui/material/Container';
import Navbar from "../components/core/Navbar";
import Footer from "components/core/Footer";

export default function VisiteurLayout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Box
                bgcolor={themeUser.palette.background.default}
                maxWidth="100%"
            // disableGutters
            >
                {children}
            </Box>
            <Footer />
        </ThemeProvider>
    )
}