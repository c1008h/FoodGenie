import React, {useState} from "react";
import {authService} from '../utils/auth';

import { RandomFood } from '../components/Homepage/RandomFood';
import { RandomResturaunt } from '../components/Homepage/RandomResturaunt'


export default function Homepage() {
    const [ isFood ] = useState(false)
    
    var permission = false;
    if (authService.loggedIn()) {
        permission = authService.getProfile().data.permission;
    }

    const logout = (event) => {
        event.preventDefault();
        authService.logout();
    };

    return (
        <>
            {authService.loggedIn() ? (
                <>
                    <h4>What choice would you like?</h4>
                    <button id='resturauntBtn' onClick={() => isFood(false)}>Resturaunt?</button>
                    <button id='foodBtn' onClick={() => isFood(true)}>Food?</button>
                    {isFood ?
                        <RandomFood /> 
                    :
                        <RandomResturaunt />
                    }
                </>
            ):(
                <>
                <h2>Welcome to the food Genie!</h2>
                </>
            )}
        
        </>
    )
}
