import React, { Component } from 'react';

export default class Friend extends Component {
    showUpdate(){
        if(document.getElementById('input-update_form' + this.props.index).style.display === 'none'){
            document.getElementById('input-update_form' + this.props.index).style.display = 'block';
        } else {
            document.getElementById('input-update_form' + this.props.index).style.display = "none";
        }
    }
    render(){
        window.onload = () => {document.getElementById('input-update_form' + this.props.index ).style.display = 'none';};
        return(
            <div className="display-friend">
                <p>{`Friend ${this.props.index+1}`}</p>
                <p>{`Name: ${this.props.friend.name}`}</p>
                <p>{`Age: ${this.props.friend.age}`}</p>
                <p>{`Email: ${this.props.friend.email}`}</p>
                <form id={"input-update_form" + this.props.index} className="input-update_form" autoComplete="off" onSubmit={(e)=>{ 
                    
                    e.preventDefault(); 
                    const input_name = document.getElementById('friend-input-name'+ this.props.index).value;
                    const input_age = document.getElementById('friend-input-age'+ this.props.index).value;
                    const input_email = document.getElementById('friend-input-email'+ this.props.index).value; 
                    
                    this.props.main.updateFriend(this.props.index, input_name, input_age, input_email);
                    document.getElementById('input-update_form' + this.props.index ).style.display = 'none';
                }}>
                    <label>UPDATE:</label><br/>
                    <label>Name:</label><input id={'friend-input-name'+ this.props.index} placeholder={this.props.friend.name}/><br/>
                    <label>Age:</label><input id={'friend-input-age' + this.props.index} placeholder={this.props.friend.age}/><br/>
                    <label>Email:</label><input id={'friend-input-email' + this.props.index} placeholder={this.props.friend.email}/><br/>
                    <input type="submit" hidden />
                </form>
                <br/>
                <button onClick={() => {
                    if(window.confirm(`Are You Sure You Want To Remove ${this.props.friend.name} As Your Friend`)){ 
                    this.props.main.removeFriend(this.props.index);
                    }
                }}>REMOVE</button>
                <button onClick={(e) => { this.showUpdate();}}>UPDATE</button>
            </div>
        );
    }
}