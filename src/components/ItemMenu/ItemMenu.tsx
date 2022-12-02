
import React from "react";
import './itemMenu.scss';


interface ICom {
    placeholder: string;
    value: string;
    forValue: string;
    id: string;
    handleChange: (e: React.ChangeEvent<any>)=> void;
}

const ItemMenu = (props: ICom) => {



    return (
        <li id={props.id} className="item">
            <input className="item__input" type="text" value={props.forValue} name={props.value} placeholder={props.placeholder} onChange={props.handleChange}  required />
            <button className="item__buttonMenu">Random {props.value}</button>
        </li>
    )
}

export default ItemMenu;