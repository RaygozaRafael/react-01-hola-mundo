import {Edad} from './Edad';
import '../App.css';

const Mascota = ({name, age}) => {
    return (
        <> {/* React.Fragment */}

            <h1 className="Mascota">Soy mascota de nombre {name}</h1>
            {/* Recibe props.age junto a name y manda a Edad en ageH el valor en props.age */}

            <Edad age={age} />
            
        </>
    );
}

export default Mascota
