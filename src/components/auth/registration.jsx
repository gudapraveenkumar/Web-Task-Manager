import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { signupActionHandler } from '../../redux-store/actions/auth-actions';
import { connect } from 'react-redux';

class Registration extends Component {
   state = { 
      signupData:{
         username:'',
         password: '',
         email:''
      }
   };

   handleChange = ({currentTarget: input}) =>{
      const signupData = {...this.state.signupData};
      signupData[input.name] = input.value;
      this.setState({signupData});
    };

    handleRegisterSubmit = e =>{
      e.preventDefault();
      this.props.onRegister(this.state.signupData);
    };

   render() { 
      const {email, username, password} = this.state.signupData;
      return ( 
         <Container>
            <Row className="justify-content-center">
               <Col xs={10} sm={8} md={5}>
               <Card>
                     <Card.Body>
                        <Card.Title className="text-center">Register</Card.Title>
                        <br></br>
                        <div>
                           <Form onSubmit={this.handleRegisterSubmit}>
                              <Form.Group controlId="formBasicEmail">
                                 <Form.Label>Email Id</Form.Label>
                                 <Form.Control type="email" value={email} name="email" onChange={this.handleChange} placeholder="Enter email" />
                              </Form.Group>

                              <Form.Group controlId="formBasicEmail">
                                 <Form.Label>Username</Form.Label>
                                 <Form.Control type="text" value={username} name="username" onChange={this.handleChange} placeholder="Enter username" />
                              </Form.Group>

                              <Form.Group controlId="formBasicPassword">
                                 <Form.Label>Password</Form.Label>
                                 <Form.Control type="password" value={password} name="password" onChange={this.handleChange} placeholder="Password" />
                              </Form.Group>
                           
                              <div style={{textAlign:"right"}}>
                                 <Button type="submit" variant="primary">Register</Button>
                              </div>
                           </Form>
                        </div>
                     </Card.Body>
                  </Card>
                  <div  className="text-center">
                     Already have an account <Button variant="link"><Link to="/login">Login</Link></Button>
                  </div>
                           
               </Col>
            </Row>
         </Container>
       );
   }
};

const mapsDispatchToProps = dispatch =>{
   return{
      onRegister: (signupData) => dispatch(signupActionHandler(signupData))
   }
};
 
export default connect(null, mapsDispatchToProps)(Registration);