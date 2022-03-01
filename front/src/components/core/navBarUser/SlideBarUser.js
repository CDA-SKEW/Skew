import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { theme } from "configs/theme";
import { Avatar } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ModalConfimation from "components/ModalConfimation";
import { urlImg } from "utils/url";

export default function SlideBarUser(props) {
    const navigate = useNavigate()

    //constante pour le modal contact
    const [openModalConfirmation, setOpenModalConfirmation] = React.useState(false);
    const handleClickOpenModalConfirmation = () => {
        setOpenModalConfirmation(true);
    };
    const handleCloseModalConfirmation = () => {
        setOpenModalConfirmation(false);
    };

    const { drawerWidth, listItems, listItemGeneral, dataProfilUser } = props

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    bgcolor: theme.palette.primary.main,
                    maxHeight: "auto"
                },
                display: { xs: 'none', sm: 'none', md: "block" }

            }}
            variant="permanent"
            anchor="left"
        >

            <Box
                display={"flex"} justifyContent='start' marginTop={2} paddingX={2} >
                {dataProfilUser && (
                    <Avatar alt="" srcSet={`${urlImg  + dataProfilUser.avatar}`} sx={{ width: 90, height: 90 }} />)}
            </Box>

            <Box
                display={"flex"} justifyContent='start' flexWrap={"wrap"} paddingX={3} marginY={2}>
                {dataProfilUser && (
                    <Typography variant="body1" textTransform="uppercase" > 
                        {dataProfilUser.name ? dataProfilUser.name : "John Doe"}
                    </Typography>
                )}
            </Box>

            <Divider />

            <List>
                {listItemGeneral && listItemGeneral.map((listItemGen, index) => (
                    <ListItem button key={index} onClick={() => navigate({ pathname: `/${listItemGen.link}` })}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <SettingsIcon /> : <VpnKeyIcon />}
                        </ListItemIcon>
                        <ListItemText primary={listItemGen.name} />
                    </ListItem>

                ))}
            </List>
            <Divider />


            <List>
                {listItems && listItems.map((text, index) => (
                    <ListItem button key={index} onClick={() => navigate({ pathname: `/${text.link}` })}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <LocalOfferIcon /> : <ManageSearchIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text.name} />
                    </ListItem>
                ))}
            </List>
            <Divider />

            <Box display={"flex"} justifyContent={"center"} marginTop={"auto"} marginBottom={4}>
                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        bgcolor: "#FF7F50",
                        color: "white",
                    }}
                    startIcon={<LogoutIcon />}
                    onClick={handleClickOpenModalConfirmation}
                >
                    Logout
                </Button>

                <ModalConfimation
                    keepMounted
                    open={openModalConfirmation}
                    onClose={handleCloseModalConfirmation}
                    titleModal="Déconnexion"
                    textModal="Êtes-vous sûr de vouloir vous deconnecter?"
                    colorBgModal="#ABC4FF"
                    colorTextModal="#000000"
                    action="disconnect"
                />
            </Box>


        </Drawer>
    );
}

