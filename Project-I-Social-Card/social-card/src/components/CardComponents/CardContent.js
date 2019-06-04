import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
     <div className='CardContent'>
         <h5 className='title'> Get Started with React</h5>
          <p className="cardInfo">React makes it painless to create interactive UIs. Design simple views for each state im your application</p>
           <a className='cardLink' href = "http://www.reactjs.org">ReactJS.org</a>
      </div>
    );
};

export default CardContent;