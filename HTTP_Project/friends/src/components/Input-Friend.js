import React from 'react';
export const InputFriend = (props) => {
    return (
        
        <form id='input-add_form' autoComplete="off" onSubmit={(e)=>{
            e.preventDefault();

            const inputName = document.getElementById('input-name');
            const inputAge =  document.getElementById('input-age');
            const inputEmail = document.getElementById('input-email');

            if(inputName.value !== '' && inputAge.value !== '' && inputEmail.value !== ''){
            props.main.addFriend(
                inputName.value,
                inputAge.value,
                inputEmail.value
            );
            inputName.value = '';
            inputAge.value = '';
            inputEmail.value = '';
            } else {
                alert("FILL IN ALL DETAILS FIRST");
            }
            
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