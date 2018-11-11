import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Container, Row, Col } from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Item from './Item'

const styles = theme => ({
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
})

class Category extends Component {

  constructor (props){
    super(props);

    this.state = {
      categories: [],
      colSize: null,
      expanded: false
    };
    this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick() {
    this.setState(
      {expanded: !this.state.expanded}
    );
  };

  componentDidMount (){
    axios.get("api/v1/catalogs/" + this.props.menu)
      .then(response => {
        this.setState({
          categories: response.data,
          colSize: response.data.length < 3 ? null : '4'
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render () {
    const { classes } = this.props;
    const categories = this.state.categories;

    return (
      <Fragment>
        {categories.map(category =>
          <Col md={this.state.columnSize}>
            <Card className='categoryCard'>
              <CardContent>
                <p>{category['name']}</p>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expanded,
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                  >
                    <ExpandMoreIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Col>
        )}
      </Fragment>
    )
  }
}

Category.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Category);
