import React from 'react'
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";

export default function CardUser({index}) {
    return (
        <Link
            key={index.key}
            href={index.lien}
            color="#000000"
            underline="none"
            sx={{
                width: "40%",
                m: 'auto',
                minWidth: 180
            }}
        >
            <Card sx={{
                height: 400,
            }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{
                        my: 18,
                        justifyContent: 'center'
                    }}>
                    {index.titre}
                </Typography>
            </Card>
        </Link>
    )
}
