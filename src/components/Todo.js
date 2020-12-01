import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div>
        <div onClick={this.props.handleCheck}>{this.props.item.name}</div>
      </div>
    );
  }
}
export default Todo;
