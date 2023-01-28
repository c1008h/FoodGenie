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
        <div>
            <form onSubmit={handleSubmit} style={{margin:'1%'}}>
                <label style={{justifyContent:'center'}}>Resturaunt:
                    <input 
                        className="form-control" 
                        type="text" name="food" 
                        value={userResturaunt} 
                        onChange={e => setUserResturaunt(e.target.value)} />
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