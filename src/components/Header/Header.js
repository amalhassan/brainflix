import React from 'react'
import './Header.scss';
import Logo from '../../assets/BrainFlix-logo.svg'
import SearchIcon from '../../assets/icons/search.svg'
import ProfileImage from '../../assets/images/Mohan-muruge.jpg' 
import UploadIcon from '../../assets/icons/upload.svg'
function Header() {
  return (
    <div className="header">
        <div className="header__logo-container">
            <a href="#"><img className="header__logo" src={Logo} alt="logo"/></a>
        </div>
        <div className="header__nav">
            <div className="header__searchbar">
                <img className="header__search-icon" src={SearchIcon} alt=""/>
                <input className="header__input" type="text" placeholder='Search'></input>
            </div>
            <img className="header__avatar" src={ProfileImage} alt="avatar"/>
            <button className="header__upload-button" type="submit"><img className="btn-icon" src={UploadIcon} alt=""/>Upload</button>
        </div>

    </div>
  )
}

export default Header