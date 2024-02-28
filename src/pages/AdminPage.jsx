import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import StudentDetails from './StudentDetails';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const AdminPage = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false); // Set the drawer initially closed

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [selectedOption, setSelectedOption] = useState('student');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={open ? handleDrawerClose : handleDrawerOpen}
        edge="start"
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <MenuIcon />
          </IconButton>
        </div>
        <List>
          {['student', 'payment', 'bus'].map((text) => (
            <ListItem button key={text} onClick={() => handleOptionClick(text)}>
              <ListItemText primary={text.charAt(0).toUpperCase() + text.slice(1) + ' Details'} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={`${classes.content} ${open ? classes.contentShift : ''}`}
      >
        <Typography variant="h5" gutterBottom>
          {selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1) + ' Details'}
        </Typography>
        {/* Render respective details based on selectedOption */}
        Example: {selectedOption === 'student' && <StudentDetails />}
      </main>
    </div>
  );
};

export default AdminPage;
