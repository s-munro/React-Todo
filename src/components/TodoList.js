import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    console.log("props: ", this.props);
    return (
      <div>
        {this.props.todoItems.map((item) => {
          return (
            <Todo
              item={item}
              key={item.id}
              onClick={this.props.handleCheck}
              handleCheck={this.props.handleCheck}
            />
          );
        })}
      </div>
    );
  }
}
export default TodoList;
