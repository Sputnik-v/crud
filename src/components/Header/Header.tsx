import React from "react";
import { nanoid } from 'nanoid';
import './header.scss';
// import type { RootState } from '../../redux/store';
// import { useSelector, useDispatch } from 'react-redux';
// import {useSimbolName} from '../../redux/slices/testSlice';
import ItemMenu from "../ItemMenu/ItemMenu";

const Header = () => {

// const {name} = useSelector((state: RootState) => state.test);
// const dispatch = useDispatch();
const menu: Array<string> = ['FullName', 'Gender', 'JobType', 'Country', 'Finance']

    return (
        <>
            <form action="/" className="form">
                {menu.map((item, i) => {
                    return <ItemMenu id={nanoid()} key={i} value={item}/>
                })}
                <button className="form__buttonForm">Register User</button>
            </form>
           
        </>
    )
}

export default Header;