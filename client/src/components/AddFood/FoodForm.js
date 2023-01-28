import React, { useState } from 'react';

export const FoodForm = ({onSubmit}) => {
    const [userFood, setUserFood] = useState('');
    const [userLocation, setUserLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(userFood, userLocation);
        setUserFood('')
        setUserLocation('')
    };

    return(
        <div>
            <form onSubmit={handleSubmit} style={{margin:'1%'}}>
                <label style={{justifyContent:'center'}}>Food:
                    <input 
                        className="form-control" 
                        type="text" name="food" 
                        value={userFood} 
                        onChange={e => setUserFood(e.target.value)} />
                </label>
                <label>Location:
                    <input className='form-control' type='text' 
                        name='location' 
                        value={userLocation} 
                        onChange={e => setUserLocation(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}