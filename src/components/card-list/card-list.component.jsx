import { Component } from 'react';


class CardList extends Component{
    render(){
        const { monsters } = this.props;
        return (
        <div className='card-list'>
            {monsters.map(monster => {
                const { name, email, id } = monster;
                return (
                <div className='card-container'>
                    <img alt={`monsters ${name}`} src={`https://robohash.org/${id}?set=set2&suze=180x180`}/>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            );
            })}
      </div>
        )
    }
}

export default CardList;