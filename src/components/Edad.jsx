import React from 'react';
import '../App.css';

export const Edad = (props) => {
    console.log("Props Edad",props)
    return (
        <React.Fragment> 
            <p className="App">Mi edad es de {props.age} años</p>
        </React.Fragment>
    );
}
