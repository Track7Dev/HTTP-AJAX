import React, { Component } from 'react';

export default class Friend extends Component {
    render(){
        return(
            <div className="display-friend" key={this.props.index}>
                <p>{`Friend ${this.props.index+1}`}</p>
                <p>{`Name: ${this.props.friend.name}`}</p>
                <p>{`Age: ${this.props.friend.age}`}</p>
                <p>{`Email: ${this.props.friend.email}`}</p>
                <button onClick={() => {
                    if(window.confirm(`Are You Sure You Want To Remove ${this.props.friend.name} As Your Friend`)) 
                    this.props.main.removeFriend(this.props.index);
                }}>REMOVE</button>
            </div>
        );
    }
}