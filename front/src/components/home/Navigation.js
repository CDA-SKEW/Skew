import React from "react";
import { NavLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tabs from "@mui/material/Tabs";
import AppBar from "@mui/material/AppBar";

const Navigation = (props) => {
  const { title, link } = props;

  return (
    <div className="navigation" style={{ height: "50px" }}>
      <AppBar position="" color="primary">
        <Box sx={{ flexGrow: 1 }}>
          <Tabs centered>
            <Toolbar variant="dense">
              {" "}
              <IconButton
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography>
                <a href={"/"}>{title}</a>

                {link.map((link) => {
                  return (
                    <NavLink
                      key={link}
                      exact="true"
                      to={"/" + link}
                      activeclassname="active"
                      style={{ color: "#282c34" }}
                    >
                      {/* lien de la page */}
                      {link}
                    </NavLink>
                  );
                })}
              </Typography>
            </Toolbar>
          </Tabs>
        </Box>
      </AppBar>
    </div>
  );
};

export default Navigation;
