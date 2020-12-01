import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./components/Todo.css";

const initialValue = "";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: [],
      formValue: "",
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    const handleChange = (e) => {
      console.log("test");
      this.setState({
        formValue: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      // establishing 'newItem' variable, to be pushed
      let newItem = {
        name: this.state.formValue,
        id: Date.now(),
        completed: false,
      };
      // pushing newItem into the array and resetting form
      this.state.todoItems.push(newItem);
      this.setState({
        formValue: initialValue,
      });
      console.log(this.state.formValue);
    };

    const handleDelete = (e) => {
      e.preventDefault();
      console.log("this should delete something");
    };

    const handleCheck = (e) => {
      e.target.classList.toggle("checked");
      console.log("click!");
    };

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          formValue={this.state.formValue}
        />
        <TodoList todoItems={this.state.todoItems} handleCheck={handleCheck} />
      </div>
    );
  }
}

export default App;
