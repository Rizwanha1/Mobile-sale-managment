import * as React from "react";

import { Container, Grid, Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "./logo.png";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import "./header.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { AppRegistration, ContactSupport, Home, Login, MenuOutlined, Sell, TrackChanges, Upload } from "@mui/icons-material";

export default function Header({ currentUser, setcurrentUser }) {
  // Active Links Handler for DeskTop
  let navLinks = document.getElementsByClassName("navItems");
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }






  // Menu Open Direction Handler
  let dir = "right";
  const [state, setState] = React.useState({});
  const toggleDrawer = (open) => () => {
    setState({ [dir]: open });
  };

  return (
    <>
      <Box>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            mt={3}

          >
            {/* logo  */}
            <Grid item xs={6} sm={2} md={2} lg={2} style={{ color: "white" }}>
              <Link to="/">
                <img src={Logo} alt={Logo} width="100%" />
              </Link>
            </Grid>
            {/* my links  */}
            <Hidden mdDown>
              <Grid
                container
                item
                xs={10}
                sm={10}
                md={10}
                lg={10}
                justifyContent="flex-end"
                alignItems="center"
                columnSpacing={2}
              >
                <Grid item style={{ textAlign: "center" }}>
                  <Typography
                    paragraph
                    fontSize={{ xs: "15px", md: "14px" }}
                  >
                    <Link
                      className='navItems active'
                      to='/'
                      style={{
                        textDecoration: "none",
                        padding: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Home
                    </Link>
                  </Typography>
                </Grid>


                <Grid item style={{ textAlign: "center" }}>
                  <Typography
                    paragraph
                    fontSize={{ xs: "15px", md: "14px" }}
                  >
                    <Link
                      className='navItems'
                      to='./uploadrecord'
                      style={{
                        textDecoration: "none",
                        padding: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Upload
                    </Link>
                  </Typography>
                </Grid>



                <Grid item style={{ textAlign: "center" }}>
                  <Typography
                    paragraph
                    fontSize={{ xs: "15px", md: "14px" }}
                  >
                    <Link
                      className='navItems'
                      to='./trackmobile'
                      style={{
                        textDecoration: "none",
                        padding: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Track
                    </Link>
                  </Typography>
                </Grid>




                <Grid item style={{ textAlign: "center" }}>
                  <Typography
                    paragraph
                    fontSize={{ xs: "15px", md: "14px" }}
                  >
                    <Link
                      className='navItems'
                      to='./contact'
                      style={{
                        textDecoration: "none",
                        padding: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Contact
                    </Link>
                  </Typography>
                </Grid>


                {
                  currentUser.isAdmin == true ? <Grid item style={{ textAlign: "center" }}>
                    <Typography
                      paragraph
                      fontSize={{ xs: "15px", md: "14px" }}
                    >
                      <Link
                        className='navItems'
                        to='./sellerinfo'
                        style={{
                          textDecoration: "none",
                          padding: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        Sellers
                      </Link>
                    </Typography>
                  </Grid> : null
                }




                {
                  currentUser ? <Grid item style={{ textAlign: "center" }}>
                    <Typography
                      paragraph
                      fontSize={{ xs: "15px", md: "14px" }}
                    >
                      <Link
                        onClick={() => setcurrentUser(false)}
                        to='./'
                        style={{
                          textDecoration: "none",
                          padding: "10px",
                          fontWeight: "bold",
                          padding: '9px 30px',
                          backgroundColor: '#2D454F',
                          border: 'none',
                          color: 'white',
                          borderRadius: '27px',
                        }}
                      >
                        Log Out
                      </Link>
                    </Typography>
                  </Grid> : <>



                    <Grid item style={{ textAlign: "center" }}>
                      <Typography
                        paragraph
                        fontSize={{ xs: "15px", md: "14px" }}
                      >
                        <Link

                          to='./login'
                          style={{
                            textDecoration: "none",
                            padding: "10px",
                            fontWeight: "bold",
                            padding: '9px 30px',
                            backgroundColor: '#2D454F',
                            border: 'none',
                            color: 'white',
                            borderRadius: '27px',
                          }}
                        >
                          Log In
                        </Link>
                      </Typography>
                    </Grid>




                    <Grid item style={{ textAlign: "center" }}>
                      <Typography
                        paragraph
                        fontSize={{ xs: "15px", md: "14px" }}
                      >
                        <Link

                          to='./signup'
                          style={{
                            textDecoration: "none",
                            padding: "10px",
                            fontWeight: "bold",
                          }}
                        >
                          Sign Up
                        </Link>
                      </Typography>
                    </Grid>
                  </>
                }


              </Grid>
            </Hidden>

            <Hidden mdUp>
              <>
                <MenuOutlined
                  sx={{
                    color: "#2D484F",
                    fontSize: "35px",
                    "&:hover": { cursor: "pointer" },
                  }}
                  onClick={toggleDrawer(dir, true)}
                />

                <SwipeableDrawer
                  anchor={dir}
                  open={state[dir]}
                  onClose={toggleDrawer(false)}
                  onOpen={toggleDrawer(true)}
                >
                  <Box
                    sx={{
                      width: 200,
                      marginLeft: "1vw",
                      marginRight: "1vw",
                      marginTop: "5vh",
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                  >
                    <img src={Logo} alt={Logo} width="90%" />
                    <List>
                      {[
                        { name: "Home", link: "/", classes: "navItemsMobile  activeMobileMenu", icon: <Home sx={{ color: "#FFC90D" }} /> },
                        { name: "Upload", link: "./uploadrecord", classes: "navItemsMobile ", icon: <Upload sx={{ color: "#FFC90D" }} /> },
                        { name: "Track", link: "./trackmobile", classes: "navItemsMobile ", icon: <TrackChanges sx={{ color: "#FFC90D" }} /> },
                        { name: "Contact", link: "./contact", classes: "navItemsMobile ", icon: <ContactSupport sx={{ color: "#FFC90D" }} /> },
                      ].map((obj, index) => {
                        return (
                          <ListItem>
                            <ListItemIcon >{obj.icon} </ListItemIcon>
                            <Link
                              to={obj.link}
                              className={obj.classes}
                              style={{ textDecoration: "none" }}
                            >
                              <ListItemText primary={obj.name} />
                            </Link>
                          </ListItem>
                        );
                      })}
                      {
                        currentUser.isAdmin ? <ListItem>
                          <ListItemIcon ><Sell sx={{ color: "#FFC90D" }} /> </ListItemIcon>
                          <Link
                            onClick={() => setcurrentUser(false)}
                            to='/sellerinfo'
                            className="navItemsMobile "
                            style={{ textDecoration: "none" }}
                          >
                            <ListItemText primary={'Sellers'} />
                          </Link>
                        </ListItem> : null
                      }
                      {
                        currentUser ? <ListItem>
                          <ListItemIcon ><Login sx={{ color: "#FFC90D" }} /> </ListItemIcon>
                          <Link
                            onClick={() => setcurrentUser(false)}
                            to='/'
                            className="navItemsMobile "
                            style={{ textDecoration: "none" }}
                          >
                            <ListItemText primary={'Log Out'} />
                          </Link>
                        </ListItem> : <>
                          <ListItem>
                            <ListItemIcon ><Login sx={{ color: "#FFC90D" }} /> </ListItemIcon>
                            <Link
                              to='/login'
                              className="navItemsMobile "
                              style={{ textDecoration: "none" }}
                            >
                              <ListItemText primary={'Log In'} />
                            </Link>
                          </ListItem>
                          {/* signUp */}

                          <ListItem>
                            <ListItemIcon ><AppRegistration sx={{ color: "#FFC90D" }} /> </ListItemIcon>
                            <Link
                              to='/signup'
                              className="navItemsMobile "
                              style={{ textDecoration: "none" }}
                            >
                              <ListItemText primary={'Sign Up'} />
                            </Link>
                          </ListItem>
                        </>
                      }
                    </List>
                  </Box>
                </SwipeableDrawer>
              </>
            </Hidden>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
