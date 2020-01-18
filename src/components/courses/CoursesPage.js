import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as coursesActions from "../../redux/actions/courseActions";
import * as authorsActions from "../../redux/actions/AuthorActions";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends Component {
  componentDidMount() {
    // add destructuring code
    if (this.props.courses.length === 0) {
      this.props.loadCourses().catch(error => {
        alert("Loading courses failfed" + error);
      });
    }
    if (this.props.authors.length === 0) {
      this.props.loadAuthors().catch(error => {
        alert("Loading auhors failed" + error);
      });
    }
  }
  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map(course => {
            return {
              ...course,
              authorName: state.authors.find(a => a.id === course.authorId).name
            };
          }),
    authors: state.authors
  };
};
const mapDispatchToProps = dispatch => ({
  loadCourses: bindActionCreators(coursesActions.loadCourses, dispatch),
  loadAuthors: bindActionCreators(authorsActions.loadAuthors, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
