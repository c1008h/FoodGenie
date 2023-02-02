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
        <div className='form-container'>
            <form onSubmit={handleSubmit} style={{margin:'1%'}}>
                <div className='inputforms'>
                    <label>Food:</label>
                    <input 
                        className="form-control" 
                        type="text" name="food" 
                        value={userFood} 
                        onChange={e => setUserFood(e.target.value)} 
                    />
                </div>
               <div className='inputforms'>
                    <label>Location:</label>
                    <input className='form-control' type='text' 
                        name='location' 
                        value={userLocation} 
                        onChange={e => setUserLocation(e.target.value)} 
                    />
               </div>
                <input className='inputBtn' type="submit" value="Search" />
            </form>
        </div>
    )
}