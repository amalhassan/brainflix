import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss';
import Logo from '../../assets/BrainFlix-logo.svg'
import SearchIcon from '../../assets/icons/search.svg'
import ProfileImage from '../../assets/images/Mohan-muruge.jpg' 
import UploadIcon from '../../assets/icons/upload.svg'
const Header = () => {
  return (
    <div className="header">
        <Link to="/">
          <div className="header__logo-container">
              <img className="header__logo" src={Logo} alt="logo"/>
          </div>
        </Link>
        <div className="header__nav">
            <div className="header__searchbar">
                <img className="header__icon" src={SearchIcon} alt=""/>
                <input className="header__input" type="text" placeholder='Search'></input>
            </div>
            <img className="header__avatar" src={ProfileImage} alt="avatar"/>
            
              <button className="header__upload-button" type="submit"><Link to="/upload" className="header__upload-link"><img className="icon" src={UploadIcon} alt="upload icon"/>Upload </Link></button>
            
        </div>
    </div>
  )
}

export default Header