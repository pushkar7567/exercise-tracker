import React, { Component} from "react";

class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.state= {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.targer.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    render() {
        return (
            <div>
                <p>You are on the CreateExercise List component!</p>
            </div>
        );
    }
}

export default CreateExercise;