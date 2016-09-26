import { EventEmitter } from 'events';

class CourseStore extends EventEmitter {
  constructor() {
    super();
    this.courses = [
    { id: 'search', content: 'Search course' },
    { id: 'lifecycle-methods', content: 'Lifecycle Methods course' },
    { id: 'contact', content: 'Contact course' },
    ];
  }

  getAllCourses() {
    return this.courses;
  }

  // getCourseFellows(course, filterStatus) {

  //   return this.fellows;
  // }
}

const courseStore = new CourseStore;
export default courseStore;
