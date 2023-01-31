import React, {useState, useEffect} from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_ME } from '../../utils/queries'

export const RandomResturaunt = ({isFood}) => {
    // console.log('Showing Randomized food')
    const [userData, setUserData] = useState({})
    const [answer, setAnswer] = useState({})

    const { data } = useQuery(QUERY_ME)
    useEffect(() => {
        if (data && data.me.savedResturaunts) {
            setUserData(data.me)
            setAnswer(data.me.savedResturaunts[Math.floor(Math.random() * data.me.savedResturaunts.length)])
        }
    }, [data, userData.savedResturaunts])
  
    console.log(answer)
    return(
        <div>
            <h2>{answer.name}</h2>
        </div>
    )
    
}