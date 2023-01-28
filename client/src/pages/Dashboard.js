import React, {useState, useEffect} from 'react';
import { RandomFood } from '../components/Homepage/RandomFood';
import { RandomResturaunt } from '../components/Homepage/RandomResturaunt'


export default function Homepage() {

    const [ isFood ] = useState(false)
    // if( isFood )

    return (
        <div>
            <div>
                <h4>Do you wish you select...</h4>
                <button id='resturauntBtn' onClick={() => isFood(false)}>Resturaunt?</button>
                <button id='foodBtn' onClick={() => isFood(true)}>Food?</button>
            </div>
       <div>
                {!isFood ? (
                    <RandomFood />
                ) : (
                    <RandomResturaunt />
                )}
        </div> 
        </div>
    )
}
