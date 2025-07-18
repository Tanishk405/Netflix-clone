import React from 'react'
import "../Footer/Footer.css"

import youtube_icon from "/src/assets/youtube_icon.png";
import facebook_icon from "/src/assets/facebook_icon.png";
import twitter_icon from "/src/assets/instagram_icon.png";
import instagram_icon from "/src/assets/twitter_icon.png";

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
        <ul>
          <li>FAQ</li>
          <li>Media Center</li>
          <li>Audio Description</li>
          <li>Audio Description</li>
          <li>Audio Description</li>
          <li>Audio Description</li>
          <li>Audio Description</li>
          <li>Audio Description</li>
          <li>Audio Description</li>
          <li>Audio Description</li>
        </ul>
        <p className='copyright-text'>
          © 1997-2023 Netlfix, Inc.
        </p>
    </div>
  )
}

export default Footer