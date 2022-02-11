import {
    Container,
    Grid,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { themeEmployer } from "configs/theme";
import FormPasswordChange from "components/FormPasswordChange";

const ChangePassword = (props) => {
    const { mail } = props

    return (
        <Container
        >
            <Box
                bgcolor={themeEmployer.palette.bgBox.main}
                borderRadius={3}
                paddingTop={2}
                paddingBottom={2}
                marginTop={2}
            >
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Typography
                        variant="h5"
                        paddingX={1}
                        bgcolor={themeEmployer.palette.bgTitleItems.main}
                        color={themeEmployer.palette.textTitleItems.main}
                        borderRadius={1}
                        position={"relative"}
                        top={"-35px"}
                        textAlign={"center"}
                    >
                        Changement Mot passe
                    </Typography>
                </Box>

                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={12} sm={12} md={9} xl={6}>
                        <FormPasswordChange mail={mail} />
                    </Grid>
                </Grid>



            </Box>
        </Container>
    );
};

export default ChangePassword;