import { EventEmitter } from 'events';

class FellowStore extends EventEmitter {
  constructor() {
    super();
    this.fellows = [
      {
        name: 'x',
        courses: [
          {
            id: 1,
            status: 'in-progress',
          },
          {
            id: 2,
            status: 'done',
          },
          {
            id: 3,
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
    console.log("getting courses", course);

    return this.fellows.map((fellow) => {
      console.log('mappin fellow', fellow);
      for (const value of fellow.courses) {
        console.log('Course value', value);
        if (value.id === course) {return fellow;}
      }
    });
  }

  enrollFellow(name, course) {
    this.fellows.push({
      name,
      courses: [course],
    });
  }
}

const fellowStore = new FellowStore();
export default fellowStore;
