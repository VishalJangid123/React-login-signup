import React, { Component } from 'react';
import axios from 'axios';
import history from '../history';


class Dashboard extends Component {

    componentDidMount() {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        let v = localStorage.getItem('jwtToken');
        axios.get('http://localhost:3000/api/signup/get')
          .then(res => {
           
            console.log(res.data);
          })
          .catch((error) => {
            if(error.response.status === 401) {
              history.push("/login");
            }
          });
      }

      logout = () => {
        localStorage.removeItem('jwtToken');
        window.location.reload();
      }
    

    render() {
    return (
     <div>
         Vishal
         <button onClick = {this.logout}>Log out</button>
      </div>
    );
  }
}

export default Dashboard;
