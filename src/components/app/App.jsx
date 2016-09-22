import React, { Component, PropTypes } from 'react';
import './App.css';
import Navigation from '../Navigation';
import Course from '../Course';

export default class App extends Component {
  static navItems = [
    {id: 'search', content: 'Search'},
    {id: 'lifecycle-methods', content: 'Lifecycle Methods'},
    {id: 'contact', content: 'Contact'},
  ];
  constructor(props, context) {
    super(props, context);
    this.state = { activeNavItem: 'search', value: '' };
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
    const navItems = App.navItems;
    const { activeNavItem } = this.state;

    return navItems.map((navItem, index) => {
      const { content, id } = navItem;
      const key = `app-nav-item-${index}`;
      const className = activeNavItem === id ? 'active' : '';

      return (
        <li key={key} className={className} id={id} onClick={this._onNavItemClick}>{content}</li>
      );
    });
  }

  render() {
    const { activeNavItem, value } = this.state;
    console.log('Render app component');
    return (
      <div className="App">
        <Navigation logo="https://facebook.github.io/react/img/logo.svg">
          {this._renderNavItems()}
        </Navigation>
        <div className="App__content">
          Filtra en {activeNavItem}
          <input
            type="text"
            value={value}
            onChange={(event) => this.setState({ value: event.target.value })}
          />
          <Course courseId={1}/>
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
