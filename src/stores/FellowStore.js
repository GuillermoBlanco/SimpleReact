import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class FellowStore extends EventEmitter {
  constructor() {
    super();
    this.fellows = [
      {
        name: 'fellowName',
        courses: [
          {
            id: 'search',
            status: 'in-progress',
          },
          // {
          //   id: 'lifecycle-methods',
          //   status: 'done',
          // },
          {
            id: 'contact',
            status: 'done',
          },
        ],
      },
    ];
  }

  getAllFellows() {
    return this.fellows;
  }

  getCourseFellows(course) {
    // console.log('getting courses', course);
    // const returnFellows = this.fellows.filter((fellow) => {
    return this.fellows.filter((fellow) => {
      console.log('mappin fellow', fellow);
      for (const value of fellow.courses) {
        console.log('Course value', value);
        if (value.id === course) {return fellow;}
      }
    });
    // console.log('Fellows to return: ', returnFellows);
    // return returnFellows;
  }

  enrollFellow(name, course) {
    const cr = [{ id: course, status: 'in-progress' }];
    this.fellows.push({
      name,
      courses: cr,
    });
    console.log('Emitting!!', this.fellows);
    this.emit('change');
  }

  disenrollFellow(name, course) {
    for (const [fellowIndex, fellowValue] of this.fellows.entries()){
      if (fellowValue.name === name) {
        for (const [courseIndex, courseValue] of fellowValue.courses.entries()) {
          if (courseValue.id === course) {
            console.log('About to splice', this.fellows[fellowIndex].courses);
            this.fellows[fellowIndex].courses.splice(courseIndex, 1)
          }
        }
        break;
      }
    }
    console.log('Emitting!!', this.fellows);
    this.emit('change');
  }

  handleActions(action) {
    console.log('FellowStore receive an action', action);
    switch (action.type) {
    case 'ENROLL_FELLOW': {
      this.enrollFellow(action.name, action.course);
    }
    // case 'DISENROLL_FELLOW': {
    //   this.disenrollFellow(action.name, action.course);
    // }
    }
  }
}

const fellowStore = new FellowStore();
dispatcher.register(fellowStore.handleActions.bind(fellowStore));
// setTimeout(() => {
//   dispatcher.dispatch({ type: 'ENROLL_FELLOW', name: 'newFellow', course: 'search' });
// }, 3000);
// setTimeout(() => {
//   dispatcher.dispatch({ type: 'DISENROLL_FELLOW', name: 'newFellow', course: 'search' });
// }, 10000);
window.dispatcher = dispatcher;
export default fellowStore;
