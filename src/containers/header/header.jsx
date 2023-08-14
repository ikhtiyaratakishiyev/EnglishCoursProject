import React from 'react';

import studing from '../../assets/studing.jpg'
// import people from '../../assets/people.png'
// import ai from '../../assets/ai.png'

import './header.scss';

const Header = () => {
  return (
    <div className='Ayna__header section__padding' id='home'>
        <div className="Ayna__header-content">
          <h1 className='gradient__text'>Studying with us will be the secret of your success</h1>
          <p>If you still want to learn and are looking for some platform for it, you are at the right place.Our teachers will teach you what you want to learn using the most correct methods</p>
          <div className="Ayna__header-content__input">
            <input type="email" placeholder='Your email adress' />
            <button type='butten'>Get Started</button>
          </div>
       
         
        </div>
        <div className="Ayna__header-image">
            <img src={studing} alt="studing" />
          </div>
    </div>
  )
}

export default Header