import React from "react";
import { User } from "../../../redux/slices/userSlice";
import './itemUser.scss';

export interface IUsers {
    value: User;
    index: number;
}

const ItemUser = (props: IUsers) => {

    const {fullName, gender, country, jobType, finance} = props.value;
    const index = props.index;


    return (
        <tr className="table__tr">
            <td className="table__td table__td-index">{index + 1}</td>
            <td className="table__td table__td-fullName">{fullName}</td>
            <td className="table__td table__td-gender">{gender}</td>
            <td className="table__td table__td-country">{country}</td>
            <td className="table__td table__td-jobType">{jobType}</td>
            <td className="table__td table__td-finance">{finance}</td>
        </tr>
       //<li className="user">{`${index + 1}  ${fullName} ${gender} ${country} ${jobType} ${finance}`}</li>
    )
}

export default ItemUser;