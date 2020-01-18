import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as coursesActions from "../../redux/actions/courseActions";
import { bindActionCreators } from "redux";

class CoursesPage extends Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createCourse(this.state.course);
  };
  render() {
    return (
      <div>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.course.title}
            onChange={this.handleChange}
          />
          {this.props.courses.map(course => {
            return <div key={course.title}>{course.title}</div>;
          })}
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    courses: state.courses
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(coursesActions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
