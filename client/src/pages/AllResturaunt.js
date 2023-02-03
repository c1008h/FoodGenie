import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useQuery, useMutation } from '@apollo/client'
import { REMOVE_RESTURAUNT } from '../utils/mutations'
import { QUERY_ME } from '../utils/queries'
import { authService } from '../utils/auth'
import ResturauntCards from '../components/AllResturaunt/ResturauntCards'
import '../styles/all.css'

export default function AllResturaunt() {
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(true)
    const [removeResturaunt, { error }] = useMutation(REMOVE_RESTURAUNT);
    const { data } = useQuery(QUERY_ME)

    useEffect(() => {                                                                     
        if (data) {
            setUserData(data.me)
            setLoading(false)
        }
    }, [data])
    
    const userDataLength = data && data.me ? Object.keys(data.me).length : 0;

    const handleDeleteResturaunt = async (resturauntId) => {
        console.log(resturauntId)
        const token = authService.loggedIn() ? authService.getToken() : null
        if (!token) {
            return false
        }

        try {
            const updatedData = await removeResturaunt({
                variables: { resturauntId: resturauntId}
            })
            if(error) {
                throw new Error('Something went wrong.')
            }
            setUserData(updatedData.data.removeResturaunt)
        } catch (error) {
            console.error(error)
        }
    }
    const token = authService.loggedIn() ? authService.getToken() : null;

    if(!token) {
        return <h2>Please login first</h2>
    }
    if (error) {
        return <div>Error occurred while fetching data.</div>;
    }
    if(loading) {
        return <h2>LOADING...</h2>
    }

    return (
        <Container className='container'>
            <h4>
                {userDataLength?
                    `Viewing ${userData.savedResturaunts ? data.me.savedResturaunts.length : 0} saved ${data.me.savedResturaunts && data.me.savedResturaunts.length === 1 ? 'resturaunt' : 'resturaunts'}`
                    :
                    'You have no saved resturaunts!'
                }
            </h4>
            <ResturauntCards 
                userData={userData}
                handleDeleteResturaunt={handleDeleteResturaunt}
            />
        </Container>
    )
}