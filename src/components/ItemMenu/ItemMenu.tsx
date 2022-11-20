import React from "react";
import './itemMenu.scss';

interface ICom {
    value: string;
    id: string;
}

const ItemMenu = (props: ICom) => {
    return (
        <li id={props.id} className="item">
            <input className="item__input" type="text" placeholder={props.value} />
            <button className="item__buttonMenu">Random {props.value}</button>
        </li>
    )
}

export default ItemMenu;