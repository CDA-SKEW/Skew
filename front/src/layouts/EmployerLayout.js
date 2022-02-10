import { Box, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { theme, themeEmployer} from "configs/theme";
import Navbar from "../components/core/Navbar";
import Footer from "components/core/Footer";

export default function VisiteurLayout({ children }) {

    return (
        <ThemeProvider theme={theme} >
            <CssBaseline />
            <Navbar />
            <ThemeProvider theme={themeEmployer} >
            <Box
            component={"main"}
                bgcolor={themeEmployer.palette.bgPage.main}
                maxWidth="100%"
               disableGutters
            >
                {children}
            </Box>
            </ThemeProvider>
            <Footer />
        </ThemeProvider>
    )
}