import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../../utils/queries'

export const RandomFood = ({isFood}) => {
    // console.log('Showing Randomized food')
    const [userData, setUserData] = useState({})
    const [answer, setAnswer] = useState({})

    const { data } = useQuery(QUERY_ME)
    useEffect(() => {
        if (data && data.me.savedFoods) {
            setUserData(data.me)
            setAnswer(data.me.savedFoods[Math.floor(Math.random() * data.me.savedFoods.length)])
        }
    }, [data, userData.savedFoods])

    console.log(answer)

    return(
        <div>
            <h2>{answer.name}</h2>
        </div>
    )
}

