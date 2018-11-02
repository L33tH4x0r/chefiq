import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import {Header} from './Layouts'
import Excersizes from './Excersizes'

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import {
    SwipeableDrawer, AppBar, Toolbar, List, Typography, IconButton, Icon, Hidden,
    Divider, ListItem, ListItemIcon, ListItemText, Button
  } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const styles = theme => ({
  list:{
    width: 250,
  },
  root: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});


class App extends Component {
  state = {
    isOpen: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      isOpen: open,
    });
  };

  render() {
    const classes = this.props;

    const Index = () => <h2>Home</h2>;
    const Secondary = () => <h2>Secondary</h2>;

    const drawer = (
        <Fragment>
          <div className={classes.toolbar} />
          <Divider />
          <List>
            <ListItem>
              <ListItemIcon>{<InboxIcon />}</ListItemIcon>
              <ListItemText>
                <Link to="/">Home</Link>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>{<MailIcon />}</ListItemIcon>
              <ListItemText>
                <Link to="/secondary">Secondary</Link>
              </ListItemText>
            </ListItem>
          </List>
        </Fragment>
    );

    return (
      <div className={classes.root}>
        <Router>
          <Fragment>
            <AppBar position="static">
              <Toolbar>
                <Container>
                  <Row>
                    <Col xs="1">
                      <IconButton
                        className={classes.menuButton, "float-left"}
                        onClick={this.toggleDrawer(true)}
                        color="inherit"
                        aria-label="Menu">
                        <MenuIcon />
                      </IconButton>
                    </Col>
                    <Col xs="9">
                      <Typography variant="h6" color="inherit" className={classes.grow, "text-center"}>
                        ChefIQ
                      </Typography>
                    </Col>
                    <Col xs="2">
                      <Button color="inherit" className="float-right">Login</Button>
                    </Col>
                  </Row>
                </Container>
              </Toolbar>
            </AppBar>
            <SwipeableDrawer
              open={this.state.isOpen}
              onClose={this.toggleDrawer(false)}
              onOpen={this.toggleDrawer(true)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer(false)}
                onKeyDown={this.toggleDrawer(false)}
                >
                {drawer}
              </div>
            </SwipeableDrawer>
            <Route path="/" exact component={Index} />
            <Route path="/secondary" component={Secondary} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

const Main = () => (
  <main>
    <h1>Chef IQ</h1>
    <Route exact path='/' component={Catalogs}/>
  </main>
)

const Catalogs = () => (
  <div>
    <h2>Catalogs</h2>
  </div>
)
App.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(App);
