
import React from 'react';
import '../App.css';
import {Edad} from './Edad';


export const NombreCompleto = (props) => {
    console.log("Props", props)
    return (
        <> {/* React.Fragment */}

            <h1 className="App">Me llamo {props.name}</h1>
            {/* Recibe props.age junto a name y manda a Edad en ageH el valor en props.age */}

            <Edad age={props.age} />
            
        </>
    );
}

//export default NombreCompleto
