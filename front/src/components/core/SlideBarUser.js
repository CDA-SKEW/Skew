import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { theme } from "configs/theme";
import { Avatar } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Button } from "@mui/material";

export default function SlideBarUser(props) {

    const { drawerWidth, listItems } = props

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
                display={"flex"} justifyContent='start' paddingTop={4} paddingX={2}>
                <Avatar alt="" srcSet="https://thiscatdoesnotexist.com/" sx={{ width: 90, height: 90 }} />
            </Box>

            <Box
                display={"flex"} justifyContent='start' paddingX={3}>
                <Typography variant="h6">
                    Prénom
                </Typography>
            </Box>

            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon >
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mon compte" />
                </ListItem>
            </List>

            <Divider />

            <List>
                <ListItem button>
                    <ListItemIcon >
                        <VpnKeyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mot de passe" />
                </ListItem>
            </List>

            <Divider />

            <List>
                {listItems.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <Box display={"flex"} justifyContent={"center"} marginTop={"auto"} marginBottom={4}>
                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        bgcolor: "#FF7F50",
                        color: "white",
                    }}
                    startIcon={<LogoutIcon />}
                >
                    Logout
                </Button>
            </Box>


        </Drawer>
    );
}

