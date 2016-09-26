import React, { Component, PropTypes } from 'react';
import './Course.css';
// import CourseStore from '../../stores/CourseStore';
import FellowStore from '../../stores/FellowStore';

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fellows: FellowStore.getCourseFellows(props.courseId),
    };
    console.log('Init state', this.state);
  }

  componentWillMount() {
    this.setState({
      courseId: this.props.courseId,
    });
    FellowStore.on('change', () => {
      console.log('Init change state', this.state);
      this.setState({
        fellows: FellowStore.getCourseFellows(this.state.courseId),
      });
      console.log('New fellows!!!', this.state);
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log('New props!!!', nextProps);
    this.setState({
      courseId: nextProps.courseId,
      fellows: FellowStore.getCourseFellows(nextProps.courseId),
    });
  }

  render() {
    const { courseId, filter } = this.props;
    console.log('Course state!!!', this.state);
    const FellowComponents = this.state.fellows.map((fellow) => {
      console.log('Fellow', fellow);
      let courseStatus;
      let returnFellow;

      for (const index in fellow.courses) {
        if (fellow.courses[index].id == courseId && fellow.name.toLowerCase().search(filter.toLowerCase()) > -1) {
          courseStatus = fellow.courses[index].status;
          console.log('Course match', fellow.courses[index]);
          returnFellow = <li key={fellow.name}>{fellow.name} course state: {courseStatus}</li>;
        }
      }
      return returnFellow || false;
    });
    return (
            <ul >
              {FellowComponents}
            </ul>
        );
  }
}
