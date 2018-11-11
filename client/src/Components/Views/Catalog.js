import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Container, Row, Col } from 'reactstrap';
import Category from './Category'

class Catalog extends Component {
  constructor () {
    super()
    this.state = {
      catalogs: [],
    }

    this.fetchCatalogs = this.fetchCatalogs.bind(this);
  }
  fetchCatalogs() {
    axios.get('api/v1/catalogs')
      .then(response => {
        this.setState({catalogs: response.data});
      })
      .catch(error => {
        console.error(error);
      })
  }

  componentDidMount () {
    this.fetchCatalogs();
  }

  render () {
    const {catalogs} = this.state;

    return (
      <div className="catalogs_container">
        <Container>
          <Row>
            <Col>
              <h2>Menus</h2>
                {catalogs.map(catalog =>
                  <Row>
                  <Col md='12'>
                    <Card className='catalogCard'>
                      <CardContent>
                        <p>{catalog['name']}</p>
                        <Row>
                          {<Category menu={catalog['id']} />}
                        </Row>
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
