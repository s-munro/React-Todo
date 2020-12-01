import React from "react";
import "./Todo.css";

class Todo extends React.Component {
  render() {
    const handleClick = (e) => {
      this.props.handleCheck(this.props.item.id, e);
    };

    return (
      <div>
        <div onClick={handleClick}>{this.props.item.name}</div>
      </div>
    );
  }
}
export default Todo;
