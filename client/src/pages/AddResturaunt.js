import React, {useState} from 'react';
import { ResturauntForm } from '../components/AddResturaunt/ResturauntForm'
import { ListResturaunt } from '../components/AddResturaunt/ListResturaunt'
import { searchResturaunt } from '../utils/API';
import { authService } from '../utils/auth';

export default function AddResturaunt() {
    const [data, setData] = useState({});
    const [searchMade, setSearchMade] = useState(false);

    const handleFormSubmit = async (userResturaunt, userLocation) => {
       
        if(!userLocation || !userResturaunt) {
            alert('Enter food and location!')
        }

        // Using searchMade from API to search
        const search = await searchResturaunt(userResturaunt, userLocation)
        // console.log(search)
        setSearchMade(true);
        setData(search)
    }
    const token = authService.loggedIn() ? authService.getToken() : null;

    if(!token) {
        return <h2>Please login first</h2>
    }

    return(
        <div className='container'>
            <ResturauntForm onSubmit={handleFormSubmit}/>
            {searchMade && <ListResturaunt data={data} />}
        </div>
    )
}