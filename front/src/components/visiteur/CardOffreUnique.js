import {
    Card, CardActionArea, CardContent, CardMedia, Typography,
} from "@mui/material";
import React from "react";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export default function CardOffreUnique({ listOffer, handleClickOpen }) {

    return (
        <Card
            sx={{
                width: 200,
                border: "2px solid",
                borderColor: "black",
                borderRadius: 1,
                mb: 5,
                mx: 5,
                bgcolor: '#fff'
            }
            }
        >
            <CardActionArea
                onClick={handleClickOpen}
            >
                {listOffer.badgeEmployor && (
                    <VerifiedUserIcon
                        sx={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            width: "40px",
                            height: "auto",
                            zIndex: 20,
                            color: "#16B84E",
                        }}
                    />
                )}
                <CardMedia
                    component="img"
                    height="120"
                    image={listOffer.image}
                    alt="imageEmployer"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        component="div"
                        sx={{
                            textTransform: "uppercase",
                            textAlign: "center",
                            height: 50,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {listOffer.titleOffer}
                    </Typography>
                    {listOffer.typeContrat && (
                        <Typography
                            gutterBottom
                            variant='body1'
                            sx={{
                                position: 'absolute',
                                right: 5,
                                top: 120,
                                color: '#808080',
                            }}
                        >
                            {listOffer.typeContrat}
                        </Typography>
                    )}
                    {listOffer.localisation && (
                        <Typography
                            gutterBottom
                            variant='body1'
                            sx={{
                                position: 'absolute',
                                left: 5,
                                top: 120,
                                color: '#808080',
                            }}
                        >
                            {listOffer.localisation}
                        </Typography>
                    )}
                    <Typography
                        gutterBottom
                        component="div"
                        sx={{
                            textTransform: "uppercase",
                            textAlign: "center",
                        }}
                    >
                        {listOffer.nameEmployor}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textAlign: "center" }}
                    >
                        {listOffer.dateOfferDays}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}
