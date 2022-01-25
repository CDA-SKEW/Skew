import * as React from "react";
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function CardHome() {

    const CardsList = [
        { key: 1, titre: "Je suis un recruteur", lien: "/recruteur", color: "#ABC4FF" },
        { key: 2, titre: "Je suis un candidat", lien: "/candidat", color: "#C4FFE9" }
    ]

    return (
        <Box sx={{
            display: 'flex',
            width: 1000,
            mx: 'auto',
            my: 20
        }}>
            {CardsList.map((index) => (
                <Link
                    key={index.key}
                    href={index.lien}
                    color="#000000"
                    underline="none"
                    sx={{
                        width: 400,
                        m: 'auto',
                        minWidth: 180
                    }}
                >
                    <Card sx={{
                        height: 400,
                    }}>
                        <Typography sx={{
                            textAlign: 'center',
                            justifyContent: 'center'
                        }}>
                            {index.titre}
                        </Typography>
                    </Card>
                </Link>
            ))}
        </Box>
    );
}