const Clima = ({weather}) => {

    const {name, main} = weather;
    //pasar de kelvin a °c
    let kelvin = 273.15;

    if(!name){
        return null
    }

    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <p>El clima de {name} es: </p>
                <p className="temperatura">
                    { parseFloat(main.temp - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>Temperatura máxima: 
                    { parseFloat(main.temp_max - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
                <p>Temperatura minima: 
                    { parseFloat(main.temp_min - kelvin, 10).toFixed(2)} <span>&#x2103;</span>
                </p>
            </div>
        </div>
    );
}
 
export default Clima;