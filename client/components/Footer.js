import React from 'react';

function Footer() {
  return (
    <div id="footer">
      <ul id="footerList">
        <li className="footerItem">home</li>
        <li className="spacer"> | </li>
        <li className="footerItem">contact</li>
        <li className="spacer"> | </li>
        <li className="footerItem">about us</li>
        <li className="spacer"> | </li>
        <li className="footerItem">site map</li>
        <li className="spacer"> | </li>
        <li className="footerItem">stores</li>
        <li className="spacer"> | </li>
        <li className="footerItem">feedback</li>
      </ul>
      <p id="trademark"> &copy; copyright 2017 Williams Sonoma Inc </p>
    </div>
  )
}

export default Footer;
