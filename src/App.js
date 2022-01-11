import React from 'react';
import { UserChildren, UserClass, UserFunction } from './user';

export default class App extends React.Component {
  state = {
    users: [
      { name: 'Ivan', years: 30 },
      { name: 'Marko', years: 35 },
      { name: 'Ana', years: 25 },
    ],
    children: 'A hobi mi je plivanje.',
  };

  handleButtonPress = () => {
    const { users } = this.state;

    const newUsers = users.map(user => {
      return { ...user, years: user.years + 1 };
    });

    this.setState({ users: newUsers });
  };
  
  change1Name = (e) => {
    const { users } = this.state;
    const value = e.target.value;
    this.state.users[0].name = value
    this.forceUpdate()
  };

  change2Name = (e) => {
    const { users } = this.state;
    const value = e.target.value;
    this.state.users[1].name = value
    this.forceUpdate()
  };

  change3Name = (e) => {
    const { users } = this.state;
    const value = e.target.value;
    this.state.users[2].name = value
    this.forceUpdate()
  };

  render() {
    const { users, children } = this.state;
     
    return (
      <div>
        <h1>React aplikacija</h1>
        <p>Ovo zbilja radi</p>
        <button onClick={this.handleButtonPress}>Promjena godina</button>
        <UserFunction name={users[0].name} years={users[0].years} />
        <UserFunction name={users[1].name} years={users[1].years} />
        <UserClass name={users[2].name} years={users[2].years} />
        <UserChildren name={users[2].name} years={users[2].years}>
          {children}
        </UserChildren>
        <p><input type="text" placeholder={users[0].name} onChange={this.change1Name} /></p>
        <p><input type="text" placeholder={users[1].name} onChange={this.change2Name}  /></p>
        <p><input type="text" placeholder={users[2].name} onChange={this.change3Name}  /></p>
      </div>
    );
  }
}
