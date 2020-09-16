import React, { Component } from 'react';
import List from './List';
import STORE from './store'
import './App.css';

class App extends Component {
  state = {
    store: STORE,
  }

  handleDeleteItem = (cardId) => {
    const newItems = this.state.cards.filter(itm => itm !== cardId)
    this.setState({
      cards: newItems
    })
    console.log('handle delete item called', {cardId})
  }

  handleAddRandomCard(item){
    console.log('handle add random card called', {item})
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
              onDeleteItem = {this.handleDeleteItem}
              onRandomCard = {this.handleAddRandomCard}
            />
          ))}
            
        </div>
      </div>
    );
  }
};

export default App;