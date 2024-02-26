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
import PhoneIcon from "@material-ui/icons/Phone"; // Import the Phone icon from Material-UI Icons

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    minHeight: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
    },
    width: "90%", // Adjusted width to make the Paper component wider
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} sm={3}>
          {/* Image at the left side */}
          <img
            src="src\assets\Bus.JPG"
            alt="School Bus Left"
            style={{ maxWidth: "100%" }}
          />
          {/* Contact details */}
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              <PhoneIcon /> Phone number: 9766987118{" "}
              {/* Add the Phone icon before the phone number */}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Registration form in the middle */}
          <RegistrationForm />
        </Grid>
        <Grid item xs={12} sm={3}>
          {/* Notes at the right side */}
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
