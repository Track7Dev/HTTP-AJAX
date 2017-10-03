import React from 'react';
export const InputFriend = (props) => {
    return (
        
        <form autoComplete="off" onSubmit={(e)=>{
            e.preventDefault();
            props.main.addFriend(
                document.getElementById('input-name').value,
                document.getElementById('input-age').value,
                document.getElementById('input-email').value
            );
            document.getElementById('input-name').value = '';
            document.getElementById('input-age').value = '';
            document.getElementById('input-email').value = '';
            
        }}>
            <input id="input-name" placeholder="Name"/>
            <input id="input-age"  placeholder="Age"/>
            <input id="input-email" placeholder="Email"/>
            <input type="submit" hidden />
            <br/>
            <br/>
        </form>
        
    );

};