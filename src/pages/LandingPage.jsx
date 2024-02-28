import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import Navbar from "../components/Navbar";
import {
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid container spacing={3} justifyContent="center">
        {/* Left Section */}
        <Grid item xs={12} sm={3}>
          <div className={classes.imageContainer}>
            <img
              src="src\assets\Bus.JPG"
              alt="School Bus"
              className={classes.image}
            />
          </div>
          {/* Contact Details */}
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              <PhoneIcon /> Phone number: 9766987118
            </Typography>
          </Paper>
        </Grid>
        {/* Middle Section */}
        <Grid item xs={12} sm={6}>
          <RegistrationForm />
        </Grid>
        {/* Right Section */}
        <Grid item xs={12} sm={3}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Please Note:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="1. Transport fees are non-refundable and non-adjustable." />
              </ListItem>
              <ListItem>
                <ListItemText primary="2. We will try to give you the nearest pick-up point, need not necessarily be the building gate." />
              </ListItem>
              <ListItem>
                <ListItemText primary="3. If the lane is narrow or road repair work is going on, you will have to come further from your stop for pick-up and drop-off." />
              </ListItem>
              <ListItem>
                <ListItemText primary="4. Payment for 11 months (term is 2 terms in a year) will be taken: 1st - 21st March to 31st March, 2nd - 1st August to 31st August. All RTO guidelines will be followed including GPS, Lady Attendant, and CCTV Camera." />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
