import React, { Component } from 'react';
import List from './List';
import STORE from './store'
import './App.css';

class App extends Component {
  state = {
    store: STORE,
  }
   
  render(){
    const {store} = this.state
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'> 
          {store.lists.map(list => (
            <List 
              key = {list.id}
              id = {list.id}
              header = {list.header}
              cards = {list.cardIds.map(id => store.allCards[id])}
            />
          ))}
            
        </div>
      </div>
    );
  }
};

export default App;