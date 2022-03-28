import { Box, Button, Typography } from "@mui/material"
import Img404 from "assets/404/404.png"
import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {

  const navigate = useNavigate()


  return (
    <Box sx={{
      width: "100vw",
      height: "100vh",
      marginLeft: "auto",
      backgroundImage: `url(${Img404})`,
      backgroundPosition: "top ",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
    }}
    >
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transform: { xl:"translateY(160px)", lg:"translateY(120px)", md:"translateY(90px)", sm:"translateY(50px)", xs:"translateY(20px)" }

      }} 
      >

        < Typography fontWeight={"bold"} color='white' fontSize={{ xl: 120, lg: 100, md: 80, sm: 60, xs: 50 }}  > 404</Typography>
        < Typography fontWeight={"bold"} color='white' fontSize={{ xl: 60, lg: 50, md: 40, sm: 30, xs: 20 }}>OOPS !</Typography>
        < Button variant="outlined" sx={{ backgroundColor: "#FF7F50", color: "white", mt: 2 }}
          onClick={() => navigate({ pathname: "/" })}

        >Back to home</Button>

        {/* <Typography fontWeight={"bold"} fontSize={120} color='white' position={"relative"} top={250} left={580}>404</Typography>
      <Typography fontWeight={"bold"} fontSize={60} color='white' position={"absolute"} top={400} left={580}>OOPS !</Typography> */}

      </Box>

    </Box >
  );
};

export default PageNotFound;
