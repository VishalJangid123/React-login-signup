import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col, Container } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Header from "./Components/Header/Header";
import Dashboard from './Components/Dashboard/Dashboard';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (

     <div>
       App
     </div>
    );
  }
}

export default App;
