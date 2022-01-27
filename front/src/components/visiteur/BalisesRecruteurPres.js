import { Box } from '@mui/system'
import React from 'react'
import BaliseRecruteur from './BaliseRecruteur'

export default function BaliseRecruteurPres() {
    const BaliseList = [
        { key: 1, titre: "20 000 Candidats" },
        { key: 2, titre: "10 000 Recrutements" },
        { key: 3, titre: "4 consultants" },
    ]

    return (
        <Box>
            {BaliseList.map((index) => (
                <BaliseRecruteur key={index.key} index={index} />
            ))}
        </Box>
    )
}
