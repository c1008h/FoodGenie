import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { authService } from '../utils/auth';

function Navbar(props) {
    // const { user, logout} = useContext(AuthContext)

    // const onLogout = () => {
    //     logout();
    //     Navigate('/')
    // }
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to='/'>Food Genie</Link>
            <DropdownButton id="dropdown-basic-button" title="More" >
            {authService.loggedIn() && !authService.isTokenExpired() ? (

                <>
                <Dropdown.Item as={Link} to="/allfoods">All Foods</Dropdown.Item>
                <Dropdown.Item as={Link} to="/allresturaunts">All Resturaunts</Dropdown.Item>
                <Dropdown.Item as={Link} to="/addfood">Add Food</Dropdown.Item>
                <Dropdown.Item as={Link} to="/addresturaunt">Add Resturaunt</Dropdown.Item>
                <Dropdown.Item as={Link} to="/allfoods" onClick={ () => authService.logout() }>Logout</Dropdown.Item>
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