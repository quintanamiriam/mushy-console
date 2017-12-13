import React, { Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Alert } from 'reactstrap';
import { Table } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

class Main extends Component {
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

        <div>
   <Card>
     <CardImg top width="100%" src="./images/Mushy.jpg"/>
     <CardBody>
        <CardTitle><Button outline color="secondary">Galvanize</Button></CardTitle>
       <CardSubtitle>Players: 4</CardSubtitle>
       <CardText>Top player: Mushy Miriam :)</CardText>
       <Row>
         <Col>
           <Button color="success">New Score!</Button>{' '}
          <Button color="danger">Delete Group</Button>{' '}
         </Col>
       </Row>
     </CardBody>
   </Card>
   <Card>
     <CardImg top width="100%" src="./images/Mushy.jpg"/>
     <CardBody>
       <CardTitle><Button outline color="secondary">GT Ladies</Button></CardTitle>
       <CardSubtitle>Players: 5</CardSubtitle>
       <CardText>Top player:</CardText>
       <Row>
         <Col>
           <Button color="success">New Score!</Button>{' '}
          <Button color="danger">Delete Group</Button>{' '}
         </Col>
       </Row>
     </CardBody>
   </Card>
   <br></br>
   <Button>Create a new Group</Button>
 </div>
      </Container>
    )
  }
}

export default Main;
