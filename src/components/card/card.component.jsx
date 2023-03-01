import { Component } from 'react';
import './card-styles.css'

class Card extends Component {
    render() {
        const { id, name, email} = this.props.monster
        return (
            <div className='card-container'>
                    <img alt={`monsters ${name}`} src={`https://robohash.org/${id}?set=set2&suze=180x180`}/>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
        )
    }
}