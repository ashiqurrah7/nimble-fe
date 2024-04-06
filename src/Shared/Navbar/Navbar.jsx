import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { StyledContainer, StyledButton } from './NavbarStyles';

const Navbar = ({token, setToken}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('token');
    setToken(null);
    navigate('/login');
  }

  return (
    <StyledContainer>
      { token ? (
        <>
          <div>
            <Link to='/'>Add Keyword</Link>
            <Link to='/keywords'>Keywords</Link>
          </div>
          <StyledButton onClick={handleLogout}>Logout</StyledButton>
        </>
      ) : (
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
        </div>
      )}
    </StyledContainer>
  )
}

export default Navbar
