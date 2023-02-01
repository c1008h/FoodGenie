import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'

export const RandomResturaunt = ({userSavedResturants}) => {
    const [answer, setAnswer] = useState({})
    const [noData, setNoData] = useState(false)

    useEffect(() => {
        if(userSavedResturants.length !== 0) {
            setNoData(false)
            setAnswer(userSavedResturants[Math.floor(Math.random() * userSavedResturants.length)])

        } else {
            setNoData(true)
        }
    }, [userSavedResturants])
    // console.log(data.me)
    // console.log(userSavedResturants.length)
    // console.log(answer)
    
    return( 
        <Container>
        {!noData? (
            <h3>{answer.name}</h3>
        ) : (
            <h3>No saved resturaunts available!</h3>
        )}
        </Container>
    )
    
}