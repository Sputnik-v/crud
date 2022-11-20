import React from "react";
import { User } from "../../../redux/slices/userSlice";
import './itemUser.scss';

interface IUsers {
    value: User;
    index: number;
}

const ItemUser = (props: IUsers) => {

    const {fullName, gender, country, jobType, finance} = props.value;
    const index = props.index;


    return (
       <li className="user">{`${index + 1}  ${fullName} ${gender} ${country} ${jobType} ${finance}`}</li>
    )
}

export default ItemUser;