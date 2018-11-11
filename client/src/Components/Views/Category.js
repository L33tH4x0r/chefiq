import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Container, Row, Col } from 'reactstrap';
import Item from './Item'

class Category extends Component {
  constructor (props){
    super(props);

    this.state = {
      categories: [],
      colSize: null
    };
  }

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
    const categories = this.state.categories;

    return (
      <Fragment>
        {categories.map(category =>
          <Col md={this.state.columnSize}>
            <Card className='categoryCard'>
              <CardContent>
                <p>{category['name']}</p>
              </CardContent>
            </Card>
          </Col>
        )}
      </Fragment>
    )
  }
}

export default Category;
