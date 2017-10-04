import axios from 'axios';
export const GET_FRIENDS = 'GET_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';

export const getFriends = () => {
    const data = axios.get('http://localhost:5000/friends');
    return{
        type: GET_FRIENDS,
        payload: data
    };
};

export const addFriend = (name, age, email) => {
   const data = axios.post('http://localhost:5000/new-friend', {
		name: name,
		age: age,
        email: email
    });
    return{
        type: ADD_FRIEND,
        payload: data
    };
};

export const removeFriend = (index) => {
    const data = axios.delete('http://localhost:5000/delete-friend', {data:{index:index}});
    return {
        type: REMOVE_FRIEND,
        payload: data
    };
};

export const updateFriend = (index, name, age, email) => {
    const data = axios.put('http://localhost:5000/update-friend',{
        
            index:index,
            update: {
                name: name,
                age: age,
                email: email
            }
        });
    return {
        type: UPDATE_FRIEND,
        payload: data
    };
};