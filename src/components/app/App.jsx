import React, { Component, PropTypes } from 'react';
import './App.css';
import Navigation from '../Navigation';
import Course from '../Course';

import CourseStore from '../../stores/CourseStore';
import * as FellowActions from '../../actions/FellowActions';

export default class App extends Component {
  // static navItems = [
  //   {id: 'search', content: 'Search course'},
  //   {id: 'lifecycle-methods', content: 'Lifecycle Methods course'},
  //   {id: 'contact', content: 'Contact course'},
  // ];
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeNavItem: 'search',
      value: '',
      filter: '',
      courses: CourseStore.getAllCourses(),
    };
  }

  enroll() {
    if (this.state.value) {FellowActions.enrollFellow(this.state.value, this.state.activeNavItem);}
  }

  updateUserInput(e) {
    this.setState({ filter: e.target.value });
  }

  _onNavItemClick = (event) => {
    const id = event.target.id;
    const { activeNavItem } = this.state;
    console.log('New event!!', event);
    if (id !== activeNavItem) {
      this.setState({ activeNavItem: id });
    }
  }

  _renderNavItems() {
    // const navItems = App.navItems;
    const { activeNavItem, courses } = this.state;

    return courses.map((navItem, index) => {
      const { content, id } = navItem;
      const key = `app-nav-item-${index}`;
      const className = activeNavItem === id ? 'active' : '';

      return (
        <li key={key} className={className} id={id} onClick={this._onNavItemClick}>{content}</li>
      );
    });
  }

  render() {
      // <Navigation logo="https://facebook.github.io/react/img/logo.svg">
    const { activeNavItem, value } = this.state;
    console.log('Render app component');
    return (
      <div className="App">
        <Navigation logo="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQOufBsWKd7XdjcHCphRfFsoWMNrrTBxujV6B-Xjpq3n-Er0NYEDA">
          {this._renderNavItems()}
        </Navigation>
        <div className="App__content">
          Curso: {activeNavItem}.<p> Nuevo alumno: </p>
          <input
            type="text"
            value={value}
            onChange={(event) => this.setState({ value: event.target.value })}
          />
          <button onClick={this.enroll.bind(this)}>Enroll!</button>
          <p>Alumnos:</p>
          <input
            type="text"
            placeholder="Filtrar por nombre ..."
            onChange={this.updateUserInput.bind(this)}
          />
          <Course courseId={activeNavItem} filter={this.state.filter}/>
          <p>{value}</p>
        </div>
      </div>
    );
  }
}

/* Stateless-component
   -------------------
const App = () => (
 <div>Hello World!! This is My First Component</div>
);
export default App;
*/
