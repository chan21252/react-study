import React, {Component} from 'react';
import {connect} from "react-redux";
import {nanoid} from "nanoid";
import {createPersonAddAction, createPersonDeleteAction} from "../../redux/action/person_action";

class Person extends Component {
  state = {
    inputName: '',
    inputAge: 0,
  }

  handleInputChange = (field) => {
    return (event) => {
      const {value} = event.target;
      this.setState({[field]: value});
    }
  }

  handleAdd = () => {
    const {inputName, inputAge} = this.state;
    const person = {
      id: nanoid(),
      name: inputName,
      age: inputAge * 1
    }

    this.props.add(person);
  }

  render() {
    const persons = this.props.persons;
    return (
      <form>
        <div className="form-group form-row">
          <input type="text" className="col-4 form-control mr-2" placeholder="name"
                 onChange={this.handleInputChange('inputName')}/>
          <input type="number" className="col-4 form-control mr-4" placeholder="age"
                 onChange={this.handleInputChange('inputAge')}/>
          <button type="button" className="col-2 btn btn-outline-primary" onClick={this.handleAdd}>添加</button>
        </div>
        <div className="form-group">
          <ul className="list-group">
            {
              persons.map((person) => {
                return <li key={person.id} className="list-group-item">{person.name}: {person.age}</li>
              })
            }
          </ul>
        </div>
      </form>
    );
  }
}

export default connect(
  (state) => ({persons: state.persons}),
  {
    add: createPersonAddAction,
    delete: createPersonDeleteAction
  }
)(Person);