import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
// import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { urlImg } from "utils/url";
export default function CardOffreUnique({ listOffer, handleClickOpen }) {

    var date = (listOffer.createDate).substring(0, 10);
    var dd = date.split('-');
    var dateFinal = dd[2] + "-" + dd[1] + "-" + dd[0];

    return (
        <Card
            sx={{ width: 200, border: "2px solid", borderColor: "black", borderRadius: 1, mb: 5, mx: 5, bgcolor: '#fff' }}>
            <CardActionArea onClick={() => handleClickOpen(listOffer)}>
                {/* {listOffer.badgeEmployor && (
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
                )} */}
                <CardMedia
                    component="img"
                    height="120"
                    image={`${urlImg + listOffer.avatar}`}
                    alt="imageEmployer"
                />
                <CardContent>
                    <Typography gutterBottom component="div"
                        sx={{
                            textTransform: "uppercase", textAlign: "center",
                            display: "flex", justifyContent: "center", alignItems: "center",
                            fontWeight: 'bold'
                        }}
                    >
                        {listOffer.title}
                    </Typography>
                    {listOffer.type && (
                        <Typography gutterBottom variant='body1'
                            sx={{ position: 'absolute', right: 5, top: 120, color: '#808080', }}>
                            {listOffer.type}
                        </Typography>
                    )}
                    {listOffer.town && (
                        <Typography gutterBottom variant='body1'
                            sx={{ position: 'absolute', left: 5, top: 120, color: '#808080', }}>
                            {listOffer.town}
                        </Typography>
                    )}
                    <Typography gutterBottom component="div"
                        sx={{ textTransform: "uppercase", textAlign: "center", height: 15 }}>
                        {listOffer.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center" }}>
                        {dateFinal}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}
