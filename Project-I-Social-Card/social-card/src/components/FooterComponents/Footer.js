import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faRetweet, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons'
 


const Footer = () => {
    return (
        <div>
            <ul>
             <FontAwesomeIcon icon={faComment} />
             <FontAwesomeIcon icon={faRetweet} />
             <FontAwesomeIcon icon={faHeart} />
             <FontAwesomeIcon icon={faEnvelope} />
            </ul>
        </div>
    )
}


export default Footer;