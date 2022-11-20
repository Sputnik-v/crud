import React from 'react';
import './title.scss';

const Title = () => {
    return (
        <div className="title">
            <div className="title__logo">
                <img src='./assets/images/virus.svg' alt="virus" />
            </div>
            <h1 className="title__head">This is my <a href='/'><span className='title__head--word'>Faker</span></a></h1>
            <div className="title__burger">
                <img src='./assets/images/burger.svg' alt="burger" />
            </div>
        </div>
    )
}

export default Title;