import React, { Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Alert } from 'reactstrap';

class CreateGroup extends Component {
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
            Welcome Mushy Miriam :)!
          </Col>
        </Row>
<br></br>
<br></br>
<br></br>

          <Row>
            <Col>
              Create a group and add friends to let the games begin:
            </Col>
          </Row>


          <br></br>
          <Input placeholder="Group Name" />
          <br></br>
          <br></br>
          <Input placeholder="User Name / Email" />
          <br></br>
          <Input placeholder="User Name / Email" />
          <br></br>
          <Input placeholder="User Name / Email" />
          <br></br>
          <Input placeholder="User Name / Email" />
          <br></br>
          <Button>Submit</Button>

      </Container>
    )
  }
}

export default CreateGroup;
