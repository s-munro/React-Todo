import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            onChange={this.props.handleChange}
            placeholder="Enter an Item"
            value={this.props.formValue}
          />
          <button>Submit</button>
        </form>
        <form onSubmit={this.props.handleDelete}>
          <button>Delete Checked Items</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
