import React from "react";
import ItemUser from "./itemUser/ItemUser";
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { renameUserOne } from '../../redux/slices/userSlice';

import './users.scss';

const Users = () => {

    const users = useSelector((state: RootState) => state.userSlice);
    const dispatch = useDispatch();

    return (
        <div className="items">
            <h2 className="items__title" onClick={() => dispatch(renameUserOne('Irina Volkova'))}>Our Register Users</h2>
            <ul className="items__ul">
                {
                    users.map((item, index) => {
                        return <ItemUser key={index} index={index} value={item}/>
                    })
                }
            </ul>
        </div>
    )
}

export default Users;