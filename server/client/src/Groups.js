import React, { Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Alert } from 'reactstrap';
import { Table } from 'reactstrap';

class Groups extends Component {
  constructor() {
    super();
  }
  render () {
    return (
      <Container fluid>
<br></br>
<br></br>
        <Row>
          <Col>
            GT Ladies
          </Col>
          <Col className="text-white">
            GT Ladies
          </Col>
          <Col className="text-white">
            GT Ladies
          </Col>
          <Col className="text-white">
            GT Ladies
          </Col>
          <Col className="text-white">
            GT Ladies
          </Col>
          <Col>
            <Button color="success">New Score!</Button>{' '}
          </Col>
        </Row>
<br></br>
<br></br>
<br></br>

          <Row>
            <Col>
              <Alert color="secondary">
                Monkey Maire
              </Alert>
            </Col>
            <Col>
              <Alert color="secondary">
                Jazzhands Joscelyn
              </Alert>
            </Col>
            <Col>
              <Alert color="secondary">
                Laughing Lindsay
              </Alert>
            </Col>
            <Col>
              <Alert color="secondary">
                Crazydoglady Chelcie
              </Alert>
            </Col>
            <Col>
              <Alert color="secondary">
                Mushy Miriam :)
              </Alert>
            </Col>
          </Row>
<br></br>
<br></br>
<br></br>
          <Table dark>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Group Name</th>
                      <th>Player Name</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>GT Ladies</td>
                      <td>Jazzhands Joscelyn</td>
                      <td>980234</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>GT Ladies</td>
                      <td>Monkey Maire</td>
                      <td>864532</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>GT Ladies</td>
                      <td>Laughing Lindsay</td>
                      <td>821906</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>GT Ladies</td>
                      <td>Crazydoglady Chelcie</td>
                      <td>075134</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>GT Ladies</td>
                      <td>Mushy Miriam :)</td>
                      <td>00400</td>
                    </tr>
                  </tbody>
                </Table>

      </Container>
    )
  }
}

export default Groups;
