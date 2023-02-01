import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { authService } from '../utils/auth';

function Navbar(props) {
    const logout = (event) => {
        event.preventDefault();
        authService.logout();
    }

    return (
        <nav className='navbar navbar-expand-lg navbar-light' style={{backgroundColor:'#6666ff'}}>
            <Link to='/' style={{color:'white', textDecoration:'none'}}>Food Genie</Link>
            <DropdownButton id="dropdown-basic-button" style={{backgroundColor:'orange'}} title="More" >
            {authService.loggedIn() ? (

                <>
                <Dropdown.Item as={Link} to="/allfoods">All Foods</Dropdown.Item>
                <Dropdown.Item as={Link} to="/allresturaunts">All Resturaunts</Dropdown.Item>
                <Dropdown.Item as={Link} to="/addfood">Add Food</Dropdown.Item>
                <Dropdown.Item as={Link} to="/addresturaunt">Add Resturaunt</Dropdown.Item>
                <Dropdown.Item as={Link} to="/allfoods" onClick={ logout }>Logout</Dropdown.Item>
                </>
            ) : (
                <>
                <Dropdown.Item as={Link} to="/login">Login</Dropdown.Item>
                <Dropdown.Item as={Link} to="/signup">Signup</Dropdown.Item>
                </>
            )}
            </DropdownButton> 
        </nav>
    )
}
export default Navbar;