import React, { Component } from "react";

class CoursesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: ""
      }
    };
  }

  handleChange(event) {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  }
  render() {
    return (
      <div>
        <h2>Courses</h2>
        <h3>Add Courses</h3>
        <form>
          <input
            type="text"
            value={this.state.course.title}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default CoursesPage;
