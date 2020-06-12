import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ExerciseList from "./Components/ExerciseList";
import EditExercise from "./Components/EditExercise";
import CreateExercise from "./Components/CreateExercise";
import CreateUser from "./Components/CreateUser";

class App extends Component {
  render() {
    return(
      <Router>
        <Container>
          <NavBar />
          <br/>
          <Route path="/" exact component={ExerciseList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
        </Container>  
      </Router>
    );
  }
}

export default App;