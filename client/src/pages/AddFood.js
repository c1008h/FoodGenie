import React, {useState} from 'react';
import axios from 'axios';
import { FoodForm } from '../components/AddFood/FoodForm'
import { ListFood } from '../components/AddFood/ListFood'


export default function AddForm() {
    const [data, setData] = useState({});
    const [searchMade, setSearchMade] = useState(false);

    const handleFormSubmit = (userFood, userLocation) => {
       
        if(!userLocation || !userFood) {
            alert('Enter food and location!')
        }

        axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true

        axios
        .post("http://localhost:3005/api/food", { 

            userFood: userFood.trim(), 
            userLocation: userLocation.trim()
        })
        .then((response) => {
            // console.log(response.data);
            setSearchMade(true);
            setData(response.data)


        })
        .catch((error) => {
            console.error(error);
        });
       
    }

    return(
        <div className='container'>
            <FoodForm onSubmit={handleFormSubmit}/>
            {searchMade && <ListFood data={data} />}
        </div>
        
    )
}