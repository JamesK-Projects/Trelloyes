import React from 'react';
import './List.css';
import Card from './Card';


class List extends React.Component{
    state = {
        cards: this.props.cards
    }

    handleDeleteItem = (item) => {
        console.log('delete item clicked', {item}, this.state.cards)
        const newItems = this.state.cards.filter(itm => itm !== item)
        this.setState({
            cards: newItems
        }) 
    }

    newRandomCard = () => {
        const id = Math.random().toString(36).substring(2, 4)
          + Math.random().toString(36).substring(2, 4);
        return {
          id,
          title: `Random Card ${id}`,
          content: 'lorem ipsum',
        }
      }
    
    handleAddRandomCard(){
        console.log('handle add random card called')
        this.setState(
            {
                cards:[...this.state.cards, this.newRandomCard()]
            }
        )
    }

    render(){
        return (
            <section className='List'>
                <header className='List-header'>
                    <h2>{this.props.header}</h2>
                </header>
                <div className='List-cards'>
                    {this.state.cards.map((card) => 
                        <Card 
                            key={card.id}
                            title={card.title}
                            content={card.content}
                            onDeleteItem = {this.handleDeleteItem}  
                            card={card}
                        />
                    )}
                    <button
                        type='button'
                        className='List-add-button'
                        onClick = { () => this.handleAddRandomCard(this.state.item)}
                    >
                        + Add Random Card
                    </button>
                </div>
            </section>
        )
    }
}
 
export default List;