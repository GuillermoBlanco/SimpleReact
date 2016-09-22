import { EventEmitter } from 'events';

class CourseStore extends EventEmitter {
  constructor() {
    super();
    this.fellows = [
      {
        name: 'x',
        courses: {
          '1': 'in-progress',
          '2': 'done',
          '3': 'done',
        },
      },
    ];
  }

  getAllFellows() {
    return this.fellows;
  }

  getCourseFellows(course) {

    return this.fellows.map((fellow) => {
      return fellow.courses.hasOwnProperty(course);
    });
  }

  // getCourseFellows(course, filterStatus) {
    
  //   return this.fellows;
  // }
}

const courseStore = new CourseStore;
export default courseStore;
