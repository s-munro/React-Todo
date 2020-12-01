import React from "react";
import TodoForm from "./components/TodoForm";

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

      let newItem = {
        name: this.state.formValue,
        id: Date.now(),
        completed: false,
      };

      this.state.todoItems.push(newItem);
      console.log(this.state.todoItems);
      this.setState({
        formValue: initialValue,
      });
      console.log(this.state.formValue);
    };

    const handleDelete = (e) => {
      e.preventDefault();
      console.log("this should delete something");
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
      </div>
    );
  }
}

export default App;
