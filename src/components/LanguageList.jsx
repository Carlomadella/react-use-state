// import  {useState} from 'react';
import Buttons from './Buttons.jsx';
import Card from './Card.jsx'

const LanguageList = () => {
    return (
        <>
            <div className= 'titolo'>
                <h1>Learn Web Development</h1>
            </div>
            <div className="container">
                <Buttons />
            <div>
                <Card />
            </div>
                
            </div>
            
        </>
    )
}

export default LanguageList;