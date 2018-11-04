import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Container, Row, Col } from 'reactstrap';
import MenuCategory from './MenuCategory'

class Catalog extends Component {
  constructor () {
    super()
    this.state = {
      catalogs: [],
      items: [],
    }

    this.fetchMenus = this.fetchMenus.bind(this);
    this.fetchItems = this.fetchItems.bind(this);
  }
  fetchMenus() {
    axios.get('api/v1/catalogs')
      .then(response => {
        this.setState({catalogs: response.data});
      })
      .catch(error => {
        console.error(error);
      })
  }

  fetchItems() {
    axios.get('api/v1/items')
      .then(response => {
        this.setState({items: response.data});
      })
      .catch(error => {
        console.error(error);
      })
  }

  componentDidMount () {
    this.fetchMenus();
    this.fetchItems();
  }

  render () {
    const {catalogs, items} = this.state;

    return (
      <div className="catalogs_container">
        <Container>
          <Row>
            <Col md='9'>
              <h2>Menus</h2>
                {catalogs.map(catalog =>
                  <Row>
                  <Col md='12'>
                    <Card className='catalogCard'>
                      <CardContent>
                        <p>{catalog['name']}</p>
                        <Row>
                          {<MenuCategory menu={catalog['id']} />}
                        </Row>
                      </CardContent>
                    </Card>
                  </Col>
                </Row>
                )}
            </Col>
            <Col md="3">
              <h2>
                Items
              </h2>
              {items.map(item =>
                <Row>
                <Col md='12'>
                  <Card className='catalogCard'>
                    <CardContent>
                      <p>{item['name']}</p>
                    </CardContent>
                  </Card>
                </Col>
              </Row>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Catalog;
