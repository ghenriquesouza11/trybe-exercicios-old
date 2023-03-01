// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import UserProfile from './UserProfile';
import users from './Users';

class App extends React.Component {
  render() {
    return (
      users.map(user => <UserProfile key={user.id} user = {user} />)
    );
  }
}

export default App;