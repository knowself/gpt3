import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navigation.css';


// BEM -> Block Element Modifier

const Menu = () => (
<>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is GPT3?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Library</a></p>
</>
)

const Navigation = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navigation'>
      <div className='gpt3__navigation-links'>
        <div className='gpt3__navigation-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='gpt3__navigation-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navigation-links_sign'>
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className='gpt3__navigation-links_menu'>
        { toggleMenu 
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className="gpt3__navigation-links_menu_container scale-up-center">
              <div className="gpt3__navigation-links_menu_container-links">
                <Menu />
                <div className="gpt3__navigation-links_menu_container-links-sign">
                  <p>Sign In</p>
                  <button type="button">Sign Up</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
      
    </div>
  )
}

export default Navigation