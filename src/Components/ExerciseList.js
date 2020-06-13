import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class ExerciseList extends Component {
    constructor(props) {
        super(props);
        this.deleteExercise = this.deleteExercise.bind(this);
        this.state = {exercises: []}
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState({exercises: response.data});
            })
            .catch(err => {
                console.log(err);
            })
    }   

    deleteExercise(id) {
        axios.delete('http://localhost:5000/exercises/')
            .then(res => console.log(res));
        
        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })

    }

    render() {
        return(
            <div>
                <h3>Logged exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ExerciseList;