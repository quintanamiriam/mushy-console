import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Alert } from "reactstrap";

class CreateTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false
    }
  }

  createTeam = () => {
    return fetch("/api/v1/teams", {
      method: "POST",
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify({
        title: document.querySelector('.team.title').value
      })
    })
    .then(res => res.json())
    .then(result => this.setState({success: true}))
    .catch(err => this.setState({success: false, error: err}))
  }

  render() {
    return (
      <Container fluid>
        <br />
        <br />
        <Row>
          <Col>Welcome Mushy Miriam :)!</Col>
        </Row>
        <br />
        <br />
        <br />

        <Form className='teamForm'>
          <Row>Create a Team:</Row>
          <Row>
            <Col>{!this.state.success ? 'Submit the form' : 'Successfully Created'}</Col>
          </Row>

          <br />
          <Input className='team title' name='title' placeholder="Team Name" />
          <br />
          <br />
          <Button onClick={this.createTeam}>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default CreateTeam;
