import { Container, CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ChekboxCV from "../../components/ChekboxCV";
import Masonry from '@mui/lab/Masonry';


const CandidatProfilTest = () => {


  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          bgcolor: "#E5E5E5",
          p: 2,
          height: "auto",
          mt: 2,
        }}
      >
        {/*   {/* BOX CONTACT*/} 

        <Box
          sx={{
            bgcolor: "#FFFFFF",
            height: "auto",
            borderRadius: 1,
            my: 4,
          }}
        >
          {/* Titre section Contact dashboard */}
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
              Contact
            </Typography>
          </Box>
          <Box
          sx={{display:"flex",
          justifyContent:"space-around",
          bgcolor:"#FF7F50",
          
          }}>
            <Typography>
              Adresse postal
            </Typography>
            <Typography>
              Téléphone
            </Typography>
            <Typography>
              Email
            </Typography>
          </Box> 

          <Box
          sx={{display:"flex",
          justifyContent:"space-around",
          mt:2
          }}>
            <Typography>
              10 rue du Skew
              72000 Le Mans
            </Typography>
            <Typography>
              06-00-00-00-00
            </Typography>
            <Typography>
              skew@skew
            </Typography>
          </Box>

          
         
        </Box>

         {/* BOX Expérience*/}

        <Box
          sx={{
            bgcolor: "#FFFFFF",
            height: "auto",
            borderRadius: 1,
            my: 4,
          }}
        >
          {/* Titre section Expériences */}
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
              Expériences
            </Typography>
          </Box>
          <Box
          sx={{display:"flex",
          justifyContent:"space-around",
          background: "#FF7F50",
          }}>
            <Typography>
              Entreprise
            </Typography>
            <Typography>
              Poste
            </Typography>
            <Typography>
              Date de début
            </Typography>
            <Typography>
              Date de fin
            </Typography>
          </Box> 
          <Box
          sx={{display:"flex",
          justifyContent:"space-around",
          mt:2
          }}>
            <Typography>
              Arinfo
            </Typography>
            <Typography>
              Stagiaire
            </Typography>
            <Typography>
              25/01/2020
            </Typography>
            <Typography>
              25/01/2021            </Typography>
          </Box>
         
        </Box>

        {/* BOX COMPETENCE*/}
        <Masonry columns={2} spacing={2}>
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

          <Box
          sx={{display:"flex",
          justifyContent:"space-around",
          mt:2
          }}>
            <Typography>
              HTML
            </Typography>
            <Typography>
            CSS
            </Typography>
            <Typography>
              JavaScript
            </Typography>
          </Box>
          <Box
          sx={{display:"flex",
          justifyContent:"space-around",
          mt:2
          }}>
            <Typography>
              React
            </Typography>
            <Typography>
            MUI
            </Typography>
            <Typography>
              NodeJs
            </Typography>
          </Box>
        </Box>

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
              Interet
            </Typography>
          </Box>

          <Box
          sx={{display:"flex",
          justifyContent:"space-around",
          mt:2
          }}>
            <Typography>
              Manga
            </Typography>
            <Typography>
             Sport
            </Typography>
            <Typography>
              Aqua-Poney
            </Typography>
          </Box>
          <Box
          sx={{display:"flex",
          justifyContent:"space-around",
          mt:2
          }}>
            <Typography>
              Cuisiner
            </Typography>
            <Typography>
            Coder
            </Typography>
            <Typography>
              Cinéma
            </Typography>
          </Box>
        </Box>
        </Masonry>
 {/* BOX FORMATION*/}
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            height: "auto",
            borderRadius: 1,
            my: 4,
          }}
        >
          {/* Titre section Formation */}
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
              Formation
            </Typography>
          </Box>
          <Box
          sx={{display:"flex",
          justifyContent:"space-around",
          bgcolor:"#FF7F50",

          }}>
            <Typography>
              Ecole/Centre
            </Typography>
            <Typography>
              Intilulé
            </Typography>
            <Typography>
             Année
            </Typography>
            <Typography>
            Obtention
            </Typography>
          </Box> 
          <Box
          sx={{display:"flex",
          justifyContent:"space-around",
          mt:2
          }}>
            <Typography>
              Arinfo
            </Typography>
            <Typography>
              Titre Pro DWWM
            </Typography>
            <Typography>
              2020
            </Typography>
            <Typography>
              Oui            
            </Typography>
          </Box>
          <Box
          sx={{display:"flex",
          justifyContent:"space-around",
          mt:2
          }}>
            <Typography>
              Arinfo
            </Typography>
            <Typography>
              Designer Web
            </Typography>
            <Typography>
              2020
            </Typography>
            <Typography>
              Oui            
            </Typography>
          </Box>
         
        </Box>
        {/* Mes CV */}
        <Box
          sx={{
            bgcolor: "#FFFFFF",
            height: "auto",
            borderRadius: 1,
            my: 4,
            width:"auto"
          }}
        >
          {/* Titre section CV */}
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
              Mes CV
            </Typography>
          </Box>
          <Box>
            <ChekboxCV/>
          </Box>
         
        </Box>
        
      </Container>
    </React.Fragment>
  );
};

export default CandidatProfilTest;
