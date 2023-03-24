

import React from "react";
import { useNavigate } from 'react-router-dom';

function Welcome() {
    let navigate = useNavigate();

    const callManualUpdate =() =>{
        navigate("table");
    };
    
    return (
        <div style={{
            display: 'grid',
            marginLeft: '20%',
            marginRight: '20%',
            paddingTop: '5%'
        }}>
            <input className="inputCss" placeholder="Table Name" />
            <input  className="inputCss" placeholder="Unique Column" />
            <input  className="inputCss" placeholder="Column Name" />
            <input className="inputCss" type="button" 
            onClick={() => callManualUpdate()} value="Manaul Update" />
        </div>
    )
}

export default Welcome;