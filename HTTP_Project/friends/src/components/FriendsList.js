import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriend, removeFriend } from '../actions';
import Friend from './Friend';
import { InputFriend } from './Input-Friend';
import { Header } from './Header';

class FriendsList extends Component {
    componentDidMount() {
        this.props.getFriends();   
    }
    render(){
        return (
            <div>
                <Header />
                <InputFriend main={this.props} />
                {this.props.friends.map((friend, i) => {
                    return (
                        <Friend main={this.props} friend={friend} index={i} />
                    );
                })}
                
                <div id="footer"> Copyright 2017 Track Seven Entertainment & Designs </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { getFriends, addFriend, removeFriend })(FriendsList);