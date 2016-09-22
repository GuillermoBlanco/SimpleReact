import React, { Component, PropTypes } from 'react';
import './Course.css';
import CourseStore from '../Stores/CourseStore';
import FellowStore from '../Stores/FellowStore';

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fellows: FellowStore.getCourseFellows(props.courseId),
    };
    console.log('Init state', this.state);
  }

  componentWillMount() {

    FellowStore.on('change', () => {
      this.setState({
        fellows: FellowStore.getCourseFellows(this.props.courseId),
      });
      console.log('New fellows!!!', this.state);
    });
  }

  render() {
    const { courseId } = this.props;
    const FellowComponents = this.state.fellows.map((fellow) => {
      console.log('Fellow', fellow);
      let courseStatus;
      for (var index in fellow.courses) {
        if (fellow.courses[index].id == courseId){
          courseStatus = fellow.courses[index].status;  
          console.log('Course match', fellow.courses[index]);
        }  
      }; 
      return <li key={fellow.name}>{fellow.name} course state {courseStatus}</li>;
    });
    return (
            <ul >
              {FellowComponents}
            </ul>
        );
  }
}
