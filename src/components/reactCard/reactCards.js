import React from 'react';
import ReactCard from './reactCard';

const ReactCards = (props) => props.cards.map((card,index)=>{
                                    return <ReactCard name={card.name} 
                                                description={card.description} 
                                                removeCardHandler={event => props.removeCardHandler(event,index)} 
                                                key={card.id} 
                                                changeNameHandler={event => props.changeNameHandler(event,card.id)}
                                                changeDescriptionHandler={event => props.changeDescriptionHandler(event,card.id)}
                                                />
                            })     
                            
export default ReactCards;