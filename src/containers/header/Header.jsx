import React from 'react';
import './header.css';
import mandala from '../../assets/madala2.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let&apos;s Build Something amazing with Mandala!</h1>
        <p>Generate your own uniqe and colorful mandalas using our tool with your name or any hash of your liking with a click of a button!</p>

          <div className="gpt3__header-content__input">
            <button type="button">Try now</button>
        </div>
      </div>
      <div className="gpt3__header-image">
      <img src={mandala} />
    </div>
    </div>
  )
}

export default Header