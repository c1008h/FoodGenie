import React, { useState } from 'react';

export const ResturauntForm = ({onSubmit}) => {
    const [userResturaunt, setUserResturaunt] = useState('');
    const [userLocation, setUserLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(userResturaunt, userLocation);
        setUserResturaunt('')
        setUserLocation('')
    };

    return(
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className='inputforms'>
                    <label style={{justifyContent:'center'}}>Resturaunt:                </label>
                    <input 
                        className="form-control" 
                        type="text" name="food" 
                        value={userResturaunt} 
                        onChange={e => setUserResturaunt(e.target.value)} />

                </div>
                <div className='inputforms'> 
                    <label>Location:</label>
                    <input className='form-control' type='text' 
                        name='location' 
                        value={userLocation} 
                        onChange={e => setUserLocation(e.target.value)} />
                </div>                
                    
                <input className='inputBtn' type="submit" value="Search" />
            </form>
        </div>
    )
}