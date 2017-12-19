import React, { Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Alert } from 'reactstrap';
import { Table } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

class NewScoreInput extends Component {
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
            Mushy Miriam :), add your score:
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Form>
        <FormGroup>
          <Label for="exampleEmail"></Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword"></Label>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail"></Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Score" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Upload a picture of your score on the screen:</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="white">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <Button color="success">Add!</Button>{' '}
      </Form>
      </Container>
    )
  }
}

export default NewScoreInput;
