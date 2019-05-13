import React, { Component } from 'react';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import swal from 'sweetalert';

import  { Redirect,Link } from 'react-router-dom'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = { signup_status: 'Status', }
    }


    handleSignup() {
        let signup_values = [];
        let status = '';
        var form_all = document.getElementsByTagName("input");
        console.log(form_all);
        for (var i = 0; i < form_all.length; i++) {


            signup_values[i] = form_all[i].value;


        }
        console.log(signup_values);
        const user_signup = {
            'username': signup_values[1],
            'password': signup_values[2],
            'fullname': signup_values[0]
        }
        console.log('Values', user_signup);
        axios.post(`http://localhost:3000/api/auth/register`, user_signup)
            .then(res => {
                console.log(res);
                console.log(res.data.msg);
                if (res.data.success) {
                    swal("Hello  " + signup_values[0], res.data.msg, "success",{
                        button: {
                            text: "Login Now !!",
                            value: "catch",
                        } 
                    })
                    .then((value) => {
                        return <Redirect to='/login'  />
                          
                     
                      });
                    
                    
                }
                this.setState({ signup_status: status });
                console.log('Status out', status);
                console.log('Sign up Status', this.state.signup_status)

            })


    }
    render() {
        const style_card = {
            width: '20%',
            justifyContent: 'center',
        }
        return (
            <div>

                <div style={style_card}>
                    <Card>

                        <CardBody style={{ textAlign: 'center' }}>
                            <CardTitle style={{ textAlign: 'center' }}>Sign Up</CardTitle>
                            <Form>

                                <FormGroup>

                                    <Input type="text" name="name_signup" id="name_signup" placeholder="Full Name" />
                                </FormGroup>

                                <FormGroup>

                                    <Input type="email" name="email_signup" id="email_signup" placeholder="Email" />
                                </FormGroup>
                                <FormGroup>

                                    <Input type="password" name="password_signup" id="password_signup" placeholder="Password" />
                                </FormGroup>
                                <FormGroup>
                                </FormGroup>
                                <Button color='primary' style={{ textAlign: 'center', }} onClick={this.handleSignup}>Sign Up</Button>
                            </Form>
                        </CardBody>
                    </Card>

                </div>
                <p>{this.state.signup_status}</p>
              


            </div>
        );
    }
}

export default Signup;
