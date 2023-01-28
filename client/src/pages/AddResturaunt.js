import React, {useState} from 'react';
import axios from 'axios';
import { ResturauntForm } from '../components/AddResturaunt/ResturauntForm'
import { ListResturaunt } from '../components/AddResturaunt/ListResturaunt'


export default function AddResturaunt() {
    const [data, setData] = useState({});
    const [searchMade, setSearchMade] = useState(false);

    const handleFormSubmit = (userResturaunt, userLocation) => {
       
        if(!userLocation || !userResturaunt) {
            alert('Enter food and location!')
        }

        axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true

        axios
        .post("http://localhost:3001/api/resturaunt", { 

            userResturaunt: userResturaunt.trim(), 
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
            <ResturauntForm onSubmit={handleFormSubmit}/>
            {searchMade && <ListResturaunt data={data} />}
        </div>
        
    )
}