import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Container, Row, Col } from 'reactstrap';

class Item extends Component {
  constructor (props){
    super(props);

    this.state = {
      itemBody: [],
      showResults: false,
    };
  }

  componentDidMount (){
    axios.get("api/v1/items/" + this.props.item_id)
      .then(response => {
        this.setState({
          categories: response.data
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render () {
    const {categories} = this.state;

    return (
      <Fragment>
        <Card className='itemCard'>
          <CardContent>
            <p>{this.state.itemBody['name']}</p>
          </CardContent>
        </Card>
      </Fragment>
    )
  }
}

export default Item;
