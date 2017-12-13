import React, { Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignInRegister extends Component {
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
            Sign in or Register to join your group!
          </Col>
        </Row>
        <Form>
          <FormGroup>
            <Label for="exampleEmail"></Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword"></Label>
            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
          </FormGroup>
          <br></br>
          <Input placeholder="Player Name" />
          <br></br>
          <Button>Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default SignInRegister;
