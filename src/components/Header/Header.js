import React from 'react';
import { SIGN_IN } from '../../constants/urls';
import './Header.css';

const Header = (props) => {

  const handleClick = () => {
    const { history } = props;
    localStorage.removeItem('token');
		history.push(SIGN_IN);
  }

  return  (
    <header>
      <span className="logout" onClick={handleClick}>Log out</span>
    </header>
  )
};

export default Header;