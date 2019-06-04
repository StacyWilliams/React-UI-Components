import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faRetweet, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';


const Footer = () => {
    return (
        <div >
            <ul className="footer">
             <li><FontAwesomeIcon icon={faComment} /></li> 
              <li><FontAwesomeIcon icon={faRetweet} /></li>
              <li><FontAwesomeIcon icon={faHeart} /></li>
              <li> <FontAwesomeIcon icon={faEnvelope} /></li>
            </ul>
        </div>
    )
}


export default Footer;