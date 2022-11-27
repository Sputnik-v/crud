import React from "react";
import ItemUser from "./itemUser/ItemUser";
import type { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

import './users.scss';

const Users = () => {

    const users = useSelector((state: RootState) => state.userSlice);
    //const dispatch = useDispatch();

    return (
        <div className="items">
            <h2 className="items__title">Our Register Users</h2>
            <table className="table">
                <thead className="table__header">
                    <tr className="table__header-tr">
                        <th>number</th>
                        <th>fullName</th>
                        <th>gender</th>
                        <th>country</th>
                        <th>jobType</th>
                        <th>finance</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((item, index) => {
                        return <ItemUser key={index} index={index} value={item}/>
                    })
                }
                </tbody>
                <tfoot className="table__footer">
                    <tr>
                        
                        <td colSpan={3}>Total: <span></span></td>
                        <td colSpan={3}>Total salary: <span></span></td>
                        
                    </tr>
                </tfoot>
            </table>
            {/* <ul className="items__ul">
                {
                    users.map((item, index) => {
                        return <ItemUser key={index} index={index} value={item}/>
                    })
                }
            </ul> */}
        </div>
    )
}

export default Users;