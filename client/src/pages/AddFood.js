import React, {useState} from 'react';
import { FoodForm } from '../components/AddFood/FoodForm'
import { ListFood } from '../components/AddFood/ListFood'
import { searchFood } from '../utils/API';
import { authService } from '../utils/auth';

export default function AddForm() {
    const [data, setData] = useState({});
    const [searchMade, setSearchMade] = useState(false);
    const [food, setUserFood] = useState('')

    const handleFormSubmit =  async (userFood, userLocation) => {
        if(!userLocation || !userFood) {
            alert('Enter food and location!')
        }
        
        // Using searchMade from API to search
        const search = await searchFood(userFood, userLocation)
        console.log(search)
        setSearchMade(true);
        setData(search)
        setUserFood(userFood)
    }
    const token = authService.loggedIn() ? authService.getToken() : null;

    if(!token) {
        return <h2>Please login first</h2>
    }

    return(
        <div className='container'>
            <FoodForm onSubmit={handleFormSubmit}/>
            {searchMade && <ListFood food={food} data={data}/>}
        </div>
    )
}