import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";

export const NavBarBot = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Box sx={{ bgcolor: "#f4f4f4" }}>
      <Box className="container">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* urd taliin drop */}

          <Stack direction="row">
            <Box>
              <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                sx={{
                  bgcolor: "#EDA415",
                  color: "#fff",
                  py: "25px",
                  px: "15px",
                  borderRadius: 0,
                  gap: "20px",
                  "&:hover": {
                    backgroundColor: "#EDA415",
                  },
                }}
              >
                Browse categories <KeyboardArrowDownIcon />
              </Button>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          sx={{ width: "216px" }}
                        >
                          <MenuItem onClick={handleClose}>Categories</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Box>
          </Stack>
          {/* goliin dropdown */}
          <Box
            sx={{
              display: "flex",
              paddingLeft: "98px",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* ehnii dropdown */}
            <Stack direction="row">
              <Box>
                <Button
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? "composition-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                  sx={{
                    py: "23px",
                    px: "15px",
                    borderRadius: 0,
                    color: "#000",
                    gap: "20px",
                    textTransform: "inherit",
                    fontSize: "16px",
                  }}
                >
                  Home <KeyboardArrowDownIcon />
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom-start"
                            ? "left top"
                            : "left bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            sx={{ width: "216px" }}
                          >
                            <MenuItem onClick={handleClose}>Pages</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Box>
            </Stack>
            {/* 2dahi dropdown */}
            <Stack direction="row">
              <Box>
                <Button
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? "composition-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                  sx={{
                    py: "23px",
                    px: "15px",
                    borderRadius: 0,
                    color: "#000",
                    gap: "20px",
                    textTransform: "inherit",
                    fontSize: "16px",
                  }}
                >
                  Catalog <KeyboardArrowDownIcon />
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom-start"
                            ? "left top"
                            : "left bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            sx={{ width: "216px" }}
                          >
                            <MenuItem onClick={handleClose}>
                              catalogs catalog
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Box>
            </Stack>
            {/* goliin button */}
            <Typography sx={{ textAlign: "center" }}>
              <Button
                sx={{
                  color: "#000",
                  textTransform: "initial",
                  fontSize: "16px",
                }}
              >
                Blog
              </Button>
            </Typography>
            {/*3dahi dropdown*/}
            <Stack direction="row">
              <Box>
                <Button
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? "composition-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                  sx={{
                    py: "23px",
                    px: "15px",
                    borderRadius: 0,
                    color: "#000",
                    gap: "20px",
                    textTransform: "inherit",
                    fontSize: "16px",
                  }}
                >
                  Pages <KeyboardArrowDownIcon />
                </Button>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  placement="bottom-start"
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === "bottom-start"
                            ? "left top"
                            : "left bottom",
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            sx={{ width: "216px" }}
                          >
                            <MenuItem onClick={handleClose}>
                              Our members
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </Box>
            </Stack>
            s{/* suulin button */}
            <Typography sx={{ textAlign: "center" }}>
              <Button
                sx={{
                  color: "#000",
                  textTransform: "initial",
                  fontSize: "16px",
                }}
              >
                About Us
              </Button>
            </Typography>
          </Box>
          {/* zai avj bga heseg */}
          <Box sx={{ flexGrow: 1 }}></Box>
          {/* hoitliin heseg */}
          <Box>
            <Typography
              sx={{ color: "#003F62", fontSize: "16px", fontWeight: "700" }}
            >
              30 Days Free Return
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
