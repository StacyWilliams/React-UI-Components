import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faRetweet, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';


const Footer = () => {
    return (
        <div >
            <ul className="footer">
             <li><button ><FontAwesomeIcon icon={faComment} /></button></li> 
              <li><button><FontAwesomeIcon icon={faRetweet} /></button></li>
              <li><button><FontAwesomeIcon icon={faHeart} /></button></li>
              <li><button><FontAwesomeIcon icon={faEnvelope} /></button></li>
            </ul>
        </div>
    )
}


export default Footer;