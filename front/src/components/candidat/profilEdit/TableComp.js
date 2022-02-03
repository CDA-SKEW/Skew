import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';



export default function ResponsiveGrid(props) {
    const { ListSkill } = props

    return (
        <Box
            sx={{
                bgcolor: "#FFFFFF",
                height: "auto",
                borderRadius: 1,
                my: 4,

            }}
        >
            {/* Titre section Compétences */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                }}
            >
                <Typography
                    variant="h5"
                    component="h5"
                    sx={{
                        px: 1,
                        bgcolor: "#004F98",
                        color: "#FFFFFF",
                        borderRadius: 1,
                        position: "relative",
                        top: -15,
                    }}
                >
                    Compétence
                </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {/* {ListSkill.map((skill, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Typography>{skill}</Typography>
                        </Grid>
                    ))} */}
                </Grid>
            </Box>
        </Box>

    );
}


