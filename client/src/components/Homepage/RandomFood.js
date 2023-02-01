import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'

export const RandomFood = ({userSavedFoods}) => {
    const [noData, setNoData] = useState(false)
    const [answer, setAnswer] = useState({})

    useEffect(() => {
        if(userSavedFoods.length !== 0) {
            setNoData(false)
            setAnswer(userSavedFoods[Math.floor(Math.random() * userSavedFoods.length)])
        } else {
            setNoData(true)
        }
    }, [userSavedFoods])

    return(
        <Container>
            {!noData? (
                <h3>{answer.foodtype}</h3>
            ) : (
                <h3>No saved foods available!</h3>
            )}
        </Container>
    )
}

