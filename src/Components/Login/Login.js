import React, { Component } from 'react';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import history from '../history';


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = { redirect_val: false, }
    }


    handleLogin() {
        let login_values = [];
        let status = '';
        var form_all = document.getElementsByTagName("input");
        console.log(form_all);
        for (var i = 0; i < form_all.length; i++) {


            login_values[i] = form_all[i].value;


        }
        console.log(login_values);
        const user_login = {
            'username': login_values[0],
            'password': login_values[1]
          
        }
        console.log('Values', user_login);
        axios.post(`http://localhost:3000/api/auth/login`, user_login)
            .then(res => {
                console.log(res);
                console.log(res.data.success);
                localStorage.setItem('jwtToken', res.data.token);
                history.push('/dashboard');
            })
            .catch((error) => {
                if(error.response.status === 401) {
                  console.log('Login failed. Username or password not match');
                }
              });
        

    }

    render() {
        const style_card = {
            width: '20%',
            justifyContent: 'center',
            display: 'flex'
        }
     
        return (
           
            <div style={style_card}>
                <Card>

                    <CardBody style={{textAlign:'center'}}>
                        <CardTitle style={{textAlign:'center'}}>Login</CardTitle>
                        <Form>
                            <FormGroup>
                              
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                            </FormGroup>
                            <FormGroup>
                              
                                <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                            </FormGroup>
                            <FormGroup>
                            </FormGroup>
                            <Button color='primary' style={{textAlign:'center',}} onClick={this.handleLogin}>Login</Button>
                        </Form>
                    </CardBody>
                </Card>
              
            </div>
          
            
        );
    }
}

export default Login;
