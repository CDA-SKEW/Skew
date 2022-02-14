import { Box, Collapse, Typography } from '@mui/material';
import React, { useState } from 'react';

import { themeEmployer} from 'configs/theme';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';



export default function CandidateInterest(props) {
    const { profilCandidate } = props
    const [openInterest, setOpenInterest] = useState(false);

    // console.log("profilCandidate", profilCandidate)

    return (
        <Box>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Typography
                    variant="h5"
                    paddingX={1}
                    bgcolor={themeEmployer.palette.bgTitleItems.main}
                    color={themeEmployer.palette.textTitleItems.main}
                    borderRadius={1}
                    position={"relative"}
                    top={"15px"}
                    textAlign={"center"}
                >
                    Intérets
                </Typography>
            </Box>

            <Box
                paddingX={2}
                paddingTop={1}
                borderRadius={3}
                paddingBottom={3}
                marginBottom={3}
                bgcolor={themeEmployer.palette.bgBox.main}>

                {/* Bouton collpase */}
                <Box display={"flex"} justifyContent={"end"}>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpenInterest(!openInterest)}
                        sx={{ color: themeEmployer.palette.bgTitleItems.main }}
                    >{openInterest ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </Box>

                <Collapse in={openInterest} timeout="auto" unmountOnExit>

                    <Box display={"flex"} justifyContent={"space-around"} flexWrap="wrap">
                        {profilCandidate.cvCandidat.interest && (profilCandidate.cvCandidat.interest.map((interestTable, index) => (
                            // console.log(skilltable, index)
                            <Typography variant="body2" component="span" padding={1} key={index}>
                                {interestTable}
                            </Typography>
                        )))}
                    </Box>
                </Collapse>

            </Box>
        </Box>
    )
}